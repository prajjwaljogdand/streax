import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute} = deployments;

  const {deployer, admin} = await getNamedAccounts();

  await deploy('STRX', {
    from: deployer,
    args : [deployer],
    log: true,
  });

};
export default func;
func.tags = ['STRX'];
