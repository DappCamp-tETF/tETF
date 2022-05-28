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
		
    });

	describe("deposit", function () {
        it("Should send usdc to the contract when user deposits", async function () {
            await expect(
				treasury.deposit(owner,100)
                //treasury.connect(account1).deposit(account1,100);
            ).to.emit(treasury,"Deposit");
        });
		it("should revert when not called by an owner", async function () {
			await expect(
				treasury.connect(account1).withdraw(100)
			).to.be.revertedWith("Not an owner");
		});


		it("should emit added event when pet is added", async function () {
			await expect(petPark.connect(owner).add(AnimalType.Fish, 5))
				.to.emit(petPark, "Added")
				.withArgs(AnimalType.Fish, 5);
		});
	});

	describe("withdrawUSDC", function() {
		it("should return funds to the user when they withdraw a valid value", async function () {
            await expect(
				treasury.withdrawUSDC(owner,100)
            ).to.emit(treasury,"Withdraw");
        });
	});

	describe("getBalances", function() {
		it("should update account balance when funds deposited", async function () {
            await expect(
				treasury
					.getBalances(account1)

                //treasury.connect(account1).deposit(account1,100);
            ).to.emit(0,0);
        });
	});
});
