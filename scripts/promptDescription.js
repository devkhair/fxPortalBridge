const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const CONTRACT_ADDRESS = "0x0CDb8FC9Ca8ea08D873114D9282AFb38Df910932";

  const PolyAsset = await hre.ethers.getContractFactory("PolyAsset");
  
  const polyAsset = PolyAsset.attach(CONTRACT_ADDRESS);

  console.log(await polyAsset.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});