const hre = require("hardhat");
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // deploy UniswapV3PriceOracle
  /* const Token = await hre.ethers.getContractFactory("UniswapV3PriceOracle");
  const token = await Token.deploy(
    "0xa628b42bf6c1fb6e8f175f6482c0db9bfe79fe9c",
    "0x56a2e28afd83317d8bd51e629382bb482f8f1769",
    "0x8d4e39d4380392994f50e2c8413ddffe7e720a7b"
  ); */

  /* const Token = await hre.ethers.getContractFactory("ABDSStaking");
  const token = await Token.deploy(); */
  await token.waitForDeployment();
  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
