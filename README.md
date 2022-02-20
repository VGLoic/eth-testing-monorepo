# Eth Testing

A set of tools in order to generate a mock Web3 Provider and simulate blockchain interactions in tests.

The goal is to directly mock the web3 provider level, it implies that it does not make any assumption on what other libraries/packages, such as `web3.js` or `ethers`, are used in order to interact with the remote blockchain.

**❗❗ This is an alpha version ❗❗ Use it at your own risk ❗❗**

## Example

An example of a simple decentralized React application is available in the `example/` folder. It uses `jest` and `@testing-library` for the tests. 

## Installation

The recommend way to use Eth-Testing with an application is to install it a development dependency:
```shell
# If you use npm:
npm install eth-testing@alpha --save-dev

# Or if you use Yarn:
yarn add eth-testing@alpha --dev
```

## Example preview

The `example` folder contains a fully tested simple application. It allows a user to connect with MetaMask and interact with a smart contract. The test of the loading of the full app is shown as an example.
```TypeScript
test("user is able to connect by clicking on the connect button, the wallet informations and smart contract values are shown", async () => {
    const contractTestingUtils = testingUtils.generateContractUtils(ABI);

    // Start with no accounts - the wallet is not connected
    testingUtils.mockAccounts([]);

    // After the eth_requestAccounts has finished
    // - the account will be "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf",
    // - the chain will be "0x1",
    // - the call to the `value` method of the smart contract will resolved with 100
    testingUtils.mockRequestAccounts(
        ["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"],
        {
            chainId: "0x1",
            triggerCallback: () => {
                contractTestingUtils.mockCall("value", ["100"]);
            }
        }
    );

    render(<App />);

    const connectButton = screen.getByRole("button", { name: /connect/i });
    userEvent.click(connectButton);

    await waitForElementToBeRemoved(() => screen.getByRole("button", { name: /connect/i }));

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
```

## Usage and API description

The first step is to generate the utils
```TypeScript
const {
    provider,
    testingUtils
} = setupEthTesting({ providerType: "MetaMask" });
```
The argument is only the provider type, the two choices for now are `"MetaMask"` or `"default"`.

The provider will then need to be injected in the application, this mechanism depends on the implementation details of the application. As an example for MetaMask, provider is injected in the `window` object so as an example, using `jest` hooks one may inject the mock provider as
```TypeScript
beforeAll(() => {
    global.window.ethereum = provider;
});
```

It is strongly advised to clean the mocks between each tests, this may be done using the `clearAllMocks` function exposed through the `testingUtils` object. Again, using `jest` hooks, this can be done as
```TypeScript
afterEach(() => {
    testingUtils.clearAllMocks();
});
```

### High levels mocks

High level mocking functions allows anyone, even without a knowledge of the underlying mechanics to properly mock the interactions with the provider/blockchain. This is the advised way to perform mocking.

The available functions for now are described below:
- `mockChainId`: allows to mock the chain ID / network to which the provider is connected
```TypeScript
// Mock the network to Ethereum main net
testingUtils.mockChainId("0x1");
```
- `mockAccounts`: allows to mock the accounts with which the provider is connected
```TypeScript
// Mock the connected account as 0x138071e4e810f34265bd833be9c5dd96f01bd8a5
testingUtils.mockAccounts(["0x138071e4e810f34265bd833be9c5dd96f01bd8a5"]);
```
- `mockChainChanged`: allows to simulate a change in the chain ID / network
```TypeScript
// Simulate a change to the Ropsten network
testingUtils.mockChainChanged("0x3");
```
- `mockAccountsChanged`: allows to simulate a change in the chain ID / network
```TypeScript
// Simulate a change of account to 0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf
testingUtils.mockAccountsChanged(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
```
- `mockRequestAccounts`: this is a special utils created in the case of MetaMask, it allows to mock the connection request. The accounts will automatically be mocked to the input value once the connection has been simulated.
```TypeScript
// Mock the next request to eth_requestAccounts as 0x138071e4e810f34265bd833be9c5dd96f01bd8a5
testingUtils.mockRequestAccounts(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
```

Additionally, the `generateContractUtils` is exposed from the `testingUtils` object and allows to generate high level utils for contract interactions based on their ABI.
```TypeScript
const abi = [...];
const contractTestingUtils = testingUtils.generateContractUtils(abi);
```

Let us consider a very simple contract
```Solidity
contract Storage {
    uint public value;

    function setValue(uint newValue) public {
        value = newValue;
    }
}
```

These utils expose two functions
- `mockCall`: allows to mock the result of a call to a contract using the name of the function to be called and the orderered list of values to be returned
```TypeScript
// Mock a call to the "value" function of the contract and returning the uint 100
contractTestingUtils.mockCall("value", ["100"]);
```
- `mockTransaction`: allows to mock the result of a transaction from a contract method using the name of the function to be called
```TypeScript
// Mock a transaction based from the `setValue` function of the contract
contractTestingUtils.mockTransaction("setValue");
```

### Low levels mocks

These functions handles mock at a lower level, use it at your own risk.
- `emit`: emits a notification for the provider, associated subscribers will be triggered
```TypeScript
// Simulate a change of account to 0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf
testingUtils.lowLevel.emit("accountsChanged", ["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
```
- `mockRequest`: registers a mock for a JSON-RPC request
```TypeScript
// Simulate 0x138071e4e810f34265bd833be9c5dd96f01bd8a5 as connected account
testingUtils.lowLevel.mockRequest("eth_accounts", ["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
```
