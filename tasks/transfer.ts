import { task } from "hardhat/config";
import {parseEther} from 'ethers/lib/utils';

task("transfer", "transfer STRX with params")
  .addPositionalParam("recipient")
  .addPositionalParam("amount")
  .setAction(async (taskArgs, hre) => {
    const ethers = hre.ethers;
    const { deployments, getNamedAccounts, network } = hre;
    const { get, execute } = deployments;
    const { deployer } = await getNamedAccounts();

   const tx =  await execute('STRX', { from: deployer }, 'transfer', taskArgs.recipient,parseEther(taskArgs.amount));
   console.log(tx);
   console.log("STRX transfered successfully");

  });