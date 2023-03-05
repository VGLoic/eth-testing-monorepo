import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: process.env.PRIVATE_KEY as string,
          balance: "1000000000000000000000000",
        },
      ],
    },
  },
};

export default config;
