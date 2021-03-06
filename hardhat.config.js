/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require("dotenv").config();
 
 // Possible network values
 const TEST_NETWORK = "TEST_NETWORK"
 const LOCAL_NETWORK = "LOCAL_NETWORK"
 
 // By default network is set to local, change it to TEST_NETWORK to make a switch
 const NETWORK = TEST_NETWORK
 
 const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
 const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

 let networks = {};
 if (NETWORK == TEST_NETWORK) {
  networks = {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/asAHlPgJwvoA3gBIv41kI8oBRJ7bZ_8A",
        blockNumber: 14864994,
        enabled: true,
      }
    }
  }
  //   networks = {
  //    test_network: {
  //      url: `https://eth-mainnet.alchemyapi.io/v2/asAHlPgJwvoA3gBIv41kI8oBRJ7bZ_8A`
  //     //  url: `https://eth-rinkeby.alchemyapi.io/v2/jnE2fZOU9mSZ6YarRtKcD5r5CiNZA2If`

  //    }
  //  }
 };




 task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

 module.exports = {
   solidity: "0.8.1",
   networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/asAHlPgJwvoA3gBIv41kI8oBRJ7bZ_8A",
        enabled: true,
        gasPrice: 204369036266, 
        gas: 53064000,
      }
    }
  }
 };
 