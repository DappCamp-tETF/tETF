const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("treasurer", () => {
    let account1, owner, treasury;

    beforeEach(async () => {
        const accounts = await ethers.getSigners();

        const owner = accounts[0];
        const account1 = accounts[1];

		//@dev add testing for tETF token balances once we link with FundManager
		//const Token = await ethers.getContractFactory("Token");
		//const tETFToken = await Token.deploy();
		//const ownerBalance = await tETFToken.balanceOf(owner.address);
		
        const Treasury = await ethers.getContractFactory("treasurer");
        treasury = await Treasury.deploy();
		const ownerBalance = await treasury(owner.address);
    });

	describe("deposit", function () {
        it("Should send ether to the contract and update the account balance mapping", async function () {
            await expect(
                treasury.deposit(account1, 100)
            ).to.be.revertedWith("SafeERC20: ERC20 operation did not succeed");
        });
		it("should revert when not called by an owner", async function () {
			await expect(
				treasury.connect(account1).add()
			).to.be.revertedWith("Not an owner");
		});

		it("should revert when invalid animal is provided", async function () {
			await expect(
				petPark.connect(owner).add(AnimalType.None, 5)
			).to.be.revertedWith("Invalid animal");
		});

		it("should emit added event when pet is added", async function () {
			await expect(petPark.connect(owner).add(AnimalType.Fish, 5))
				.to.emit(petPark, "Added")
				.withArgs(AnimalType.Fish, 5);
		});
	});

});