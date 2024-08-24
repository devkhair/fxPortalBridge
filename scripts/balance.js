const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const ACCOUNT_ADDRESS = "0x0905d5C88a0644Da8fa56E0D78E9b694650A3008";
  const CONTRACT_ADDRESS = "0x0CDb8FC9Ca8ea08D873114D9282AFb38Df910932";

  const PolyAsset = await hre.ethers.getContractFactory("PolyAsset");
  const polyAsset = PolyAsset.attach(CONTRACT_ADDRESS);

  const balance = await polyAsset.balanceOf(ACCOUNT_ADDRESS) 
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});