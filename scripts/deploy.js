
DEPLOY_KEY_RINKEBY="https://eth-rinkeby.alchemyapi.io/v2/r80fLbDEwI0kzrBVhFFFumDRiSUSKWkp";
DEPLOY_ACC_RINKEBY="1d750586541ea8e129c28b6ffb6bf4d59078eb7baabf2e5b608995a2bdf9da8b";

require('@nomiclabs/hardhat-waffle');

// ➡️ Load env file
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',

  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: process.env.DEPLOY_KEY_RINKEBY,
      accounts: [process.env.DEPLOY_ACC_RINKEBY],
    },
  },
};
const main = async () => {
    // gets info of the account used to deploy
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
  
    console.log('Deploying contract with account: ', deployer.address);
    console.log('Account balance: ', accountBalance.toString());
  
    // read contract file
    const luckyContractFactory = await hre.ethers.getContractFactory(
      'treasurer'
    );
    // triggers deployment
    const luckyContract = await luckyContractFactory.deploy({});
  
    // wait for deployment to finish
    await luckyContract.deployed();
  
    console.log('treasurer contract address: ', luckyContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();
 