import { ethers } from "ethers";
import { MockManager } from "../mock-manager";
import { ContractUtils } from "./contract-utils";
import { MockCondition, MockOptions } from "../types";
import { Provider } from "../providers";
import { EnsUtils } from "./ens-utils";
import { AbiError, AbiEvent, AbiFunction } from "abitype";
import { Fragment } from "ethers/lib/utils";
import { JsonFragment } from "@ethersproject/abi";

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
   * @param data Data to be resolved, or function to be called, or error to be thrown in case of throw
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
   * // Mock with a dynamical value based on params
   * // "personal_sign" in this case, `bobsWallet` is externally defined here
   * mockManager.mockRequest("personal_sign", async (params: unknown[]) => {
   *   const statement = (params as string[])[0];
   *   return await bobsWallet.signMessage(statement);
   * });
   * ```
   */
  public mockRequest(
    method: string,
    data: unknown | ((params: unknown[]) => unknown),
    mockOptions: MockOptions = {}
  ) {
    this.mockManager.mockRequest(method, data, mockOptions);
    return this;
  }
}

type MockWalletOptions = {
  chainId?: string | number;
  blockNumber?: string | number;
  balance?: string | number;
};

type MockRequestAccountsOptions = {
  chainId?: string | number;
  blockNumber?: string | number;
  balance?: string | number;
  triggerCallback?: () => void;
};

type BalanceConditionCache = Record<string, MockCondition>;
export class TestingUtils {
  private mockManager: MockManager;
  private provider: Provider;
  public lowLevel: LowLevelTestingUtils;
  public ens: EnsUtils;

  private balanceConditionCache: BalanceConditionCache;

  constructor(provider: Provider) {
    const mockManager = new MockManager(provider);
    this.provider = provider;
    this.mockManager = mockManager;
    this.lowLevel = new LowLevelTestingUtils(mockManager);
    this.ens = new EnsUtils(mockManager);
    this.balanceConditionCache = {};
  }

  /**
   * Get the mock provider
   * @returns The mock provider
   */
  public getProvider(): Provider {
    return this.provider;
  }

  /**
   * Setup mock for a connected wallet: accounts, chain ID and block number are permanently mocked
   * @param accounts The array of accounts
   * @param options.chainId The chain ID, default to "0x1"
   * @param options.blockNumber The block number, default to "0x1"
   * @param options.balance The balance of the first account, default to 0
   * @example ```ts
   * testingUtils.mockConnectedWallet(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
   * ```
   */
  public mockConnectedWallet(
    accounts: string[],
    {
      chainId = "0x1",
      blockNumber = "0x1",
      balance = 0,
    } = {} as MockWalletOptions
  ) {
    this.mockAccounts(accounts);
    this.mockChainId(chainId);
    this.mockBlockNumber(blockNumber);
    if (accounts[0]) {
      this.mockBalance(accounts[0], balance);
    }
    this.mockRequestAccounts(accounts, { chainId, blockNumber, balance });
    return this;
  }

  /**
   * Setup mock for a readonly provider: chain ID and block number are permanently mocked
   * @param options.chainId The chain ID, default to "0x1"
   * @param options.blockNumber The block number, default to "0x1"
   * @example ```ts
   * testingUtils.mockConnectedWallet(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
   * ```
   */
  public mockReadonlyProvider(
    { chainId = "0x1", blockNumber = "0x1" } = {} as MockWalletOptions
  ) {
    this.mockAccounts([]);
    this.mockChainId(chainId);
    this.mockBlockNumber(blockNumber);
    return this;
  }

  /**
   * Setup mock for a not connected wallet: only the accounts are mocked to an empty array
   */
  public mockNotConnectedWallet() {
    this.mockAccounts([]);
    return this;
  }

  /**
   * Persistently mock the chain ID JSON-RPC request
   * @param chainId The chain ID
   * @example ```ts
   * // Mock chain ID to Ethereum main net
   * testingUtils.mockChainId("0x1");
   * ```
   */
  public mockChainId(chainId: string | number) {
    // TODO: There is a need to disinguish between provider type here
    // Wallet connect returns number while MetaMask returns hex string
    const hexValue = ethers.utils.hexValue(chainId);
    this.mockManager.mockRequest("eth_chainId", hexValue, { persistent: true });
    return this;
  }

  /**
   * Persistently mock the block number JSON-RPC request
   * @param blockNumber The block number as a number or a hex string
   * @example ```ts
   * // Using number - mock block number will be return as 0x0000000000000000000000000000000000000000000000000000000000000001
   * testingUtils.mockBlockNumber(1);
   * // Using hex string - mocked block number will be return as 0x0000000000000000000000000000000000000000000000000000000000000001
   * testingUtils.mockBlockNumber('0x1');
   * ```
   */
  public mockBlockNumber(blockNumber: string | number) {
    const hexValue = ethers.utils.hexValue(blockNumber);
    const zeroPadBlockNumber = ethers.utils.hexZeroPad(hexValue, 32);
    this.mockManager.mockRequest("eth_blockNumber", zeroPadBlockNumber, {
      persistent: true,
    });
    return this;
  }

  /**
   * Persistently mock the accounts JSON-RPC request
   * @param accounts The array of accounts
   * @example ```ts
   * testingUtils.mockAccounts(["0x..."]);
   * ```
   */
  public mockAccounts(accounts: string[]) {
    this.mockManager.mockRequest("eth_accounts", accounts, {
      persistent: true,
    });
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
  public mockBalance(address: string, balance: string | number) {
    let condition: MockCondition;
    const conditionFromCache = this.balanceConditionCache[address];
    if (Boolean(conditionFromCache)) {
      condition = conditionFromCache;
    } else {
      condition = (params: unknown[]) => {
        const [paramAddress] = params as [string, string];
        return paramAddress.toLowerCase() === address.toLowerCase();
      };
      this.balanceConditionCache[address] = condition;
    }
    this.mockManager.mockRequest(
      "eth_getBalance",
      ethers.BigNumber.from(balance),
      {
        persistent: true,
        condition,
      }
    );
    return this;
  }

  /**
   * Mock a change to a new chain ID by persistently mocking the chain ID JSON-RPC request and emitting a "chainChanged" event
   * @param newChainId The new chain ID
   * @example ```ts
   * // Mock chain changed to Ropsten
   * testingUtils.mockChainChanged("0x3");
   * ```
   */
  public mockChainChanged(newChainId: string) {
    this.mockManager.mockRequest("eth_chainId", newChainId, {
      persistent: true,
    });
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
  public mockAccountsChanged(newAccounts: string[]) {
    this.mockManager.mockRequest("eth_accounts", newAccounts, {
      persistent: true,
    });
    this.mockManager.emit("accountsChanged", newAccounts);
    return this;
  }

  /**
   * Mock the subscription with a given subscription ID
   * @param subscriptionId The subscription ID as a hex string
   * @example ```ts
   * testingUtils.mockSubscribe("0x123");
   * ...
   * // Log emission using the subscription ID
   * contractTestingUtils.mockEmitLog("ValueUpdated", ["14"], "0x123")
   * ```
   */
  public mockSubscribe(subscriptionId: string) {
    this.mockManager.mockRequest("eth_subscribe", subscriptionId, {
      persistent: true,
    });
    return this;
  }

  /**
   * Mock the next eth_requestAccounts request and persistently mock the accounts once the latter request has been triggered
   * @param accounts Resolved accounts
   * @param options.chainId The mocked value of the chain ID once the request has been triggered, default to "0x1"
   * @param options.blockNumber The mocked value of the block number once the request has been triggered, default to "0x1"
   * @param options.balance The mocked value of the balance of the first account once the request has been triggered, default to 0
   * @param options.triggerCallback Optional additional callback to be triggered with the request. The existing callback will at least mock the eth_accounts
   * @example ```ts
   * // The next eth_requestAccounts request will return the array of address and be set on MainNet
   * testingUtils.mockRequestAccounts(["0x138071e4e810f34265bd833be9c5dd96f01bd8a5"], { chainId: "0x1" });
   * ```
   */
  public mockRequestAccounts(
    accounts: string[],
    {
      chainId = "0x1",
      blockNumber = "0x1",
      balance = 0,
      triggerCallback,
    }: MockRequestAccountsOptions = {}
  ) {
    const completedTriggerCallback = () => {
      this.mockConnectedWallet(accounts, { chainId, blockNumber, balance });
      if (triggerCallback) triggerCallback();
    };
    this.mockManager.mockRequest("eth_requestAccounts", accounts, {
      triggerCallback: completedTriggerCallback,
    });
    return this;
  }

  /**
   * Generate contract specific testing utils
   * @param abi ABI of the contract
   * @param contractAddress Address of the contract
   * @returns The testing utils for this specific contract
   * @example ```ts
   * const ERC20_ABI = [...];
   * const erc20TestingUtils = testingUtils.generateContractUtils(ERC20_ABI);
   * ```
   */
  public generateContractUtils<
    TAbi extends readonly (
      | Fragment
      | JsonFragment
      | AbiEvent
      | AbiFunction
      | AbiError
    )[]
  >(abi: TAbi, contractAddress?: string) {
    return new ContractUtils<TAbi>(this.mockManager, abi, contractAddress);
  }

  /**
   * Clear all mocks
   */
  public clearAllMocks() {
    this.mockManager.clearAllMocks();
    return this;
  }
}
