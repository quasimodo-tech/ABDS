const hre = require("hardhat");
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // deploy UniswapV2PriceOracle
  /* const Token = await hre.ethers.getContractFactory("UniswapV2PriceOracle");
  const token = await Token.deploy(
    "0xa628b42bf6c1fb6e8f175f6482c0db9bfe79fe9c",
    "0x56a2e28afd83317d8bd51e629382bb482f8f1769",
    "0x8d4e39d4380392994f50e2c8413ddffe7e720a7b"
  ); */

  // staking contract deploy
  /* const Token = await hre.ethers.getContractFactory("ABDSStaking");
  const token = await Token.deploy(
    "0x506F6E4847Dc177a62aC9250A9231376569EE728",
    "0x7169d38820dfd117c3fa1f22a697dba58d90ba06",
    "0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8",
    "0x3f9E360815Ca0F3A13120b8B5Ef5FFA5359D57fc"
  ); */

  // staking contract deploy
  const Token = await hre.ethers.getContractFactory("ABDSStaking");
  const token = await Token.deploy(
    "0x506F6E4847Dc177a62aC9250A9231376569EE728",
    "0x11AF9f545E9F7Aa667073Efd8Cb51930E89bdC4C",
    "0x11AF9f545E9F7Aa667073Efd8Cb51930E89bdC4C",
    "0xda2eedd254d3bd84180b293aEc1e5227A0FE87Ff"
  );

  // ABDS Token deploy
  /* const Token = await hre.ethers.getContractFactory("ABDS_Token");
  const token = await Token.deploy(); */

  // ABDS Token deploy
  // const Token = await hre.ethers.getContractFactory("SimpleToken");

  /* const Token = await hre.ethers.getContractFactory("UniswapV2PriceOracle");
  const token = await Token.deploy(
    "0x9B825aef07aaC47C6235E8EFa045A7C2b42ba55B",
    "0x9B825aef07aaC47C6235E8EFa045A7C2b42ba55B",
    "0x9B825aef07aaC47C6235E8EFa045A7C2b42ba55B"
  ); */
  await token.waitForDeployment();
  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
