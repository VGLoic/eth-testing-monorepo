import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { generateTestingUtils } from "eth-testing";
import Web3ReactPage from "..";

describe("Web3 React app", () => {
    let originalEthereum: any;
    const testingUtils = generateTestingUtils({
        providerType: "MetaMask",
    });

    beforeAll(() => {
        originalEthereum = global.window.ethereum;
        global.window.ethereum = testingUtils.getProvider();
    });

    afterEach(() => {
        testingUtils.clearAllMocks();
      });

    afterAll(() => {
        global.window.ethereum = originalEthereum;
    });
    test("User should be able to see its address after connection", async () => {
        testingUtils.mockNotConnectedWallet();

        testingUtils.mockRequestAccounts(
            ["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"],
            {
              balance: "0x1bc16d674ec80000",
            }
          );

        render(<Web3ReactPage />);

        expect(screen.queryByText(/account/i)).not.toBeInTheDocument();

        userEvent.click(screen.getByRole('button'));

        await screen.findByText(/account: 0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf/i);
    })
})