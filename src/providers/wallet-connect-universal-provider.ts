import EventEmitter from "events";
import { Provider, VerboseArgs } from "./provider";

type ProviderConstructorArgs = {
  verbose?: VerboseArgs;
};

type ConnectionStatus = "notConnected" | "connected" | "connecting";

export class WalletConnectUniversalProvider extends Provider {
  public events: EventEmitter;
  public rpcProviders: any = {};

  private connectionStatus: ConnectionStatus = "notConnected";

  constructor({ verbose }: ProviderConstructorArgs) {
    super({
      verbose,
      ethTestingProviderType: "WalletConnect-UniversalProvider",
    });

    this.events = this;
  }

  static async init(mockProviderOpts: ProviderConstructorArgs) {
    return new WalletConnectUniversalProvider(mockProviderOpts);
  }

  get connected(): boolean {
    return this.connectionStatus === "connected";
  }

  get connecting(): boolean {
    return this.connectionStatus === "connecting";
  }

  public async enable(): Promise<string[]> {
    const accounts = (await this.request({
      method: "eth_requestAccounts",
      params: [],
    })) as string[];
    return accounts;
  }

  public async connect(_?: any): Promise<void> {
    return;
  }

  public async disconnect(): Promise<void> {
    this.connectionStatus = "notConnected";
  }

  get isWalletConnect() {
    return true;
  }

  get session(): any {
    throw new Error("`session` is not implemented.");
  }

  get client() {
    throw new Error("`client` is not implemented.");
  }

  get namespaces() {
    throw new Error("`namespaces` is not implemented.");
  }

  get providerOpts() {
    throw new Error("`providerOpts` is not implemented.");
  }

  get logger() {
    throw new Error("`logger` is not implemented.");
  }

  get uri() {
    throw new Error("`uri` is not implemented.");
  }
}
