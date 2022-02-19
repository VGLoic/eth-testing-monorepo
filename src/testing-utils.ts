import { Fragment, JsonFragment } from "@ethersproject/abi";
import { MockManager } from "./mock-manager";
import { ContractUtils } from "./contract-utils";
import { MockOptions } from "./types";

type MockRequestAccountsOptions = {
  chainId?: string;
  triggerCallback?: () => void;
}

export class LowLevelTestingUtils {
  private mockManager: MockManager;
  
  constructor(mockManager: MockManager) {
    this.mockManager = mockManager;
  }

  public emit(eventName: string, payload: any) {
    this.mockManager.emit(eventName, payload);
  }

  public mockRequest(
    method: string,
    data: unknown,
    mockOptions: MockOptions = {}
  ) {
    this.mockManager.mockRequest(method, data, mockOptions);
  }
}
export class TestingUtils{
  private mockManager: MockManager;
  public lowLevel: LowLevelTestingUtils;

  constructor(mockManager: MockManager) {
    this.mockManager = mockManager;
    this.lowLevel = new LowLevelTestingUtils(mockManager);
  }

  mockChainId(chainId: string | number) {
    this.mockManager.mockRequest("eth_chainId", chainId, { persistent: true });
  }

  mockAccounts(accounts: string[]) {
    this.mockManager.mockRequest("eth_accounts", accounts, { persistent: true });
  }

  mockChainChanged(newChainId: string) {
    this.mockManager.mockRequest("eth_chainId", newChainId, { persistent: true });
    this.mockManager.emit("chainChanged", newChainId);
  }

  mockAccountsChanged(newAccounts: string[]) {
    this.mockManager.mockRequest("eth_accounts", newAccounts, { persistent: true });
    this.mockManager.emit("accountsChanged", newAccounts);
  }


  /**
   * Mock the next eth_requestAccounts request and persistently mock the accounts once the latter request has been triggered
   * @param accounts Resolved accounts
   * @param options.chainId If present, the chain ID will also be mocked with this value once the request has been triggered
   * @param options.triggerCallback Optional additional callback to be triggered with the request. The existing callback will at least mock the eth_accounts
   * @example
   * ```ts
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

  generateContractUtils(abi: (string | JsonFragment | Fragment)[]) {
    return new ContractUtils(this.mockManager, abi);
  }

  clearAllMocks() {
    this.mockManager.clearAllMocks();
  }
}