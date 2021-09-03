# Eth Testing Example Application

This is an example of a React decentralized application. The app connects to Ethereum using MetaMask and allows the user to interact with a simple contract.

The test files demonstrate how to use `eth-testing` with `@testing-library` in order to properly test components and logic interacting with the Ethereum provider.

## Get started

Install the dependencies
```shell
npm install
```

### Run the tests

```shell
npm test
```

There are two tests:
- `header.test.tsx`: about account and network display
- `contract-box.test.tsx`: about contract interaction

### Start the application

1. Launch a development blockchain network using a ganache-cli with one account. If no `PRIVATE_KEY` is given, a random one will be generated.
```shell
PRIVATE_KEY=<MY_PRIVATE_KEY> npm run ganache:start
```
The exposed port of the ganache-cli is `8545`.

2. Deploy the `Storage.sol` contract on the development network
```shell
npm run truffle:deploy
```
Copy the deployed address of the contract and paste it in `src/constants/storage-contract.ts` for the exported `ADDRESS` variable.

3. Run the application
```shell
npm start
```
