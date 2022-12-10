import { task } from "hardhat/config";
import {parseEther} from 'ethers/lib/utils';

task("mintSTRX", "mint STRX with params")
  .addPositionalParam("recipient")
  .addPositionalParam("amount")
  .setAction(async (taskArgs, hre) => {
    const ethers = hre.ethers;
    const { deployments, getNamedAccounts, network } = hre;
    const { get, execute } = deployments;
    const { deployer } = await getNamedAccounts();

   const tx =  await execute('STRX', { from: deployer }, 'mint', taskArgs.recipient,parseEther(taskArgs.amount));
   console.log(tx);
   console.log("STRX minted successfully");

  });