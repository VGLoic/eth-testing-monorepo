import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { generateTestingUtils } from "eth-testing";
import { ethers } from "ethers";
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
    test("User should be able to see its address after connection and sign a message", async () => {
        const randomWallet = ethers.Wallet.createRandom();

        testingUtils.mockNotConnectedWallet();

        testingUtils.mockRequestAccounts(
            [randomWallet.address],
            {
              balance: "0x1bc16d674ec80000",
            }
          );

        render(<Web3ReactPage />);

        expect(screen.queryByText(/account/i)).not.toBeInTheDocument();

        userEvent.click(screen.getByRole('button', { name: /connect/i}));

        await screen.findByText(`Account: ${randomWallet.address}`);

        const signature = await randomWallet.signMessage("hello");
        testingUtils.lowLevel.mockRequest("personal_sign", signature);
        userEvent.click(screen.getByRole("button", { name: /sign message/i }))
        await screen.findByText(`Signature: ${signature}`);
    })
})