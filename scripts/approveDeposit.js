const hre = require("hardhat");
require("dotenv").config();

const fxERC721RootContractABI = require("../fxRootContractABI.json");

const fxERC721RootAddress = "0xea55754D5657aF027C2441638cD3D118ff64e081";

async function main() {
  
  const CONTRACT_ADDRESS = "";

  const BRIDGE_ADDRESS = "0x6bb6d56d14478c66aa2ec2f9723bb8d8f85073fb"

  const [deployer] = await hre.ethers.getSigners();

  const PolyAsset = await hre.ethers.getContractFactory("PolyAsset");

  const polyAsset = PolyAsset.attach(CONTRACT_ADDRESS);

  const fxRootContract = await hre.ethers.getContractAt(fxERC721RootContractABI, fxERC721RootAddress);

  const approveTx = await polyAsset.connect(deployer).setApprovalForAll(fxERC721RootAddress, true);

  await approveTx.wait();

  for (let i = 1; i <= 5; i++) { 

    const depositTx = await fxRootContract.connect(deployer).deposit(PolyAsset.address, BRIDGE_ADDRESS, i, "0x6566");
    
    await depositTx.wait();
  }

  console.log("PolyAsset successfully deposited");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});