import { ethers } from "ethers";
import { generateTestingUtils } from "eth-testing";
import * as ethersProvider from "./ethers-provider";
import * as web3jsProvider from "./web3js-provider";
import { DAI_ABI } from "./dai";
import { ethersApp } from "./ethers-app";
import { web3jsApp } from "./web3js-app";
import Web3 from "web3";

describe("apps test", () => {
  const mainnetUtils = generateTestingUtils();

  const daiUtils = mainnetUtils.generateContractUtils(DAI_ABI);

  const senderAddress = "0xEB75Ec9E98969e97ab3B53FB819D61d85eA516d6";
  const recipientAddress = "0x617a4F6E7281d7E2EB5e96EFFFD6207Ffae05fee";

  describe("Ethers app", () => {
    beforeEach(async () => {
      mainnetUtils.mockReadonlyProvider();

      jest
        .spyOn(ethersProvider, "deriveProvider")
        .mockReturnValue(
          new ethers.providers.Web3Provider(mainnetUtils.getProvider())
        );
    });

    test("it should log the proper balances", async () => {
      const consoleSpy = jest.spyOn(console, "log");
      const decimals = 18;
      daiUtils.mockCall("decimals", [decimals]);
      daiUtils.mockCall(
        "balanceOf",
        [ethers.utils.parseUnits("10", decimals)],
        {
          callValues: [senderAddress],
        }
      );
      daiUtils.mockCall(
        "balanceOf",
        [ethers.utils.parseUnits("23", decimals)],
        {
          callValues: [recipientAddress],
        }
      );

      daiUtils.mockTransaction("transfer", undefined, {
        triggerCallback: () => {
          daiUtils.mockCall(
            "balanceOf",
            [ethers.utils.parseUnits("9", decimals)],
            { callValues: [senderAddress] }
          );
          daiUtils.mockCall(
            "balanceOf",
            [ethers.utils.parseUnits("24", decimals)],
            { callValues: [recipientAddress] }
          );
        },
      });

      await ethersApp();

      expect(consoleSpy).toHaveBeenCalledTimes(4);
      expect(consoleSpy).toHaveBeenNthCalledWith(1, "10.0");
      expect(consoleSpy).toHaveBeenNthCalledWith(2, "23.0");
      expect(consoleSpy).toHaveBeenNthCalledWith(3, "9.0");
      expect(consoleSpy).toHaveBeenNthCalledWith(4, "24.0");
    });
  });

  describe("Web3JS app", () => {
    beforeEach(async () => {
      mainnetUtils.mockReadonlyProvider();

      jest
        .spyOn(web3jsProvider, "deriveProvider")
        .mockReturnValue(mainnetUtils.getProvider() as any);
    });

    test("it should log the proper balances", async () => {
      const consoleSpy = jest.spyOn(console, "log");
      const decimals = 18;
      const decimalsBN = Web3.utils.toBN((10 ** Number(decimals)).toString());

      daiUtils.mockCall("decimals", [decimals]);
      daiUtils.mockCall(
        "balanceOf",
        [Web3.utils.toBN(10).mul(decimalsBN).toString()],
        {
          callValues: [senderAddress],
        }
      );
      daiUtils.mockCall(
        "balanceOf",
        [Web3.utils.toBN(23).mul(decimalsBN).toString()],
        {
          callValues: [recipientAddress],
        }
      );

      daiUtils.mockTransaction("transfer", undefined, {
        triggerCallback: () => {
          daiUtils.mockCall(
            "balanceOf",
            [Web3.utils.toBN(9).mul(decimalsBN).toString()],
            { callValues: [senderAddress] }
          );
          daiUtils.mockCall(
            "balanceOf",
            [Web3.utils.toBN(24).mul(decimalsBN).toString()],
            { callValues: [recipientAddress] }
          );
        },
      });

      await web3jsApp();

      expect(consoleSpy).toHaveBeenCalledTimes(4);
      expect(consoleSpy).toHaveBeenNthCalledWith(1, "10");
      expect(consoleSpy).toHaveBeenNthCalledWith(2, "23");
      expect(consoleSpy).toHaveBeenNthCalledWith(3, "9");
      expect(consoleSpy).toHaveBeenNthCalledWith(4, "24");
    });
  });
});
