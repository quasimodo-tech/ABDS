// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IUniswapOracle {
    function getABDSPriceInUSDT() external view returns (uint256);
    function getABDSPriceInUSDC() external view returns (uint256);
}

contract UniswapV3PriceOracle is IUniswapOracle, Ownable {
    address public abdsUsdtPool;
    address public abdsUsdcPool;

    constructor(address _abdsUsdtPool, address _abdsUsdcPool) {
        abdsUsdtPool = _abdsUsdtPool;
        abdsUsdcPool = _abdsUsdcPool;
    }

    function getABDSPriceInUSDT() public view override returns (uint256) {
        return getPriceFromUniswap(abdsUsdtPool);
    }

    function getABDSPriceInUSDC() public view override returns (uint256) {
        return getPriceFromUniswap(abdsUsdcPool);
    }

    function getPriceFromUniswap(address pool) internal view returns (uint256) {
        IUniswapV3Pool uniswapPool = IUniswapV3Pool(pool);
        (uint160 sqrtPriceX96, , , , , , ) = uniswapPool.slot0();
        return
            (uint256(sqrtPriceX96) * uint256(sqrtPriceX96) * 1e18) >> (96 * 2);
    }

    function setPools(
        address _abdsUsdtPool,
        address _abdsUsdcPool
    ) external onlyOwner {
        abdsUsdtPool = _abdsUsdtPool;
        abdsUsdcPool = _abdsUsdcPool;
    }
}
