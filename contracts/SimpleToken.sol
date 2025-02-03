// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SimpleToken is ERC20 {
    // Supply of tokens when deployed (e.g., 1 million tokens with 18 decimals)
    uint256 public initialSupply = 1000000 * 10 ** 18;

    constructor() ERC20("SimpleTSTToken", "STK") {
        // Mint the initial supply of tokens to the contract deployer's address
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
