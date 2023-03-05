import { ethers, EventFilter } from "ethers";
import { Interface, JsonFragment, Fragment } from "@ethersproject/abi";
import { BigNumber } from "@ethersproject/bignumber";
import { MockManager } from "../mock-manager";
import { MockCondition, MockOptions } from "../types";
import {
  AbiError,
  AbiEvent,
  AbiFunction,
  ExtractAbiEventNames,
  ExtractAbiFunctionNames,
} from "abitype";
import {
  JsonRPCMethod,
  TransactionReceipt,
  Log,
  PendingTransaction,
} from "../json-rpc-methods-types";
import { ProviderType } from "../providers";

type CallOptions = {
  contractAddress?: string;
  callValues?: readonly any[];
};

type TxOptions = {
  from?: string;
  to?: string;
  contractAddress?: string;
  txValues?: readonly any[];
};

type ConditionCache = Record<string, MockCondition>;

type AbiType = ReadonlyArray<AbiEvent | AbiFunction | AbiError>;

export class ContractUtils<
  TAbi extends
    | string
    | readonly (
        | (JsonFragment | Fragment)
        | (AbiEvent | AbiFunction | AbiError)
      )[]
> {
  private mockManager: MockManager;
  private contractInterface: Interface;
  public address?: string;
  private conditionCache: ConditionCache;
  private ethTestingProviderType: ProviderType;

  constructor(
    mockManager: MockManager,
    ethTestingProviderType: ProviderType,
    abi: TAbi,
    address?: string
  ) {
    this.mockManager = mockManager;
    this.contractInterface = new Interface(abi as readonly JsonFragment[]);
    this.address = address;
    this.ethTestingProviderType = ethTestingProviderType;
    this.conditionCache = {};
  }

  /**
   * Mock a call of the contract
   * @param functionName Name of the function
   * @param values Array of values to be returned or function resolving/returning the array of values to be returned - array is used as ordering of the returned data
   * @param callOptions.callValues Optional array of values passed to the call - useful when dealing with multiple similar calls with different arguments
   * @param callOptions.contractAddress Optional address of the contract, fallbacks to the contract address of the utils if specified
   * @param mockOptions.persistent If true, the mock will persist
   * @param mockOptions.shouldThrow If true, the mocked request will throw, the thrown error is the data field
   * @param mockOptions.timeout Timeout of the request, in milliseconds
   * @param mockOptions.condition Specific condition function for the mock, a conditional mock has priority over standard mocks. Signature is `(params: unknown[]) => boolean`
   * @param mockOptions.triggerCallback Callback that is triggered when the mock has been consumed. Signature is `(data?: unknown, params?: unknown[]) => void`
   * @example ```ts
   * // Mock next call to `value` function with return value `12`
   * contractUtils.mockCall("value", ["12"]);
   * // Mock next call to `value` function with return value `12`
   * contractUtils.mockCall("value", async () => {doSomething(); return ["12"];});
   * ```
   */
  public mockCall(
    functionName: TAbi extends AbiType
      ? ExtractAbiFunctionNames<TAbi, "view" | "pure">
      : string,
    values:
      | readonly unknown[]
      | ((
          params: Extract<JsonRPCMethod, { method: "eth_call" }>
        ) => Promise<readonly unknown[]> | readonly unknown[])
      | undefined,
    callOptions: CallOptions = {},
    mockOptions: MockOptions = {}
  ) {
    const { contractAddress, callValues } = callOptions;
    const toAddress = contractAddress || this.address;
    const conditionKey = JSON.stringify({
      functionName,
      to: toAddress,
      callValues,
    });
    let condition: MockCondition;
    const conditionFromCache = this.conditionCache[conditionKey];
    if (Boolean(conditionFromCache)) {
      condition = conditionFromCache;
    } else {
      condition = (params: unknown[]) => {
        const ethCallParams = params as [{ to: string; data: string }, string];
        const { to, data } = ethCallParams[0];
        const isTargetedContract = toAddress
          ? toAddress.toLowerCase() === to.toLowerCase()
          : true;
        const isTargetedFunction = callValues
          ? data ===
            this.contractInterface.encodeFunctionData(functionName, callValues)
          : data.startsWith(this.contractInterface.getSighash(functionName));
        return isTargetedContract && isTargetedFunction;
      };
      this.conditionCache[conditionKey] = condition;
    }
    const deriveCallResult = async (params: unknown) => {
      let functionValues: readonly any[] | undefined;
      if (typeof values === "function") {
        functionValues = await values(
          params as Extract<JsonRPCMethod, { method: "eth_call" }>
        );
      } else {
        functionValues = values;
      }
      return this.contractInterface.encodeFunctionResult(
        functionName,
        functionValues
      );
    };
    this.mockManager.mockRequest("eth_call", deriveCallResult, {
      condition,
      ...mockOptions,
    });
    return this;
  }

  /**
   * Mock a transaction of the contract
   * @param functionName Name of the function
   * @param txOptions.from Optional address of the sender, fallbacks to the current mocked account
   * @param txOptions.to Optional address of the recipient, fallbacks to the contract address of the utils if specified
   * @param txOptions.contractAddress Optional contract address address of the receipt, fallbacks to the contract address of the utils if specified
   * @param txOptions.txValues Optional array of values passed to the transaction - useful when dealing with multiple similar calls with different arguments
   * @param mockOptions.persistent If true, the mock will persist
   * @param mockOptions.shouldThrow If true, the mocked request will throw, the thrown error is the data field
   * @param mockOptions.timeout Timeout of the request, in milliseconds
   * @param mockOptions.condition Specific condition function for the mock, a conditional mock has priority over standard mocks. Signature is `(params: unknown[]) => boolean`
   * @param mockOptions.triggerCallback Callback that is triggered when the mock has been consumed. Signature is `(data?: unknown, params?: unknown[]) => void`
   * @example ```ts
   * // Mock next transaction using `setValue` method
   * contractUtils.mockTransaction("setValue");
   * ```
   */
  public mockTransaction(
    functionName: TAbi extends AbiType
      ? ExtractAbiFunctionNames<TAbi, "nonpayable" | "payable">
      : string,
    txOptions: TxOptions = {},
    mockOptions: MockOptions = {}
  ) {
    const chainIdMock =
      this.mockManager.findUnconditionalPersistentMock("eth_chainId");
    if (!chainIdMock) {
      throw new Error(
        "Unable to properly mock transaction because chain ID mock has not been properly set up."
      );
    }

    const isWalletProvider =
      this.ethTestingProviderType === "MetaMask" ||
      this.ethTestingProviderType === "Coinbase" ||
      this.ethTestingProviderType === "WalletConnect";
    if (isWalletProvider) {
      const accountMock =
        this.mockManager.findUnconditionalPersistentMock("eth_accounts");
      if (!accountMock) {
        throw new Error(
          "Unable to properly mock transaction because account mock has not been properly set up."
        );
      }

      const {
        txValues,
        from,
        to,
        contractAddress: contractAddressInput,
      } = txOptions;

      const blockNumberMock =
        this.mockManager.findUnconditionalPersistentMock("eth_blockNumber");
      if (!blockNumberMock) {
        throw new Error(
          "Unable to properly mock transaction because block number mock has not been properly set up."
        );
      }
      const blockNumber = blockNumberMock.data as string;

      const [mockedAccount] = accountMock.data as string[];
      const fromAddress = from || mockedAccount;

      const toAddress = to || this.address;
      const contractAddress = contractAddressInput || toAddress;

      const conditionKey = JSON.stringify({
        functionName,
        to: toAddress,
        from: fromAddress,
        contractAddress,
        txValues,
      });
      let condition: MockCondition;
      const conditionFromCache = this.conditionCache[conditionKey];
      if (Boolean(conditionFromCache)) {
        condition = conditionFromCache;
      } else {
        condition = (params: readonly unknown[]) => {
          const estimateGasOrSendTransactionParams = params as [
            { from: string; to: string; data: string }
          ];
          const { from, to, data } = estimateGasOrSendTransactionParams[0];
          const isTargetedFunction = txValues
            ? data ===
              this.contractInterface.encodeFunctionData(functionName, txValues)
            : data.startsWith(this.contractInterface.getSighash(functionName));
          const isTargetedContract = toAddress
            ? toAddress.toLowerCase() === to.toLowerCase()
            : true;
          return (
            from.toLowerCase() === fromAddress.toLowerCase() &&
            isTargetedContract &&
            isTargetedFunction
          );
        };
        this.conditionCache[conditionKey] = condition;
      }
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
      const tx: PendingTransaction = {
        to: toAddress,
        from: fromAddress,
        input: txData,
        chainId: "0x1",
        hash: txHash,
        nonce: "0x1",
        gasLimit: BigNumber.from(1).toHexString(),
        value: BigNumber.from(0).toHexString(),
        r: "0x",
        s: "0x",
        v: "0x",
        type: "0x1",
        transactionIndex: "0x1",
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
      const defaultContractAddress =
        "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";
      const txReceipt: TransactionReceipt = {
        to: toAddress || defaultContractAddress,
        from: fromAddress,
        contractAddress: contractAddress || defaultContractAddress,
        transactionIndex: "0x1",
        gasUsed: BigNumber.from(1).toHexString(),
        logsBloom: "",
        blockHash,
        transactionHash: txHash,
        logs: [],
        blockNumber: blockNumber,
        confirmations: "0x1",
        cumulativeGasUsed: BigNumber.from(1).toHexString(),
        effectiveGasPrice: BigNumber.from(1).toHexString(),
        type: "0x1",
      };
      this.mockManager.mockRequest("eth_getTransactionReceipt", txReceipt, {
        condition: getTxCondition,
      });
    } else {
      this.mockManager.mockRequest("eth_gasPrice", "0x012a05f200");
      this.mockManager.mockRequest("eth_getBlockByNumber", {
        number: "0x01",
        hash: "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
        parentHash:
          "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
        nonce: "0x01",
        sha3Uncle:
          "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
        logsBloom:
          "0xccb043516160700413c057c48562f314184b32138a8640044000ce0aa63a1de61f045919900327524180789a03158f5413118b898c9ebc204730e81022e5459082c0000841c9823cc90a4d1f2370492054013424c7c412207b1f3c46895415d45232a4213a3985c01440e8800810e81274ca20142a414d80d131259a80180c306805b1880f1b36041418870081a23d0c46240599d122034985a3b746005440b55a82cf191b802d42045c88ed460898a0c0f083a82cab080ed1282c4298c89522437d666204a05a3a42224b1444b125d5006026d82432451e26c1b1120e28e9b85433a63d60184e018c8095b00201180412715a063043d9c1a20b059d5031183c",
        transactionsRoot:
          "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
        stateRoot:
          "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
        receiptsRoot:
          "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
        miner: "0x8B4de256180CFEC54c436A470AF50F9EE2813dbB",
        difficulty: "0x012a05f200",
        totalDifficulty: "0x012a05f200",
        extraData: "0x012a05f200",
        size: "0x012a05f200",
        gasLimit: "0xffffffffff",
        gasUsed: "0x012a05f200",
        baseFeePerGas: "0x012a05f200",
        timestamp: "0x10",
        transactions: [],
        uncles: [],
      });
      this.mockManager.mockRequest("eth_getTransactionCount", "0x01");
      this.mockManager.mockRequest(
        "eth_estimateGas",
        "0x0000000000000000000000000000000000000000000000000000000000010000"
      );
      const blockHash =
        "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c";
      const defaultContractAddress =
        "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";
      this.mockManager.mockRequest("eth_sendRawTransaction", null as any);
      this.mockManager.mockRequest(
        "eth_getTransactionReceipt",
        (data) => {
          const [txHash] = data;
          return {
            to: txOptions.to || this.address || defaultContractAddress,
            from: txOptions.from || defaultContractAddress,
            contractAddress:
              txOptions.contractAddress ||
              txOptions.to ||
              this.address ||
              defaultContractAddress,
            transactionIndex: "0x1",
            gasUsed: ethers.BigNumber.from(1).toHexString(),
            logsBloom: "",
            blockHash,
            transactionHash: txHash,
            logs: [],
            blockNumber: "0x02",
            confirmations: "0x1",
            cumulativeGasUsed: ethers.BigNumber.from(1).toHexString(),
            effectiveGasPrice: ethers.BigNumber.from(1).toHexString(),
            type: "0x1",
          };
        },
        mockOptions
      );
    }

    return this;
  }

  /**
   * Mock the next past logs request with an array of a single event type
   * @param eventName Name of the event
   * @param allValues Array of array of values of the events
   * @example ```ts
   * // Mock for two events `event ValueUpdated(uint value)` with values `0` and `12`
   * contractTestingUtils.mockGetLogs("ValueUpdated", [["0"], ["12"]]);
   * ```
   */
  public mockGetLogs(
    eventName: TAbi extends AbiType ? ExtractAbiEventNames<TAbi> : string,
    allValues: unknown[][]
  ) {
    const blockNumberMock =
      this.mockManager.findUnconditionalPersistentMock("eth_blockNumber");
    if (!blockNumberMock) {
      throw new Error(
        "Unable to properly mock transaction because block number mock has not been properly set up."
      );
    }
    const blockNumber = blockNumberMock.data as string;
    const eventTopic = this.contractInterface.getEventTopic(
      this.contractInterface.getEvent(eventName)
    );
    const condition = (params: unknown[]) => {
      const filter = params[0] as EventFilter;
      return filter?.topics?.[0] === eventTopic;
    };
    this.mockManager.mockRequest(
      "eth_getLogs",
      allValues.map((values) =>
        this.generateMockLog(eventName, values, {
          blockNumber,
        })
      ),
      { condition }
    );
    return this;
  }

  /**
   * Mock an emission of a log, mocked block number is automatically increased
   * @param eventName Name of the event
   * @param values array of values of the event
   * @param subscriptionId Needed if using web3.js
   * @param logOverrides Optional overrides for the log
   * @example ```ts
   * // Mock emission of a log for `event ValueUpdated(uint value)` with value `12`
   * ...
   * // With ethers
   * contractTestingUtils.mockEmitLog("ValueUpdated", ["12"]);
   * // With web3.js
   * testingUtils.mockSubscribe("0x123");
   * ...
   * contractTestingUtils.mockEmitLog("ValueUpdated", ["12"], "0x123");
   * ```
   */
  public mockEmitLog(
    eventName: TAbi extends AbiType ? ExtractAbiEventNames<TAbi> : string,
    values: unknown[],
    subscriptionId?: string,
    logOverrides?: Partial<Log>
  ) {
    const blockNumberMock =
      this.mockManager.findUnconditionalPersistentMock("eth_blockNumber");
    if (!blockNumberMock) {
      throw new Error(
        "Unable to properly mock transaction because block number mock has not been properly set up."
      );
    }
    const blockNumber = blockNumberMock.data as string;
    const incrementedBlockNumber = Number(blockNumber) + 1;
    const hexValue = ethers.utils.hexValue(incrementedBlockNumber);
    const zeroPadIncrementedBlockNumber = ethers.utils.hexZeroPad(hexValue, 32);
    this.mockManager.mockRequest(
      "eth_blockNumber",
      zeroPadIncrementedBlockNumber,
      { persistent: true }
    );

    const log = this.generateMockLog(eventName, values, {
      blockNumber: `0x${incrementedBlockNumber.toString(16)}`,
      ...logOverrides,
    });

    if (subscriptionId) {
      this.mockManager.emit("message", {
        type: "eth_subscription",
        data: {
          subscription: subscriptionId,
          result: log,
        },
      });
    } else {
      const eventTopic = this.contractInterface.getEventTopic(
        this.contractInterface.getEvent(eventName)
      );
      const condition = (params: unknown[]) => {
        const filter = params[0] as EventFilter;
        return filter?.topics?.[0] === eventTopic;
      };
      this.mockManager.mockRequest("eth_getLogs", [log], { condition });
      const address = this.address || logOverrides?.address;
      const filters: EventFilter = {
        address,
        topics: this.contractInterface.encodeFilterTopics(
          this.contractInterface.getEvent(eventName),
          []
        ),
      };
      this.mockManager.emit(JSON.stringify(filters), log);
    }

    return this;
  }

  /**
   * Generate a log from an event name and the values of the event
   * @param eventName Name of the event
   * @param values Array of values of the event
   * @param logOverrides Optional overrides for the log
   * @example ```ts
   * // Generate a log for `event ValueUpdated(uint value)` with value `12`
   * const log = contractTestingUtils.generateMockLog("ValueUpdated", ["12"]);
   * ```
   * @returns The log for the event
   */
  public generateMockLog(
    eventName: TAbi extends AbiType ? ExtractAbiEventNames<TAbi> : string,
    values: unknown[],
    logOverrides?: Partial<Log>
  ): Log {
    const defaultContractAddress = "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";
    const address = this.address || defaultContractAddress;

    const { data, topics } = this.contractInterface.encodeEventLog(
      this.contractInterface.getEvent(eventName),
      values
    );

    return {
      blockNumber: "0x1",
      blockHash:
        "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
      transactionIndex: "0x0",
      removed: false,
      address,
      data,
      topics,
      transactionHash:
        "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
      logIndex: "0x0",
      ...logOverrides,
    };
  }
}
