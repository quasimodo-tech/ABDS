// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IUniswapOracle {
    function getABDSPriceInUSDT() external view returns (uint256);
    function getABDSPriceInUSDC() external view returns (uint256);
    function getABDSPriceInETH() external view returns (uint256);
}

contract UniswapV2PriceOracle is IUniswapOracle, Ownable {
    address public abdsUsdtPool;
    address public abdsUsdcPool;
    address public abdsEthPool;

    constructor(
        address _abdsUsdtPool,
        address _abdsUsdcPool,
        address _abdsEthpool
    ) {
        abdsUsdtPool = _abdsUsdtPool;
        abdsUsdcPool = _abdsUsdcPool;
        abdsEthPool = _abdsEthpool;
    }

    function getABDSPriceInUSDT() public view override returns (uint256) {
        return getPriceFromUniswap(abdsUsdtPool);
    }

    function getABDSPriceInUSDC() public view override returns (uint256) {
        return getPriceFromUniswap(abdsUsdcPool);
    }
    // getABDSPriceInETH
    function getABDSPriceInETH() public view override returns (uint256) {
        return getPriceFromUniswap(abdsUsdcPool);
    }

    function getPriceFromUniswap(address pair) internal view returns (uint256) {
        IUniswapV2Pair uniswapPair = IUniswapV2Pair(pair);
        (uint112 reserve0, uint112 reserve1, ) = uniswapPair.getReserves();

        // Assuming ABDS is token0, price = reserve1 / reserve0
        return (reserve1 * 10 ** 18) / reserve0;
    }

    function setPools(
        address _abdsUsdtPool,
        address _abdsUsdcPool,
        address _abdsEthPool
    ) external onlyOwner {
        abdsUsdtPool = _abdsUsdtPool;
        abdsUsdcPool = _abdsUsdcPool;
        abdsEthPool = _abdsEthPool;
    }
}
