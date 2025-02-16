const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");
const { Reverter } = require("@nomicfoundation/hardhat-chai-matchers");
const pairAddress = "0x9B825aef07aaC47C6235E8EFa045A7C2b42ba55B";
const provider = new ethers.JsonRpcApiProvider(
  "https://sepolia.infura.io/v3/ba8799c0c60f4df7a29f492892228321"
);
const pairAbi = [
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
];
const pairContract = new ethers.Contract(pairAddress, pairAbi, provider);
async function getPrice() {
  try {
    // Fetch the reserves
    const [reserve0, reserve1] = await pairContract.getReserves();

    // Assuming reserve0 = ABDS, reserve1 = USDT, price of ABDS in terms of USDT
    const priceAinB = reserve1 / reserve0; // Token A (ABDS) in terms of Token B (USDT)
    const priceBinA = reserve0 / reserve1; // Token B (USDT) in terms of Token A (ABDS)

    console.log("Price of ABDS in USDT:", priceAinB);
    console.log("Price of USDT in ABDS:", priceBinA);
  } catch (error) {
    console.error("Error getting reserves:", error);
  }
}

// Call the function to get the price
getPrice();
