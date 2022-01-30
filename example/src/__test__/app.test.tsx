import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "App";
import { setupEthTesting } from "../../../src";

describe("App", () => {
    let originalEthereum: any;
    const { provider, testingUtils } = setupEthTesting({
        providerType: "MetaMask",
    });

    beforeAll(() => {
        originalEthereum = (global.window as any).ethereum;
        (global.window as any).ethereum = provider;
    });

    afterAll(() => {
        (global.window as any).ethereum = originalEthereum;
    });

    afterEach(() => {
        testingUtils.clearAllMocks();
    });

    test("user is able to connect by clicking on the connect button", async () => {
        testingUtils.mockAccounts([]);
        testingUtils.mockChainId("0x1");
        testingUtils.mockRequestAccounts(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);

        render(<App />);

        const connectButton = screen.getByRole("button", { name: /connect/i });
        userEvent.click(connectButton);

        await waitForElementToBeRemoved(() => screen.getByRole("button", { name: /connect/i }));
    })
})