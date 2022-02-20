import { Provider } from "./provider";

class MockInternalMetaMask {
  public isUnlocked() {
    return true;
  }
}

export class MetaMaskProvider extends Provider {
  public isMetaMask = true;
  public _metamask = new MockInternalMetaMask();
}
