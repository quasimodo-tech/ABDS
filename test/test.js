const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");
const { Reverter } = require("@nomicfoundation/hardhat-chai-matchers");
describe("ABDSStaking Contract", function () {
  let ABDSStaking;
  let PriceOracle;
  let abdsToken;
  let usdtToken;
  let usdcToken;
  let priceOracle;
  let owner;
  let user;
  let hacker;
  let mockPriceOracle;
  beforeEach(async function () {
    [owner, user, hacker] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("SimpleToken");
    abdsToken = await Token.deploy();
    await abdsToken.waitForDeployment();
    usdtToken = await Token.deploy();
    usdcToken = await Token.deploy();

    const MockPriceOracle = await ethers.getContractFactory("MockPriceOracle");
    mockPriceOracle = await MockPriceOracle.deploy(
      ethers.parseUnits("1", 18),
      ethers.parseUnits("1", 18)
    );
    await mockPriceOracle.waitForDeployment();

    const mintAmount = 200000000; // 1000 tokens
    await abdsToken.mint(owner.address, mintAmount); // Mint tokens to the owner
    await abdsToken.mint(user.address, mintAmount); // Mint tokens to the owner
    await abdsToken.mint(hacker.address, mintAmount); // Mint tokens to the owner
    await usdcToken.mint(owner.address, mintAmount); // Mint tokens to the owner
    await usdtToken.mint(user.address, mintAmount); // Mint tokens to the owner
    await usdcToken.mint(owner.address, mintAmount); // Mint tokens to the owner
    await usdcToken.mint(user.address, mintAmount); // Mint tokens to the owner

    // Deploying ABDSStaking contract
    const StakingFactory = await ethers.getContractFactory("ABDSStaking");
    ABDSStaking = await StakingFactory.deploy(
      abdsToken.getAddress(),
      usdtToken.getAddress(),
      usdcToken.getAddress(),
      mockPriceOracle.getAddress()
    );
    await ABDSStaking.waitForDeployment();
    await abdsToken
      .connect(owner)
      .approve(ABDSStaking.getAddress(), mintAmount);
    await abdsToken.connect(user).approve(ABDSStaking.getAddress(), mintAmount);
  });

  describe("Constructor", function () {
    it("Should set correct address", async function () {
      const addr_abds = await abdsToken.getAddress();
      const addr_usdt = await usdtToken.getAddress();
      const addr_usdc = await usdcToken.getAddress();

      expect(addr_abds).to.not.equal(ethers.ZeroAddress);
      expect(addr_usdt).to.not.equal(ethers.ZeroAddress);
      expect(addr_usdc).to.not.equal(ethers.ZeroAddress);
    });
  });

  describe("StakeToken", function () {
    it("Should return on zero balances", async function () {
      await expect(
        ABDSStaking.connect(owner).stakeTokens(0, 30)
      ).to.be.revertedWith("Amount must be greater than 0");
    });

    it("Should return on zero time", async function () {
      await expect(
        ABDSStaking.connect(owner).stakeTokens(100, 0)
      ).to.be.revertedWith("Duration must be greater than 0");
    });

    it("Should set correct APR value on tier 1", async function () {
      await ABDSStaking.connect(user).stakeTokens(100, 30);
      const userStake = await ABDSStaking.getUserStake(user.address, 0);
      expect(userStake.apr).to.be.equal(9);
    });
    it("Should set correct APR value on tier 2", async function () {
      await ABDSStaking.connect(user).stakeTokens(10000, 30);
      const userStake = await ABDSStaking.getUserStake(user.address, 0);
      expect(userStake.apr).to.be.equal(12);
    });
    it("Should set correct APR value on tier 3", async function () {
      await ABDSStaking.connect(user).stakeTokens(1000000, 30);
      const userStake = await ABDSStaking.getUserStake(user.address, 0);
      expect(userStake.apr).to.be.equal(15);
    });
  });

  describe("Claim Reward", function () {
    beforeEach(async function () {
      const mintAmount = 1000000; // 1000 tokens
      await abdsToken.mint(ABDSStaking.getAddress(), mintAmount);
      await usdtToken.mint(ABDSStaking.getAddress(), mintAmount);
      await usdcToken.mint(ABDSStaking.getAddress(), mintAmount);

      await abdsToken
        .connect(user)
        .approve(ABDSStaking.getAddress(), 10000000000000);
      await usdtToken
        .connect(user)
        .approve(ABDSStaking.getAddress(), 10000000000000);
      await usdcToken
        .connect(user)
        .approve(ABDSStaking.getAddress(), 10000000000000);
    });

    it("Should revert on invalid token type", async function () {
      await expect(ABDSStaking.connect(user).Claim(3)).to.be.revertedWith(
        "Invalid token type"
      );
    });

    it("Should get correct reward on Claim(tier1)", async function () {
      ABDSStaking.connect(user).stakeTokens(1000, 365);
      await time.latest();
      const currentUserToken = await abdsToken.balanceOf(user.address);

      await time.increase(365 * 24 * 60 * 60);
      await time.latest();

      await ABDSStaking.connect(user).Claim(0);
      const nextUserToken = await abdsToken.balanceOf(user.address);
      expect(nextUserToken - currentUserToken).to.be.equal(90);
    });

    it("Should get correct reward on Claim(tier2)", async function () {
      ABDSStaking.connect(user).stakeTokens(10000, 365);
      await time.latest();
      const currentUserToken = await abdsToken.balanceOf(user.address);

      await time.increase(365 * 24 * 60 * 60);
      await time.latest();

      await ABDSStaking.connect(user).Claim(0);
      const nextUserToken = await abdsToken.balanceOf(user.address);
      expect(nextUserToken - currentUserToken).to.be.equal(1200);
    });

    it("Should get correct reward on Claim(tier3)", async function () {
      ABDSStaking.connect(user).stakeTokens(200000, 365);
      await time.latest();
      const currentUserToken = await abdsToken.balanceOf(user.address);

      await time.increase(365 * 24 * 60 * 60);
      await time.latest();

      await ABDSStaking.connect(user).Claim(0);
      const nextUserToken = await abdsToken.balanceOf(user.address);
      expect(nextUserToken - currentUserToken).to.be.equal(30000);
    });

    it("Should get correct reward on Claim(usdt)", async function () {
      mockPriceOracle.setABDSPriceInUSDT(ethers.parseUnits("1.5", 18));
      ABDSStaking.connect(user).stakeTokens(1000, 365);
      await time.latest();
      const currentUserToken = await usdtToken.balanceOf(user.address);

      await time.increase(365 * 24 * 60 * 60);
      await time.latest();

      await ABDSStaking.connect(user).Claim(1);
      const nextUserToken = await usdtToken.balanceOf(user.address);
      expect(nextUserToken - currentUserToken).to.be.equal(135);
    });

    it("Should get correct reward on Claim(usdc)", async function () {
      mockPriceOracle.setABDSPriceInUSDC(ethers.parseUnits("0.5", 18));
      ABDSStaking.connect(user).stakeTokens(1000, 365);
      await time.latest();
      const currentUserToken = await usdcToken.balanceOf(user.address);

      await time.increase(365 * 24 * 60 * 60);
      await time.latest();

      await ABDSStaking.connect(user).Claim(2);
      const nextUserToken = await usdcToken.balanceOf(user.address);
      expect(nextUserToken - currentUserToken).to.be.equal(45);
    });
    it("Should revert if too big reward(usdt)", async function () {
      mockPriceOracle.setABDSPriceInUSDT(ethers.parseUnits("1.5", 18));
      ABDSStaking.connect(user).stakeTokens(100000000, 365);
      await time.latest();
      const currentUserToken = await usdtToken.balanceOf(user.address);

      await time.increase(365 * 24 * 60 * 60);
      await time.latest();
      await expect(ABDSStaking.connect(user).Claim(1)).to.be.revertedWith(
        "Insufficient USDT balance"
      );
    });

    it("Should revert if too big reward(usdc)", async function () {
      mockPriceOracle.setABDSPriceInUSDC(ethers.parseUnits("1.5", 18));
      ABDSStaking.connect(user).stakeTokens(100000000, 365);
      await time.latest();
      const currentUserToken = await usdcToken.balanceOf(user.address);

      await time.increase(365 * 24 * 60 * 60);
      await time.latest();
      await expect(ABDSStaking.connect(user).Claim(2)).to.be.revertedWith(
        "Insufficient USDC balance"
      );
    });
  });

  describe("Withdraw Stake amount ", function () {
    beforeEach(async function () {
      const mintAmount = 1000000; // 1000 tokens
      await abdsToken.mint(ABDSStaking.getAddress(), mintAmount);
      await usdtToken.mint(ABDSStaking.getAddress(), mintAmount);
      await usdcToken.mint(ABDSStaking.getAddress(), mintAmount);

      await abdsToken
        .connect(user)
        .approve(ABDSStaking.getAddress(), 10000000000000);
      await usdtToken
        .connect(user)
        .approve(ABDSStaking.getAddress(), 10000000000000);
      await usdcToken
        .connect(user)
        .approve(ABDSStaking.getAddress(), 10000000000000);
    });

    it("Should revert on lock time", async function () {
      ABDSStaking.connect(user).stakeTokens(1000, 365);
      await time.latest();
      const currentUserToken = await abdsToken.balanceOf(user.address);
      await expect(ABDSStaking.connect(user).withdraw()).to.be.revertedWith(
        "No unlocked stakes to withdraw"
      );
    });
  });

  describe("Withdraw Reward reverted of not enough token", function () {
    beforeEach(async function () {
      await abdsToken
        .connect(user)
        .approve(ABDSStaking.getAddress(), 10000000000000);
      await usdtToken
        .connect(user)
        .approve(ABDSStaking.getAddress(), 10000000000000);
      await usdcToken
        .connect(user)
        .approve(ABDSStaking.getAddress(), 10000000000000);
      await abdsToken
        .connect(hacker)
        .approve(ABDSStaking.getAddress(), 10000000000000);
    });

    it("Should revert on not enough money", async function () {
      ABDSStaking.connect(hacker).stakeTokens(5000, 365);
      ABDSStaking.connect(user).stakeTokens(1000, 365);

      await time.increase(368 * 24 * 60 * 60);
      await time.latest();

      await ABDSStaking.connect(hacker).withdraw();
      await expect(ABDSStaking.connect(user).withdraw()).to.be.revertedWith(
        "Insufficient ABDS balance"
      );
    });
  });
});
