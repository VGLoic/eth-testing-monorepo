import { ethers } from "ethers";
import { DAI_ABI, DAI_ADDRESS } from "./dai";
import { deriveProvider } from "./ethers-provider";

/**
 * ################################ WARNING ################################
 * ################# DO NOT USE THIS MNEMONIC #################
 * It has been randomly generated for testing purpose only
 * It will be committed in a public repository on GitHub
 * It is unsafe to use
 * ################################ WARNING ################################
 */
const MNEMONIC =
  "glide best north warm side float spatial must coyote begin boy nothing";

export async function ethersApp() {
  const provider = deriveProvider();

  const wallet = ethers.Wallet.fromMnemonic(MNEMONIC).connect(provider);

  const dai = new ethers.Contract(DAI_ADDRESS, DAI_ABI, wallet);
  const decimals = await dai.decimals();

  const recipientAddress = "0x617a4F6E7281d7E2EB5e96EFFFD6207Ffae05fee";

  const initialSenderBalance = await dai.balanceOf(wallet.address);
  console.log(ethers.utils.formatUnits(initialSenderBalance, decimals));
  const initialRecipientBalance = await dai.balanceOf(recipientAddress);
  console.log(ethers.utils.formatUnits(initialRecipientBalance, decimals));

  const ONE_DAI = ethers.utils.parseUnits("1", decimals);
  const tx = await dai.transfer(recipientAddress, ONE_DAI);
  await tx.wait();

  const updatedSenderBalance = await dai.balanceOf(wallet.address);
  console.log(ethers.utils.formatUnits(updatedSenderBalance, decimals));
  const updatedRecipientBalance = await dai.balanceOf(recipientAddress);
  console.log(ethers.utils.formatUnits(updatedRecipientBalance, decimals));
}