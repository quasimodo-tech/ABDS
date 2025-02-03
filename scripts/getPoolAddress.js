const { ethers } = require("hardhat");

async function main() {
  const UNISWAP_V3_FACTORY = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
  const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; // USDT Mainnet
  const ABDS = "0xB56AaAc80C931161548a49181c9E000a19489C44"; // Replace with your ABDS token address
  const FEE_TIER = 3000; // 0.3% fee tier

  // Get Uniswap V3 Factory contract instance
  const factory = await ethers.getContractAt(
    "IUniswapV3Factory",
    UNISWAP_V3_FACTORY
  );

  // Get the pool address
  const poolAddress = await factory.getPool(USDT, ABDS, FEE_TIER);
  console.log("USDT/ABDS Pool Address:", poolAddress);

  if (poolAddress === ethers.ZeroAddress) {
    console.log(
      "No Uniswap pool exists for this pair with the selected fee tier."
    );
  }
}

// Run the script and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
