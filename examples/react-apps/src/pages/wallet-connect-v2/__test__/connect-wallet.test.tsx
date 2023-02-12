import {
    render,
    screen,
    waitForElementToBeRemoved,
  } from "@testing-library/react";

  import UniversalProvider from "@walletconnect/universal-provider";
    import { Web3Modal } from "@web3modal/standalone";

  import userEvent from "@testing-library/user-event";
  import { generateTestingUtils } from "eth-testing";
  import WalletConnection from "..";
  import * as providers from "../provider";
  
  describe("Connect wallet [Wallet Connect V2 Universal Provider]", () => {
    const testingUtils = generateTestingUtils({
      providerType: 'WalletConnect-UniversalProvider'
    });

    const openModal = jest.fn();
    const closeModal = jest.fn()

    class MockProviders {
        public universalProvider?: UniversalProvider;
        public web3Modal?: Web3Modal;
    
        public async init() {
            const WC_PROJECT_ID = process.env.REACT_APP_WC_PROJECT_ID;
            if (!WC_PROJECT_ID) {
                throw new Error("No Wallet Connect Project ID, please set up one in the environment variable under the key `REACT_APP_WC_PROJECT_ID`")
            }
    
            this.universalProvider = testingUtils.getProvider() as any as UniversalProvider;
            this.web3Modal = {
                openModal,
                closeModal
            } as any as Web3Modal;
    
            return {
                universalProvider: this.universalProvider,
                web3Modal: this.web3Modal
            }
        }
    
        public getUniversalProvider() {
            const provider = this.universalProvider;
            if (!provider) {
                throw new Error("Service not properly initialized")
            }
            return provider;
        }
    
        public getWeb3Modal() {
            const web3Modal = this.web3Modal;
            if (!web3Modal) {
                throw new Error("Service not properly initialized")
            }
            return web3Modal;
        }
    }
    const mockProviders = new MockProviders();
  
    beforeEach(() => {
      jest
        .spyOn(providers, "getProviders")
        .mockReturnValue(mockProviders);
    });
  
    afterEach(() => {
      testingUtils.clearAllMocks();
    });
  
    test("User should be able to connect using Wallet Connect", async () => {
      // Start with not connected wallet
      testingUtils.mockNotConnectedWallet();
  
    // After the eth_requestAccounts has resolved
    // - the account will be "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf",
    // - the chain will be "0x1",
    // - the block number will be "0x1"
    testingUtils.mockRequestAccounts(
        ["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]
      );  
      render(<WalletConnection />);
  
      const connectButton = screen.getByRole("button", { name: /connect/i });
      userEvent.click(connectButton);
  
      await waitForElementToBeRemoved(connectButton);
  
      // Wait for sync
      await screen.findByText(
        /account: 0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf/i
      );
      // Rest of the state should be present
      expect(screen.getByText(/chain id: 1/i)).toBeInTheDocument();
    });
  
    // test("User should be able to see a changed account or network", async () => {
    //   // Start with a connected wallet
    //   testingUtils.mockConnectedWallet(
    //     ["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"],
    //     {
    //       balance: "0x1bc16d674ec80000",
    //     }
    //   );
  
    //   render(<WalletConnection />);
  
    //   const connectButton = screen.getByRole("button", { name: /connect/i });
    //   userEvent.click(connectButton);
  
    //   await waitForElementToBeRemoved(connectButton);
  
    //   // Wait for sync
    //   await screen.findByText(
    //     /account: 0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf/i
    //   );
  
    //   // Mock the balance of the new account
    //   testingUtils.mockBalance(
    //     "0x138071e4e810f34265bd833be9c5dd96f01bd8a5",
    //     "0xde0b6b3a7640000"
    //   );
  
    //   // Simulate a change of account
    //   act(() => {
    //     testingUtils.mockAccountsChanged([
    //       "0x138071e4e810f34265bd833be9c5dd96f01bd8a5",
    //     ]);
    //   });
  
    //   // Wait for sync
    //   await screen.findByText(
    //     /account: 0x138071e4e810f34265bd833be9c5dd96f01bd8a5/i
    //   );
    //   expect(screen.getByText(/balance: 1.00/i)).toBeInTheDocument();
  
    //   // Mock account balance on the new chain
    //   testingUtils.mockBalance(
    //     "0x138071e4e810f34265bd833be9c5dd96f01bd8a5",
    //     "0x4563918244f40000"
    //   );
  
    //   // Simulate a change of chain
    //   act(() => {
    //     testingUtils.mockChainChanged("0x3");
    //   });
  
    //   // Wait for sync
    //   await screen.findByText(/chain id: 0x3/i);
    //   expect(screen.getByText(/balance: 5.00/i)).toBeInTheDocument();
    // });
  
    // test("User should be able to sign a transaction", async () => {
    //   const bobsWallet = ethers.Wallet.createRandom();
    //   // Start with a connected bobsWallet
    //   testingUtils.mockConnectedWallet([bobsWallet.address]);
    //   // mock out a function to call when we request personal sign
    //   let signedMessages: string[] = [];
    //   testingUtils.lowLevel.mockRequest("personal_sign", async (params: any) => {
    //     let statement = (params as string[])[0];
    //     const signedMessage = await bobsWallet.signMessage(statement);
    //     signedMessages.push(signedMessage);
    //     return signedMessage;
    //   });
    //   // render the wallet
    //   render(<WalletConnection />);
    //   // connect the wallet
    //   const connectButton = screen.getByRole("button", { name: /connect/i });
    //   userEvent.click(connectButton);
    //   await screen.findByText(`account: ${bobsWallet.address}`, { exact: false });
    //   // get the div for the signature result
    //   const signatureResult = screen.getByTestId("signatureResult");
    //   expect(signatureResult).toHaveTextContent("");
    //   // sign the transaction
    //   const signButton = screen.getByRole("button", { name: /sign/i });
    //   userEvent.click(signButton);
    //   // wait for the result to appear
    //   await waitFor(() => {
    //     expect(signatureResult).not.toHaveTextContent("");
    //   });
    //   // expect it to be the same as the signed message
    //   expect(signatureResult).toHaveTextContent(signedMessages[0]);
    // });
  });
  