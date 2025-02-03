import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers"

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/ba8799c0c60f4df7a29f492892228321",
      accounts: ["0xa1e9ebd476f95a598e7254e54df1f13bff1aafc6f183e3c4bd1951ab1787a4ff"], // Add your private key here
      chainId: 11155111,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/ba8799c0c60f4df7a29f492892228321`,
      accounts: ["0xa1e9ebd476f95a598e7254e54df1f13bff1aafc6f183e3c4bd1951ab1787a4ff"], // Private key for signing transactions
      chainId: 1, // Ethereum Mainnet chain ID
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "T2CVF4Q6U5MVVACFPQCBIWUK9RUV6IGMM9", // Add your Etherscan API key for Sepolia
    },
  },
};

export default config;
// 0xa628B42Bf6c1Fb6e8f175F6482C0db9BFE79fe9c