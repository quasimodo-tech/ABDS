// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol"; // Import console.sol
import "./UniswapV3PriceOracle.sol";

contract ABDSStaking {
    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 duration; // Duration in days
        uint256 apr;
    }

    mapping(address => Stake[]) public userStakes;
    mapping(address => uint256) public lastRewardTime; // Track last reward time for each user

    IERC20 public abdsToken;
    IERC20 public usdtToken;
    IERC20 public usdcToken;
    IUniswapOracle public uniswapOracle;

    event Staked(
        address indexed user,
        uint256 amount,
        uint256 duration,
        uint256 apr
    );
    event UnlockedStakesWithdrawn(
        address indexed user,
        uint256 stakeAmount,
        uint256 rewardAmount
    );
    event RewardsWithdrawn(
        address indexed user,
        uint256 reward,
        uint8 tokenType
    );

    constructor(address _abds, address _usdt, address _usdc, address _oracle) {
        abdsToken = IERC20(_abds);
        usdtToken = IERC20(_usdt);
        usdcToken = IERC20(_usdc);
        uniswapOracle = IUniswapOracle(_oracle);
    }

    function getUserStake(
        address user,
        uint256 index
    ) external view returns (Stake memory) {
        require(index < userStakes[user].length, "Invalid index");
        return userStakes[user][index];
    }

    function stakeTokens(uint256 _amount, uint256 _duration) external {
        require(_amount > 0, "Amount must be greater than 0");
        require(_duration > 0, "Duration must be greater than 0");
        abdsToken.transferFrom(msg.sender, address(this), _amount);
        uint256 baseApr;
        if (_amount <= 5000) {
            baseApr = 9;
        } else if (_amount <= 100000) {
            baseApr = 12;
        } else {
            baseApr = 15;
        }
        // Add the stake for the user
        userStakes[msg.sender].push(
            Stake({
                amount: _amount,
                startTime: block.timestamp,
                duration: _duration,
                apr: baseApr
            })
        );

        emit Staked(msg.sender, _amount, _duration, baseApr);
    }

    function Claim(uint8 tokenType) external {
        require(tokenType <= 2, "Invalid token type");
        Stake[] storage stakes = userStakes[msg.sender];
        uint256 totalReward = 0;
        uint256 i = 0;
        while (i < stakes.length) {
            // Check if the stake has matured
            if (lastRewardTime[msg.sender] < stakes[i].startTime) {
                if (
                    block.timestamp >=
                    stakes[i].startTime + (stakes[i].duration * 1 days)
                ) {
                    uint256 reward = (stakes[i].amount *
                        stakes[i].apr *
                        stakes[i].duration) / (365 * 100);
                    totalReward += reward;

                    // Remove the matured stake
                    stakes[i] = stakes[stakes.length - 1]; // Replace it with the last stake
                    stakes.pop(); // Remove the last stake
                } else {
                    i++; // If the stake hasn't matured, move to the next one
                }
            } else i++;
        }
        require(totalReward > 0, "No rewards available to claim");

        // Update the lastRewardTime for the user

        if (tokenType == 0) {
            // Transfer the reward in ABDS tokens
            require(
                abdsToken.balanceOf(address(this)) >= totalReward,
                "Insufficient ABDS balance"
            );
            abdsToken.transfer(msg.sender, totalReward);
            lastRewardTime[msg.sender] = block.timestamp;
        } else {
            uint256 convertedAmount;
            if (tokenType == 1) {
                uint256 price = uniswapOracle.getABDSPriceInUSDT();
                convertedAmount = (totalReward * price) / 1e18;
                require(
                    usdtToken.balanceOf(address(this)) >= convertedAmount,
                    "Insufficient USDT balance"
                );
                usdtToken.transfer(msg.sender, convertedAmount);
                lastRewardTime[msg.sender] = block.timestamp;
            } else if (tokenType == 2) {
                uint256 price = uniswapOracle.getABDSPriceInUSDC();
                convertedAmount = (totalReward * price) / 1e18;
                require(
                    usdcToken.balanceOf(address(this)) >= convertedAmount,
                    "Insufficient USDC balance"
                );
                usdcToken.transfer(msg.sender, convertedAmount);
            }
        }

        emit RewardsWithdrawn(msg.sender, totalReward, tokenType);
        lastRewardTime[msg.sender] = block.timestamp;
    }

    function withdraw() external {
        Stake[] storage stakes = userStakes[msg.sender];
        uint256 totalPrincipal = 0;
        uint256 totalRewards = 0;
        uint256 i = 0;

        while (i < stakes.length) {
            if (
                block.timestamp >=
                stakes[i].startTime + (stakes[i].duration * 1 days)
            ) {
                totalPrincipal += stakes[i].amount;

                // Only calculate rewards if they haven't been claimed yet
                if (lastRewardTime[msg.sender] < stakes[i].startTime) {
                    uint256 reward = (stakes[i].amount *
                        stakes[i].apr *
                        stakes[i].duration) / (365 * 100);
                    totalRewards += reward;
                }

                // Remove the matured stake
                stakes[i] = stakes[stakes.length - 1]; // Replace it with the last stake
                stakes.pop(); // Remove last stake
            } else {
                i++; // If the stake hasn't matured, move to the next one
            }
        }

        require(totalPrincipal > 0, "No unlocked stakes to withdraw");

        uint256 totalPayout = totalPrincipal + totalRewards;

        require(
            abdsToken.balanceOf(address(this)) >= totalPayout,
            "Insufficient ABDS balance"
        );

        // Transfer principal + rewards
        abdsToken.transfer(msg.sender, totalPayout);

        // Update last reward claim time to prevent double claiming
        lastRewardTime[msg.sender] = block.timestamp;

        emit UnlockedStakesWithdrawn(msg.sender, totalPrincipal, totalRewards);
    }
}
