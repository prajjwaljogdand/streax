import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-contract-sizer';
import './tasks';


const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || " ";

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },
  namedAccounts: {
    deployer: process.env.DEPLOYER!,
    admin: process.env.ADMIN!,
    guardian: process.env.GUARDIAN!,
  },
  networks: {
    hardhat: {
      forking: {
        url:  "https://data-seed-prebsc-2-s1.binance.org:8545/",
      }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_TOKEN}`,
      accounts: process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    bsctestnet: {
      url:
        process.env.BSC_TESTNET_NODE ||
        "https://data-seed-prebsc-2-s1.binance.org:8545/",
      chainId: 97,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
      timeout: 12000000,
    },
    bscmainnet: {
      url: `https://bsc-dataseed.binance.org/`,
      chainId: 56,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    localhost: {
      url: `http://127.0.0.1:8545/`,
      chainId: 31337,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;
