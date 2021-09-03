import { Interface, JsonFragment } from "@ethersproject/abi";
import { BigNumber } from "@ethersproject/bignumber";
import { Transaction } from "@ethersproject/transactions";
import { ContractReceipt } from "@ethersproject/contracts";
import { MockManager } from "./mock-manager";

type CallOptions = {
  contractAddress?: string;
  callValues?: readonly any[];
};

type TxOptions = {
  from?: string;
  to?: string;
  txValues?: readonly any[];
};

type MockOptions = {
  persistent?: boolean;
  shouldThrow?: boolean;
  timeout?: number;
};

export class ContractUtils {
  private mockManager: MockManager;
  private contractInterface: Interface;

  constructor(mockManager: MockManager, abi: readonly JsonFragment[]) {
    this.mockManager = mockManager;
    this.contractInterface = new Interface(abi);
  }

  public mockCall(
    functionName: string,
    values: readonly any[] | undefined,
    callOptions: CallOptions = {},
    mockOptions: MockOptions = {}
  ) {
    const { contractAddress, callValues } = callOptions;
    const condition = (params: unknown[]) => {
      const ethCallParams = params as [{ to: string; data: string }, string];
      const { to, data } = ethCallParams[0];
      const isTargetedContract = contractAddress
        ? contractAddress === to
        : true;
      const isTargetedFunction = callValues
        ? data ===
          this.contractInterface.encodeFunctionData(functionName, callValues)
        : data.startsWith(this.contractInterface.getSighash(functionName));
      return isTargetedContract && isTargetedFunction;
    };
    const callResult = this.contractInterface.encodeFunctionResult(
      functionName,
      values
    );
    this.mockManager.mockRequest("eth_call", callResult, {
      condition,
      ...mockOptions,
    });
  }

  public mockTransaction(
    functionName: string,
    txOptions: TxOptions = {},
    mockOptions: MockOptions = {}
  ) {
    const chainIdMock =
      this.mockManager.findUnconditionalPersistentMock("eth_chainId");
    if (!chainIdMock) {
      throw new Error(
        "Unable to properly mock transaction because chain ID has not been properly set up."
      );
    }

    const accountMock =
      this.mockManager.findUnconditionalPersistentMock("eth_accounts");
    if (!accountMock) {
      throw new Error(
        "Unable to properly mock transaction because account has not been properly set up."
      );
    }

    const { txValues, from, to } = txOptions;

    const blockNumber =
      "0x0000000000000000000000000000000000000000000000000000000000000001";
    this.mockManager.mockRequest("eth_blockNumber", blockNumber);

    const [mockedAccount] = accountMock.data as string[];
    const fromAddress = from || mockedAccount;
    const toAddress = to || "0x138071e4e810f34265bd833be9c5dd96f01bd8a5";
    const condition = (params: readonly unknown[]) => {
      const estimateGasOrSendTransactionParams = params as [
        { from: string; to: string; data: string }
      ];
      const { from, to, data } = estimateGasOrSendTransactionParams[0];
      const isTargetedFunction = txValues
        ? data ===
          this.contractInterface.encodeFunctionData(functionName, txValues)
        : data.startsWith(this.contractInterface.getSighash(functionName));
      return (
        from.toLowerCase() === fromAddress.toLowerCase() &&
        to.toLowerCase() === toAddress.toLowerCase() &&
        isTargetedFunction
      );
    };
    const gasEstimation =
      "0x0000000000000000000000000000000000000000000000000000000000010000";
    this.mockManager.mockRequest("eth_estimateGas", gasEstimation, {
      condition,
    });
    const txHash =
      "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c";
    this.mockManager.mockRequest("eth_sendTransaction", txHash, {
      condition,
      ...mockOptions,
    });

    const txData = txValues
      ? this.contractInterface.encodeFunctionData(functionName, txValues)
      : "0x55241077000000000000000000000000000000000000000000000000000000000000007b";
    const tx: Transaction = {
      to: toAddress,
      from: fromAddress,
      data: txData,
      chainId: 1,
      hash: txHash,
      nonce: 1,
      gasLimit: BigNumber.from(1),
      value: BigNumber.from(0),
    };
    const getTxCondition = (params: readonly unknown[]) => {
      const getTxByHashParams = params as [string];
      const hash = getTxByHashParams[0];
      return hash === txHash;
    };
    this.mockManager.mockRequest("eth_getTransactionByHash", tx, {
      condition: getTxCondition,
    });
    const blockHash =
      "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c";
    const txReceipt: ContractReceipt = {
      to: toAddress,
      from: fromAddress,
      contractAddress: toAddress,
      transactionIndex: 1,
      gasUsed: BigNumber.from(1),
      logsBloom: "",
      blockHash,
      transactionHash: txHash,
      logs: [],
      blockNumber: 1,
      confirmations: 1,
      cumulativeGasUsed: BigNumber.from(1),
      effectiveGasPrice: BigNumber.from(1),
      byzantium: true,
      type: 1,
    };
    this.mockManager.mockRequest("eth_getTransactionReceipt", txReceipt, {
      condition: getTxCondition,
    });
  }
}