import { render, screen, } from "@testing-library/react";
import { setupEthTesting } from "eth-testing";
import { DumbResolver } from "..";

describe("ContractBox", () => {
  let originalEthereum: any;
  const testingUtils = setupEthTesting({
    providerType: "MetaMask",
  });

  beforeAll(() => {
    originalEthereum = global.window.ethereum;
    global.window.ethereum = testingUtils.getProvider();
  });

  afterAll(() => {
    global.window.ethereum = originalEthereum;
  });

  test("'blabla.eth' should resolve to the proper address and 0x0A9...2C should resolve to proper name", async () => {
    testingUtils.mockConnectedWallet([
      "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf",
    ]);
    // Only name to address resolution, i.e. name -> address
    testingUtils.ens.mockResolve(
      "blabla.eth",
      "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"
    );
    // Couple a name with an address, i.e name -> address and address -> name
    testingUtils.ens.mockEnsName(
      "0x0A91aEccB70C8a5d3EAAeC10fB263A5cEf44932C",
      "bloblo.eth"
    );
    render(<DumbResolver />);

    await screen.findByText(
      /ens name 'blabla.eth' resolves to '0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf'/i
    );
    await screen.findByText(
      /address '0x0A91aEccB70C8a5d3EAAeC10fB263A5cEf44932C' resolves to 'bloblo.eth'/i
    );
  });
});
