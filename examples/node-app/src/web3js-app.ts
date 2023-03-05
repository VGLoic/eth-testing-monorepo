import Web3 from "web3";
import { DAI_ABI, DAI_ADDRESS } from "./dai";
import { deriveProvider } from "./web3js-provider";

/**
 * ################################ WARNING ################################
 * ################# DO NOT USE THIS PRIVATE KEY #################
 * It has been randomly generated for testing purpose only
 * It will be committed in a public repository on GitHub
 * It is unsafe to use
 * ################################ WARNING ################################
 */
const PRIVATE_KEY =
  "0x76cef758ca77d603bd1737b3e784a0aa6b901bc0d68e517d4b2fa4899728e52c";

export async function web3jsApp() {
  const provider = deriveProvider();
  const web3 = new Web3(provider);

  const wallet = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

  const dai = new web3.eth.Contract(DAI_ABI as any, DAI_ADDRESS);
  const decimals = await dai.methods.decimals().call();
  const decimalsBN = Web3.utils.toBN((10 ** Number(decimals)).toString());

  const recipientAddress = "0x617a4F6E7281d7E2EB5e96EFFFD6207Ffae05fee";

  const initialSenderBalance = await dai.methods
    .balanceOf(wallet.address)
    .call();
  Web3.utils.toBN(initialSenderBalance).div(decimalsBN);
  console.log(Web3.utils.toBN(initialSenderBalance).div(decimalsBN).toString());
  const initialRecipientBalance = await dai.methods
    .balanceOf(recipientAddress)
    .call();
  console.log(
    Web3.utils.toBN(initialRecipientBalance).div(decimalsBN).toString()
  );

  const ONE_DAI = Web3.utils.toBN(1).mul(decimalsBN);
  const data: string = await dai.methods
    .transfer(recipientAddress, ONE_DAI)
    .encodeABI();
  const gas = await dai.methods
    .transfer(recipientAddress, ONE_DAI)
    .estimateGas({ from: wallet.address });
  const gasPrice = await web3.eth.getGasPrice();
  const signedTransaction = await wallet.signTransaction({
    data,
    gasPrice,
    gas,
    from: wallet.address,
  });
  const rawTx = signedTransaction.rawTransaction;
  if (!rawTx) {
    throw new Error("Raw transaction has failed to be generated");
  }
  await web3.eth.sendSignedTransaction(rawTx);

  const updatedSenderBalance = await dai.methods
    .balanceOf(wallet.address)
    .call();
  console.log(Web3.utils.toBN(updatedSenderBalance).div(decimalsBN).toString());
  const updatedRecipientBalance = await dai.methods
    .balanceOf(recipientAddress)
    .call();
  console.log(
    Web3.utils.toBN(updatedRecipientBalance).div(decimalsBN).toString()
  );
}
