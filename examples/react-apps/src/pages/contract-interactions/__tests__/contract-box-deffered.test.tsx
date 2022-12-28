import { render, screen, waitFor } from "@testing-library/react";
import { generateTestingUtils } from "eth-testing";
import { ABI } from "constants/storage-contract";
import EthersContractBox from "../contract-box/ethers-contract-box";
import Web3JsContractBox from "../contract-box/web3js-contract-box";

class Deferred {
  private res: ((value: unknown) => void) | undefined = undefined;
  public promise;

  constructor() {
    const promise = new Promise((res) => {
        this.res = res;
    });
    this.promise = promise;
  }

  public resolve() {
    if (!this.res) {
        throw new Error("Nothing to resolve")
    }
    this.res(null);
  }
}

describe("ContractBox Deffered calls", () => {
  let originalEthereum: any;
  const testingUtils = generateTestingUtils({
    providerType: "MetaMask",
  });

  beforeAll(() => {
    originalEthereum = global.window.ethereum;
    global.window.ethereum = testingUtils.getProvider();
  });

  afterAll(() => {
    global.window.ethereum = originalEthereum;
  });

  beforeEach(() => {
    testingUtils.mockConnectedWallet([
      "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf",
    ]);
  });

  afterEach(() => {
    testingUtils.clearAllMocks();
  });

  test(`ethers - the value of the contract is displayed and up to date`, async () => {
    const myFunctionDelay = new Deferred();

    const contractTestingUtils = testingUtils.generateContractUtils(ABI);

    contractTestingUtils.mockCall("value", async () => {
      await myFunctionDelay.promise
      return ["100"]
    });
    contractTestingUtils.mockGetLogs("ValueUpdated", [["0"], ["12"]]);

    render(<EthersContractBox />);

    const valueElement = screen.getByText(/current value/i);
    expect(valueElement).toHaveTextContent("Current value:");

    await myFunctionDelay.resolve();

    await waitFor(() => {
      expect(valueElement).toHaveTextContent("Current value: 100");
    });

    expect(screen.getByText(/previous value: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/previous value: 12/i)).toBeInTheDocument();
  });

  test(`web3js - the value of the contract is displayed and up to date`, async () => {
    const myFunctionDelay = new Deferred();

    const contractTestingUtils = testingUtils.generateContractUtils(ABI);

    contractTestingUtils.mockCall("value", async () => {
      await myFunctionDelay.promise
      return ["100"]
    });
    contractTestingUtils.mockGetLogs("ValueUpdated", [["0"], ["12"]]);

    const subscriptionID = "0x123";
    testingUtils.mockSubscribe(subscriptionID);

    render(<Web3JsContractBox />);

    const valueElement = screen.getByText(/current value/i);
    expect(valueElement).toHaveTextContent("Current value:");

    await myFunctionDelay.resolve();

    await waitFor(() => {
      expect(valueElement).toHaveTextContent("Current value: 100");
    });

    expect(screen.getByText(/previous value: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/previous value: 12/i)).toBeInTheDocument();
  });
});
