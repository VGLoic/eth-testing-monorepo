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

## Usage and API description

The first step is to generate the utils
```TypeScript
const {
    provider,
    testingUtils,
    generateContractUtils
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
- `mockRequestAccounts`: allows to mock the connection request in the case of MetaMask
```TypeScript
// Mock the next request to eth_requestAccounts as 0x138071e4e810f34265bd833be9c5dd96f01bd8a5
testingUtils.mockRequestAccounts(["0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf"]);
```

Additionally, the `generateContractUtils` is exposed from the setup and allows to generate high level utils for contract interactions based on their ABI.
```TypeScript
const abi = [...];
const contractTestingUtils = generateContractUtils(abi);
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
