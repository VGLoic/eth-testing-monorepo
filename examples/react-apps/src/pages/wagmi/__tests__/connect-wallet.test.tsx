import * as React from 'react';
import {
    act,
    render,
    screen,
    waitForElementToBeRemoved,
  } from "@testing-library/react";
  import userEvent from "@testing-library/user-event";
  import { generateTestingUtils } from "eth-testing";
import { ethers } from "ethers";
import { Client, createClient, useConnect, WagmiConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
  import { Example } from "..";


  function WrapperGenerator(client: Client) {
    return function TestWagmiProvider(props: any) {
      return <WagmiConfig client={client} {...props} />
    }
  }
  
  describe("Connect wallet [Wagmi Metamask]", () => {
    let originalEthereum: any;
    const walletTestingUtils = generateTestingUtils({
      providerType: "MetaMask",
    });

    const mainnetReadonlyTestingUtils = generateTestingUtils();
    const goerliReadonlyTestingUtils = generateTestingUtils();
   
    let client: Client<any>;

    beforeAll(() => {
      originalEthereum = global.window.ethereum;
      global.window.ethereum = walletTestingUtils.getProvider();
    });
  
    afterAll(() => {
      global.window.ethereum = originalEthereum;
    });

    beforeEach(async () => {
      mainnetReadonlyTestingUtils.mockReadonlyProvider({ chainId: 1 });
      goerliReadonlyTestingUtils.mockReadonlyProvider({ chainId: 5 });

      const mainnetProvider = new ethers.providers.Web3Provider(mainnetReadonlyTestingUtils.getProvider());
      await mainnetProvider.ready;

      const goerliProvider = new ethers.providers.Web3Provider(goerliReadonlyTestingUtils.getProvider());
      await goerliProvider.ready;

      client = createClient({
        provider: ({ chainId }) => chainId === 1 ? mainnetProvider : goerliProvider,
      });

    })
  
    afterEach(() => {
      walletTestingUtils.clearAllMocks();
      mainnetReadonlyTestingUtils.clearAllMocks();
      goerliReadonlyTestingUtils.clearAllMocks();
    });
  
    test("User should be able to connect using MetaMask", async () => {
      // Start with not connected wallet
      walletTestingUtils.mockNotConnectedWallet();
  
      // After the eth_requestAccounts has resolved
      // - the account will be "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf",
      // - the chain will be "0x1",
      // - the block number will be "0x1"
      walletTestingUtils.mockRequestAccounts(
        ["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"],
        {
          chainId: 1,
          triggerCallback: () => {
            mainnetReadonlyTestingUtils.mockBalance("0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf", '0x6c6b935b8bbd400000')
          }
        }
      );
  
      render(<Example />, { wrapper: WrapperGenerator(client) });
  
      const connectButton = screen.getByRole("button", { name: /connect/i });
      userEvent.click(connectButton);
  
      await waitForElementToBeRemoved(connectButton);
  
      // Wait for sync
      await screen.findByText(
        /account: 0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf/i
      );
      // Rest of the state should be present
      expect(screen.getByText(/chain id: 1/i)).toBeInTheDocument();
      await screen.findByText(/balance: 2.00/i);
    });
  
    test("User should be able to see a changed account or network", async () => {
      function mockConnect() {
        function MockConnect() {
          const { connect } = useConnect({
            connector: new InjectedConnector(),
          })
          // eslint-disable-next-line react-hooks/exhaustive-deps
          React.useEffect(() => { connect() }, []);
          return null;
        }
        render(<MockConnect />, { wrapper: WrapperGenerator(client) })
      }
      // As the app state is reset, wagmi will not auto connect to newly created connectors
      // so there is a need to manually trigger the connection beforehand
      mockConnect();

      // Simulate a connected wallet
      walletTestingUtils.mockConnectedWallet(
        ["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]
      );
      mainnetReadonlyTestingUtils.mockBalance("0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf", "0x1bc16d674ec80000");
  
      render(<Example />, { wrapper: WrapperGenerator(client) });

  
      // Wait for connection
      await screen.findByText(
        /account: 0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf/i
      );
      await screen.findByText(/balance: 2.0/i);
  
      // Mock the balance of the new account
      mainnetReadonlyTestingUtils.mockBalance(
        "0x138071e4e810f34265bd833be9c5dd96f01bd8a5",
        "0xde0b6b3a7640000"
      );
  
      // Simulate a change of account
      act(() => {
        walletTestingUtils.mockAccountsChanged([
          "0x138071e4e810f34265bd833be9c5dd96f01bd8a5",
        ]);
      });
  
      // Wait for sync
      await screen.findByText(
        /account: 0x138071e4e810f34265bd833be9c5dd96f01bd8a5/i
      );
      await screen.findByText(/balance: 1.0/i);
  
      // Mock account balance on the new chain
      goerliReadonlyTestingUtils.mockBalance(
        "0x138071e4e810f34265bd833be9c5dd96f01bd8a5",
        "0x4563918244f40000"
      );
  
      // Simulate a change of chain
      act(() => {
        walletTestingUtils.mockChainChanged("0x5");
      });
  
      // Wait for sync
      await screen.findByText(/chain id: 5/i);
      await screen.findByText(/balance: 5.0/i);
    });
  });
  