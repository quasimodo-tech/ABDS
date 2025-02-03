// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol"; // Optional, to manage who can set prices

interface IPriceOracle {
    function getABDSPriceInUSDC() external view returns (uint256);
    function getABDSPriceInUSDT() external view returns (uint256);
    function getABDSPriceInETH() external view returns (uint256);
}

contract MockPriceOracle is IPriceOracle, Ownable {
    uint256 private abdsToUsdtPrice;
    uint256 private abdsToUsdcPrice;
    uint256 private abdsToEthPrice;

    // Constructor to initialize with default prices (can be modified later)
    constructor(
        uint256 _initialABDSUSDTPrice,
        uint256 _initialABDSUSDCPrice,
        uint256 _initialABDSETHPrice
    ) {
        abdsToUsdtPrice = _initialABDSUSDTPrice;
        abdsToUsdcPrice = _initialABDSUSDCPrice;
        abdsToEthPrice = _initialABDSETHPrice;
    }

    // Function to set the ABDS to USDT price (only callable by owner)
    function setABDSPriceInUSDT(uint256 _price) external onlyOwner {
        abdsToUsdtPrice = _price;
    }

    function setABDSPriceInETH(uint256 _price) external onlyOwner {
        abdsToUsdtPrice = _price;
    }
    // Function to set the ABDS to USDC price (only callable by owner)
    function setABDSPriceInUSDC(uint256 _price) external onlyOwner {
        abdsToUsdcPrice = _price;
    }

    // Get the ABDS to USDT price
    function getABDSPriceInUSDT() external view override returns (uint256) {
        return abdsToUsdtPrice;
    }

    // Get the ABDS to USDC price
    function getABDSPriceInUSDC() external view override returns (uint256) {
        return abdsToUsdcPrice;
    }
    function getABDSPriceInETH() external view override returns (uint256) {
        return abdsToEthPrice;
    }
}
