import { Provider } from "./provider";

export class WalletConnectProvider extends Provider {
  async disconnect() {
    return;
  }

  async enable(): Promise<string[]> {
    return this.request({
      method: "eth_accounts",
      params: [],
    }) as Promise<string[]>;
  }
}
