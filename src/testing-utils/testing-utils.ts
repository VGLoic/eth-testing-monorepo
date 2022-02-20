import { Fragment, JsonFragment } from "@ethersproject/abi";
import { ethers } from "ethers";
import { MockManager } from "../mock-manager";
import { ContractUtils } from "./contract-utils";
import { MockCondition, MockOptions } from "../types";

type MockRequestAccountsOptions = {
  chainId?: string;
  triggerCallback?: () => void;
}

export class LowLevelTestingUtils {
  private mockManager: MockManager;
  
  constructor(mockManager: MockManager) {
    this.mockManager = mockManager;
  }

  /**
   * Emits an event
   * @param eventName Name of the event 
   * @param payload Payload of the event
   * @example ```ts
   * lowLevelTestingUtils.emit("chainChanged", "0x1");
   * ```
   */
  public emit(eventName: string, payload: any) {
    this.mockManager.emit(eventName, payload);
    return this;
  }

  /**
   * Mock a JSON-RPC request
   * @param method JSON-RPC method name
   * @param data Data to be resolved, or error to be thrown in case of throw
   * @param mockOptions.persistent If true, the mock will persist
   * @param mockOptions.shouldThrow If true, the mocked request will throw, the thrown error is the data field
   * @param mockOptions.timeout Timeout of the request, in milliseconds
   * @param mockOptions.condition Specific condition function for the mock, a conditional mock has priority over standard mocks. Signature is `(params: unknown[]) => boolean`
   * @param mockOptions.triggerCallback Callback that is triggered when the mock has been consumed. Signature is `(data?: unknown, params?: unknown[]) => void`
   * @example ```ts
   * // Mock one "eth_accounts" request
   * lowLevelTestingUtils.mockRequest("eth_accounts", ["0x..."]);
   * // Persistently mock "eth_chainId" request
   * lowLevelTestingUtils.mockRequest("eth_chainId", "0x1", { persistent: true });
   * ```
   */
  public mockRequest(
    method: string,
    data: unknown,
    mockOptions: MockOptions = {}
  ) {
    this.mockManager.mockRequest(method, data, mockOptions);
    return this;
  }
}

type BalanceConditionCache = Record<string, MockCondition>;
export class TestingUtils{
  private mockManager: MockManager;
  public lowLevel: LowLevelTestingUtils;

  private balanceConditionCache: BalanceConditionCache

  constructor(mockManager: MockManager) {
    this.mockManager = mockManager;
    this.lowLevel = new LowLevelTestingUtils(mockManager);
    this.balanceConditionCache = {};
  }

  /**
   * Persistently mock the chain ID JSON-RPC request
   * @param chainId The chain ID
   * @example ```ts
   * // Mock chain ID to Ethereum main net
   * testingUtils.mockChainId("0x1");
   * ```
   */
  mockChainId(chainId: string | number) {
    this.mockManager.mockRequest("eth_chainId", chainId, { persistent: true });
    return this;
  }

  /**
   * Persistently mock the accounts JSON-RPC request
   * @param accounts The array of accounts
   * @example ```ts
   * testingUtils.mockAccounts(["0x..."]);
   * ```
   */
  mockAccounts(accounts: string[]) {
    this.mockManager.mockRequest("eth_accounts", accounts, { persistent: true });
    return this;
  }

  /**
   * Persistently mock the balance JSON-RPC request for a specific address
   * @param address Address for which the balance is queried
   * @param balance Balance of the address in Wei
   * @example ```ts
   * // With ethers
   * testingUtils.mockBalance("0x...", ethers.utils.parseUnits("1", "ether").toString())
   * // With web3.js
   * testingUtils.mockBalance("0x...", Web3.utils.toWei("1", "ether"))
   * ```
   */
  mockBalance(address: string, balance: string | number) {
    let condition: MockCondition;
    const conditionFromCache = this.balanceConditionCache[address];
    if (Boolean(conditionFromCache)) {
      condition = conditionFromCache
    } else {
      condition = (params: unknown[]) => {
        const [paramAddress] = params as [string, string];
        return paramAddress.toLowerCase() === address.toLowerCase();
      }
      this.balanceConditionCache[address] = condition;
    }
    this.mockManager.mockRequest("eth_getBalance", ethers.BigNumber.from(balance), {
      persistent: true,
      condition
    })
  }

  /**
   * Mock a change to a new chain ID by persistently mocking the chain ID JSON-RPC request and emitting a "chainChanged" event
   * @param newChainId The new chain ID
   * @example ```ts
   * // Mock chain changed to Ropsten
   * testingUtils.mockChainChanged("0x3");
   * ```
   */
  mockChainChanged(newChainId: string) {
    this.mockManager.mockRequest("eth_chainId", newChainId, { persistent: true });
    this.mockManager.emit("chainChanged", newChainId);
    return this;
  }

  /**
   * Mock a change to new accounts by persistently mocking the accounts JSON-RPC request and emitting an "accountsChanged" event
   * @param newAccounts The new array of accounts
   * @example ```ts
   * testingUtils.mockAccountsChanged(["0x..."]);
   * ```
   */
  mockAccountsChanged(newAccounts: string[]) {
    this.mockManager.mockRequest("eth_accounts", newAccounts, { persistent: true });
    this.mockManager.emit("accountsChanged", newAccounts);
    return this;
  }


  /**
   * Mock the next eth_requestAccounts request and persistently mock the accounts once the latter request has been triggered
   * @param accounts Resolved accounts
   * @param options.chainId If present, the chain ID will also be mocked with this value once the request has been triggered
   * @param options.triggerCallback Optional additional callback to be triggered with the request. The existing callback will at least mock the eth_accounts
   * @example ```ts
   * // The next eth_requestAccounts request will return the array of address and be set on MainNet
   * testingUtils.mockRequestAccounts(["0x138071e4e810f34265bd833be9c5dd96f01bd8a5"], { chainId: "0x1" });
   * ```
   */
  mockRequestAccounts(accounts: string[], options: MockRequestAccountsOptions = {}) {
    const completedTriggerCallback = () => {
      this.mockManager.mockRequest("eth_accounts", accounts, { persistent: true });
      if (options.chainId) this.mockManager.mockRequest("eth_chainId", options.chainId, { persistent: true });
      if (options.triggerCallback) options.triggerCallback();
    }
    this.mockManager.mockRequest("eth_requestAccounts", accounts, { triggerCallback: completedTriggerCallback });
  }

  /**
   * Generate contract specific testing utils
   * @param abi ABI of the contract
   * @returns The testing utils for this specific contract
   * @example ```ts
   * const ERC20_ABI = [...];
   * const erc20TestingUtils = testingUtils.generateContractUtils(ERC20_ABI);
   * ```
   */
  generateContractUtils(abi: (string | JsonFragment | Fragment)[]) {
    return new ContractUtils(this.mockManager, abi);
  }

  /**
   * Clear all mocks
   */
  clearAllMocks() {
    this.mockManager.clearAllMocks();
  }
}