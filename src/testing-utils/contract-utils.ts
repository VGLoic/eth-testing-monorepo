import { ethers, EventFilter } from "ethers";
import { Interface, JsonFragment, Fragment } from "@ethersproject/abi";
import { BigNumber } from "@ethersproject/bignumber";
import { Transaction } from "@ethersproject/transactions";
import { ContractReceipt } from "@ethersproject/contracts";
import { Log } from "@ethersproject/abstract-provider";
import { MockManager } from "../mock-manager";
import { MockCondition, MockOptions } from "../types";
import {
  AbiError,
  AbiEvent,
  AbiFunction,
  ExtractAbiEventNames,
  ExtractAbiFunctionNames,
} from "abitype";

type CallOptions = {
  contractAddress?: string;
  callValues?: readonly any[];
};

type TxOptions = {
  from?: string;
  to?: string;
  txValues?: readonly any[];
};

type ConditionCache = Record<string, MockCondition>;

type AbiType = ReadonlyArray<AbiEvent | AbiFunction | AbiError>;

export class ContractUtils<
  TAbi extends readonly (
    | (JsonFragment | Fragment)
    | (AbiEvent | AbiFunction | AbiError)
  )[]
> {
  private mockManager: MockManager;
  private contractInterface: Interface;
  public address?: string;
  private conditionCache: ConditionCache;

  constructor(mockManager: MockManager, abi: TAbi, address?: string) {
    this.mockManager = mockManager;
    this.contractInterface = new Interface(abi as readonly JsonFragment[]);
    this.address = address;
    this.conditionCache = {};
  }

  /**
   * Mock a call of the contract
   * @param functionName Name of the function
   * @param values Array of values to be returned - array is used as ordering of the returned data
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
   * ```
   */
  public mockCall(
    // functionName: ExtractAbiFunctionNames<TAbi, "view" | "pure">,
    functionName: TAbi extends AbiType
      ? ExtractAbiFunctionNames<TAbi, "view" | "pure">
      : string,
    values: readonly any[] | undefined,
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
    const callResult = this.contractInterface.encodeFunctionResult(
      functionName,
      values
    );
    this.mockManager.mockRequest("eth_call", callResult, {
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
    // functionName: ExtractAbiFunctionNames<TAbi, "nonpayable" | "payable">,
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

    const accountMock =
      this.mockManager.findUnconditionalPersistentMock("eth_accounts");
    if (!accountMock) {
      throw new Error(
        "Unable to properly mock transaction because account mock has not been properly set up."
      );
    }

    const { txValues, from, to } = txOptions;

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

    const conditionKey = JSON.stringify({
      functionName,
      to: toAddress,
      from: fromAddress,
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
    const defaultContractAddress = "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";
    const txReceipt: ContractReceipt = {
      to: toAddress || defaultContractAddress,
      from: fromAddress,
      contractAddress: toAddress || defaultContractAddress,
      transactionIndex: 1,
      gasUsed: BigNumber.from(1),
      logsBloom: "",
      blockHash,
      transactionHash: txHash,
      logs: [],
      blockNumber: Number(blockNumber),
      confirmations: 1,
      cumulativeGasUsed: BigNumber.from(1),
      effectiveGasPrice: BigNumber.from(1),
      byzantium: true,
      type: 1,
    };
    this.mockManager.mockRequest("eth_getTransactionReceipt", txReceipt, {
      condition: getTxCondition,
    });
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
    // eventName: ExtractAbiEventNames<TAbi>,
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
          blockNumber: Number(blockNumber),
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
    // eventName: ExtractAbiEventNames<TAbi>,
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
      blockNumber: incrementedBlockNumber,
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
    // eventName: ExtractAbiEventNames<TAbi>,
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
      blockNumber: 1,
      blockHash:
        "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
      transactionIndex: 0,
      removed: false,
      address,
      data,
      topics,
      transactionHash:
        "0xdafc0b053f0728212d1a7bf7f12b883107db7a2ef949a28c2483cabaf187255c",
      logIndex: 0,
      ...logOverrides,
    };
  }
}
