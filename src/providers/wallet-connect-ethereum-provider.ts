import EventEmitter from "events";
import { Provider, VerboseArgs } from "./provider";

type ProviderConstructorArgs = {
  verbose?: VerboseArgs;
};

type ConnectionStatus = "notConnected" | "connected" | "connecting";

export class WalletConnectEthereumProvider extends Provider {
  public events: EventEmitter;
  public namespace = "eip155";
  public accounts: string[] = [];
  public chainId = 1;

  private connectionStatus: ConnectionStatus = "notConnected";

  constructor({ verbose }: ProviderConstructorArgs) {
    super({
      verbose,
      ethTestingProviderType: "WalletConnect-EthereumProvider",
    });

    this.events = this;

    this.on("chainChanged", (chainId: string | number) => {
      this.chainId = Number(chainId);
    });
    this.on("accountsChanged", (accounts: string[]) => {
      if (accounts.length === 0) {
        this.connectionStatus = "notConnected";
      }
      this.accounts = accounts;
    });
  }

  static async init(mockProviderOpts: ProviderConstructorArgs) {
    return new WalletConnectEthereumProvider(mockProviderOpts);
  }

  get connected(): boolean {
    return this.connectionStatus === "connected";
  }

  get connecting(): boolean {
    return this.connectionStatus === "connecting";
  }

  public async request({
    method,
    params = [] as unknown[],
  }: {
    method: string;
    params?: unknown[];
  }) {
    const res = await super.request({ method, params });
    if (method === "eth_chainId") {
      const chainId = Number(res);
      if (!isNaN(chainId)) {
        this.chainId = Number(res);
      }
    }
    if (method === "eth_accounts") {
      if (Array.isArray(res)) {
        this.accounts = res as string[];
      }
    }
    return res;
  }

  public async enable(): Promise<string[]> {
    const accounts = (await this.request({
      method: "eth_requestAccounts",
      params: [],
    })) as string[];
    this.accounts = accounts;
    return accounts;
  }

  public async connect(_?: any): Promise<void> {
    const accounts = (await this.request({
      method: "eth_requestAccounts",
      params: [],
    })) as string[];
    this.accounts = accounts;
  }

  public async disconnect(): Promise<void> {
    this.chainId = 1;
    this.accounts = [];
    this.connectionStatus = "notConnected";
  }

  get isWalletConnect() {
    return true;
  }

  get session() {
    throw new Error("Session is not implemented.");
  }
}
