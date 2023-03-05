import {
  ContractUtils
} from "./chunk-ZQULDQSE.mjs";
import {
  ENS_REGISTRY_WITH_FALLBACK_ABI,
  ENS_REGISTRY_WITH_FALLBACK_ADDRESS,
  PUBLIC_RESOLVER_ABI,
  PUBLIC_RESOLVER_ADDRESS
} from "./chunk-RMPMDHFW.mjs";
import {
  MockManager
} from "./chunk-GX4GIFWD.mjs";

// src/testing-utils/ens-utils/index.ts
import { ethers as ethers2 } from "ethers";

// src/testing-utils/testing-utils.ts
import { ethers } from "ethers";
var defaultMockOptions = {};
var LowLevelTestingUtils = class {
  constructor(mockManager) {
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
  emit(eventName, payload) {
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
  mockRequest(method, data, mockOptions = defaultMockOptions) {
    this.mockManager.mockRequest(
      method,
      data,
      mockOptions
    );
    return this;
  }
};
var TestingUtils = class {
  constructor(provider) {
    const mockManager = new MockManager(provider);
    this.provider = provider;
    this.mockManager = mockManager;
    this.lowLevel = new LowLevelTestingUtils(mockManager);
    this.ens = new EnsUtils(mockManager, provider.ethTestingProviderType);
    this.balanceConditionCache = {};
  }
  /**
   * Get the mock provider
   * @returns The mock provider
   */
  getProvider() {
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
  mockConnectedWallet(accounts, {
    chainId = "0x1",
    blockNumber = "0x1",
    balance = 0
  } = {}) {
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
  mockReadonlyProvider({ chainId = "0x1", blockNumber = "0x1" } = {}) {
    this.mockAccounts([]);
    this.mockChainId(chainId);
    this.mockBlockNumber(blockNumber);
    return this;
  }
  /**
   * Setup mock for a not connected wallet: only the accounts are mocked to an empty array
   */
  mockNotConnectedWallet() {
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
  mockChainId(chainId) {
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
  mockBlockNumber(blockNumber) {
    const hexValue = ethers.utils.hexValue(blockNumber);
    const zeroPadBlockNumber = ethers.utils.hexZeroPad(hexValue, 32);
    this.mockManager.mockRequest("eth_blockNumber", zeroPadBlockNumber, {
      persistent: true
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
  mockAccounts(accounts) {
    this.mockManager.mockRequest("eth_accounts", accounts, {
      persistent: true
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
  mockBalance(address, balance) {
    let condition;
    const conditionFromCache = this.balanceConditionCache[address];
    if (Boolean(conditionFromCache)) {
      condition = conditionFromCache;
    } else {
      condition = (params) => {
        const [paramAddress] = params;
        return paramAddress.toLowerCase() === address.toLowerCase();
      };
      this.balanceConditionCache[address] = condition;
    }
    this.mockManager.mockRequest(
      "eth_getBalance",
      ethers.BigNumber.from(balance).toHexString(),
      {
        persistent: true,
        condition
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
  mockChainChanged(newChainId) {
    this.mockManager.mockRequest("eth_chainId", newChainId, {
      persistent: true
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
  mockAccountsChanged(newAccounts) {
    this.mockManager.mockRequest("eth_accounts", newAccounts, {
      persistent: true
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
  mockSubscribe(subscriptionId) {
    this.mockManager.mockRequest("eth_subscribe", subscriptionId, {
      persistent: true
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
  mockRequestAccounts(accounts, {
    chainId = "0x1",
    blockNumber = "0x1",
    balance = 0,
    triggerCallback
  } = {}) {
    const completedTriggerCallback = () => {
      this.mockConnectedWallet(accounts, { chainId, blockNumber, balance });
      if (triggerCallback)
        triggerCallback();
    };
    this.mockManager.mockRequest("eth_requestAccounts", accounts, {
      triggerCallback: completedTriggerCallback
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
  generateContractUtils(abi, contractAddress) {
    return new ContractUtils(
      this.mockManager,
      this.provider.ethTestingProviderType,
      abi,
      contractAddress
    );
  }
  /**
   * Clear all mocks
   */
  clearAllMocks() {
    this.mockManager.clearAllMocks();
    return this;
  }
};

// src/testing-utils/ens-utils/index.ts
var EnsUtils = class {
  constructor(mockManager, providerType) {
    this.ensRegistryWithFallbackUtils = new ContractUtils(
      mockManager,
      providerType,
      ENS_REGISTRY_WITH_FALLBACK_ABI,
      ENS_REGISTRY_WITH_FALLBACK_ADDRESS
    );
    this.publicResolverUtils = new ContractUtils(
      mockManager,
      providerType,
      PUBLIC_RESOLVER_ABI,
      PUBLIC_RESOLVER_ADDRESS
    );
  }
  /**
   * Mock the resolver address of a name
   * @param name ENS name
   * @param resolverAddress Resolver address, fallback to the main net public resolver
   * @example ```ts
   * ens.mockResolver("blabla.eth");
   * ```
   */
  mockResolver(name, resolverAddress = PUBLIC_RESOLVER_ADDRESS) {
    const callValues = name ? {
      callValues: [ethers2.utils.namehash(name)]
    } : void 0;
    this.ensRegistryWithFallbackUtils.mockCall(
      "resolver",
      [resolverAddress],
      callValues,
      { persistent: true }
    );
    return this;
  }
  /**
   * Mock all addresses to resolve to empty names and names to zero address
   * @example ```ts
   * ens.mockAllToEmpty();
   * ```
   */
  mockAllToEmpty() {
    this.mockResolver();
    this.publicResolverUtils.mockCall("supportsInterface", [false], void 0, {
      persistent: true
    });
    this.publicResolverUtils.mockCall("name", [""], void 0, {
      persistent: true
    });
    this.publicResolverUtils.mockCall(
      "addr(bytes32)",
      [ethers2.constants.AddressZero],
      void 0,
      { persistent: true }
    );
  }
  /**
   * Mock empty reverse resolution of a batch of addresses
   * @param addresses Array of address
   * @example ```ts
   * ens.mockEmptyReverse(["0x123...", "0x456..."]);
   * ```
   */
  mockEmptyReverse(addresses) {
    this.publicResolverUtils.mockCall("supportsInterface", [false], void 0, {
      persistent: true
    });
    addresses.forEach((address) => {
      const reverseName = address.substring(2).toLowerCase() + ".addr.reverse";
      this.mockResolver(reverseName, ethers2.constants.AddressZero);
      const callValues = {
        callValues: [ethers2.utils.namehash(reverseName)]
      };
      this.publicResolverUtils.mockCall("name", [""], callValues, {
        persistent: true
      });
    });
  }
  /**
   * Mock the resolution of a name to an address
   * @param name ENS name
   * @param address Address
   * @example ```ts
   * ens.mockResolve("blabla.eth", "0x123...");
   * ```
   */
  mockResolve(name, address) {
    this.mockResolver(name);
    const callValues = {
      callValues: [ethers2.utils.namehash(name)]
    };
    this.publicResolverUtils.mockCall("supportsInterface", [false], void 0, {
      persistent: true
    });
    this.publicResolverUtils.mockCall(
      "addr(bytes32)",
      [address],
      callValues,
      {
        persistent: true
      }
    );
  }
  /**
   * Mock the reverse resolution of an address to a name
   * @param address Address
   * @param name ENS name
   * @example ```ts
   * ens.mockReverseResolve("0x123...", "blabla.eth");
   * ```
   */
  mockReverseResolve(address, name) {
    const reverseName = address.substring(2).toLowerCase() + ".addr.reverse";
    this.mockResolver(reverseName);
    this.publicResolverUtils.mockCall("supportsInterface", [false], void 0, {
      persistent: true
    });
    const callValues = {
      callValues: [ethers2.utils.namehash(reverseName)]
    };
    this.publicResolverUtils.mockCall("name", [name], callValues, {
      persistent: true
    });
  }
  /**
   * Mock a name to resolve to an address and the address to reverse resolve to the name
   * @param address Address
   * @param name ENS name
   * @example ```ts
   * ens.mockName("0x123...", "blabla.eth");
   * ```
   */
  mockEnsName(address, name) {
    this.mockResolve(name, address);
    this.mockReverseResolve(address, name);
  }
};

export {
  EnsUtils,
  LowLevelTestingUtils,
  TestingUtils
};
