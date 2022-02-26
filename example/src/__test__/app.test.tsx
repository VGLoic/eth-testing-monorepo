import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "App";
import { ABI } from "constants/storage-contract";
import { setupEthTesting } from "../../../src";

describe("App", () => {
    let originalEthereum: any;
    const testingUtils = setupEthTesting({
        providerType: "MetaMask",
    });

    beforeAll(() => {
        originalEthereum = (global.window as any).ethereum;
        (global.window as any).ethereum = testingUtils.getProvider();
    });

    afterAll(() => {
        (global.window as any).ethereum = originalEthereum;
    });

    afterEach(() => {
        testingUtils.clearAllMocks();
    });

    test("user is able to connect by clicking on the connect button, the wallet informations and smart contract values are shown", async () => {
        const contractTestingUtils = testingUtils.generateContractUtils(ABI);

        // Start with not connected wallet
        testingUtils.mockNotConnectedWallet();

        // After the eth_requestAccounts has resolved
        // - the account will be "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf",
        // - the chain will be "0x1",
        // - the block number will be "0x1"
        // - the call to the `value` method of the smart contract will resolved with 100
        testingUtils.mockRequestAccounts(
            ["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"],
            {
                triggerCallback: () => {
                    contractTestingUtils.mockCall("value", ["100"]);
                    contractTestingUtils.mockGetLogs("ValueUpdated", []);
                }
            }
        );

        render(<App />);

        const connectButton = screen.getByRole("button", { name: /connect/i });
        userEvent.click(connectButton);

        await waitForElementToBeRemoved(connectButton);

        const accountElement = screen.getByText(/account/i);
        const chainIdElement = screen.getByText(/chain id/i);

        expect(accountElement).toHaveTextContent("Account:");
        expect(chainIdElement).toHaveTextContent("Chain ID:");

        const contractBoxValueElement = screen.getByText(/current value/i);
        expect(contractBoxValueElement).toHaveTextContent("Current value:");

        await waitFor(() => {
            expect(accountElement).toHaveTextContent(
              "Account: 0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"
            );
            expect(chainIdElement).toHaveTextContent("Chain ID: 0x1");
        });

        await waitFor(() => {
            expect(contractBoxValueElement).toHaveTextContent("Current value: 100");
        });
    })
})