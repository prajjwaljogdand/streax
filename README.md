
## Installation

    yarn install

    npm install --force

## Setup

### .env
Copy `.env` from `.env.default`

    cp .env.default .env

and fill in all the variables in `.env`

### hardhat.config.ts
Modify `namedAccounts` in `hardhat.config.ts` and add networks if necessary. I have used BSCTESTNET
you can get faucet for bsc - https://testnet.bnbchain.org/faucet-smart

## Deployment
### Deploy TOKEN contract.

    npx hardhat deploy --network <NETWORK>
    npx hardhat deploy --network bsctestnet

#### Options

`--tags <tags>`: only excute deploy scripts with the given tags (separated by commas) and their dependencies

See more options [here](https://github.com/wighawag/hardhat-deploy#1-hardhat-deploy) for `hardhat deploy`.

###  mintSTRX

    npx hardhat mintNFT <RECEPIENT_ADD> <AMOUNT> --network <NETWORK>

###  transfer

    npx hardhat transfer <RECEPIENT_ADD> <AMOUNT> --network <NETWORK>

### Test
    to test contract using automatic tests

    npx hardhat test ./tests/test