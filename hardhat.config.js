require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    }
  },
  networks: {
      hardhat: {
        accounts: {
          // mnemonic generated here: https://iancoleman.io/bip39/
          mnemonic: "junk junk junk"
        }
      }
  },
  mocha: {
    timeout: 2000000
  }
};
