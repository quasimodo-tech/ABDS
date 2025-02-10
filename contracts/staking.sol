// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol"; // Import console.sol
import "./UniswapV3PriceOracle.sol";
contract ABDSStaking is Ownable {
    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 duration; // Duration in days
        uint256 apr;
        bool earlyClaimAllowed;
    }
    mapping(address => Stake[]) public userStakes;
    mapping(address => uint256) public lastRewardTime; // Track last reward time for each user
    IERC20 public abdsToken;
    IERC20 public usdtToken;
    IERC20 public usdcToken;
    IUniswapOracle public uniswapOracle;
    uint256 public ADDITIONAL_REWARD_APR = 20;
    event Staked(
        address indexed user,
        uint256 amount,
        uint256 duration,
        uint256 apr
    );
    event StakeDurationExtended(
        address indexed user,
        uint256 amount,
        uint256 duration
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
    function boost(uint256 index, uint256 additionaldays) external {
        require(additionaldays > 0, "Additional days must be greater than 0");
        Stake storage stake = userStakes[msg.sender][index];
        require(
            stake.startTime + stake.duration * 1 days > block.timestamp,
            "lock time passed"
        );
        stake.duration += additionaldays;
        if (additionaldays >= 365) stake.apr += 80;
        else if (additionaldays >= 182) stake.apr += 50;
        else stake.apr += 20;
        emit StakeDurationExtended(msg.sender, stake.amount, stake.duration);
    }
    function setExtraAPR(uint256 _extraAPR) external onlyOwner {
        require(_extraAPR > 0, "ExtraAPR must greater than 0");
        ADDITIONAL_REWARD_APR = _extraAPR;
    }
    function stakeTokens(
        uint256 _amount,
        uint256 _duration,
        bool _earlyClaimAllowed
    ) external {
        require(_amount > 0, "Amount must be greater than 0");
        require(_duration > 0, "Duration must be greater than 0");
        abdsToken.transferFrom(msg.sender, address(this), _amount);
        uint256 baseApr;
        if (_amount <= 5000) {
            baseApr = 90;
        } else if (_amount <= 100000) {
            baseApr = 120;
        } else {
            baseApr = 150;
        }
        if (!_earlyClaimAllowed) baseApr += ADDITIONAL_REWARD_APR;
        // Add the stake for the user
        if (userStakes[msg.sender].length == 0)
            lastRewardTime[msg.sender] = block.timestamp;
        userStakes[msg.sender].push(
            Stake({
                amount: _amount,
                startTime: block.timestamp,
                duration: _duration,
                apr: baseApr,
                earlyClaimAllowed: _earlyClaimAllowed
            })
        );
        emit Staked(msg.sender, _amount, _duration, baseApr);
    }
    function Claim(uint8 tokenType) external {
        require(tokenType <= 3, "Invalid token type");
        Stake[] storage stakes = userStakes[msg.sender];
        uint256 totalReward = 0;
        uint256 i = 0;
        while (i < stakes.length) {
            uint256 stakeEndTime = stakes[i].startTime +
                (stakes[i].duration * 1 days);
            // Check if the stake has matured
            if (lastRewardTime[msg.sender] < stakeEndTime) {
                if (stakes[i].earlyClaimAllowed) {
                    uint256 reward = (stakes[i].amount *
                        stakes[i].apr *
                        ((block.timestamp -
                            (
                                lastRewardTime[msg.sender] > stakes[i].startTime
                                    ? lastRewardTime[msg.sender]
                                    : stakes[i].startTime
                            )) / 86400)) / (365 * 1000);
                    totalReward += reward;
                    i++;
                } else {
                    if (block.timestamp >= stakeEndTime) {
                        uint256 reward = (stakes[i].amount *
                            stakes[i].apr *
                            stakes[i].duration) / (365 * 1000);
                        totalReward += reward;
                        i++;
                        // Remove the matured stake
                        // stakes[i] = stakes[stakes.length - 1]; // Replace it with the last stake
                        // stakes.pop(); // Remove the last stake
                    } else {
                        i++; // If the stake hasn't matured, move to the next one
                    }
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
            emit RewardsWithdrawn(msg.sender, totalReward, tokenType);
        } else {
            uint256 convertedAmount;
            if (tokenType == 1) {
                uint256 price = uniswapOracle.getABDSPriceInUSDT();
                convertedAmount = (totalReward * price) / 1e18;

                console.log("convertedAmount");
                console.log(convertedAmount);
                require(
                    usdtToken.balanceOf(address(this)) >= convertedAmount,
                    "Insufficient USDT balance"
                );
                usdtToken.transfer(msg.sender, convertedAmount);
                lastRewardTime[msg.sender] = block.timestamp;
                emit RewardsWithdrawn(msg.sender, convertedAmount, tokenType);
            } else if (tokenType == 2) {
                uint256 price = uniswapOracle.getABDSPriceInUSDC();
                convertedAmount = (totalReward * price) / 1e18;
                require(
                    usdcToken.balanceOf(address(this)) >= convertedAmount,
                    "Insufficient USDC balance"
                );
                usdcToken.transfer(msg.sender, convertedAmount);
                lastRewardTime[msg.sender] = block.timestamp;
                emit RewardsWithdrawn(msg.sender, convertedAmount, tokenType);
            } else if (tokenType == 3) {
                // Fetch the price of ABDS token in Ether from the Uniswap Oracle
                uint256 price = uniswapOracle.getABDSPriceInETH();
                convertedAmount = (totalReward * price) / 1e18;
                // Transfer Ether as reward (after converting it from ABDS to Ether)
                require(
                    address(this).balance >= convertedAmount,
                    "Insufficient Ether balance"
                );
                payable(msg.sender).transfer(convertedAmount); // Transfer Ether to the user
                emit RewardsWithdrawn(msg.sender, convertedAmount, tokenType);
                lastRewardTime[msg.sender] = block.timestamp;
            }
        }
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
                if (
                    lastRewardTime[msg.sender] <
                    stakes[i].startTime + stakes[i].duration * 1 days
                ) {
                    uint256 reward = (stakes[i].amount *
                        stakes[i].apr *
                        stakes[i].duration) / (365 * 1000);
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
