import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-typechain";
import "hardhat-gas-reporter";

const enableGasReport = !!process.env.ENABLE_GAS_REPORT;
const enableProduction = process.env.COMPILE_MODE === "production";

module.exports = {
  solidity: {
    version: "0.5.17",
    settings: {
      optimizer: {
        enabled: enableGasReport || enableProduction,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 50000,
  },
};
