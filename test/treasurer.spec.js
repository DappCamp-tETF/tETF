const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("treasurer", () => {
    let account1, owner, treasury;

    beforeEach(async () => {
        const accounts = await ethers.getSigners();

        owner = accounts[0];
        account1 = accounts[1];

		//@dev add testing for tETF token balances once we link with FundManager
		//const Token = await ethers.getContractFactory("Token");
		//const tETFToken = await Token.deploy();
		//const ownerBalance = await tETFToken.balanceOf(owner.address);
		
        const Treasury = await ethers.getContractFactory("treasurer");
        treasury = await Treasury.deploy({ gasLimit: 30000000 });

		await treasury.deployed();

    });
	// describe("firsttest", function () {

	// })

	describe("deposit", function () {
        it("Should send usdc to the contract when user deposits", async function () {
            await expect(
				//treasury.deposit(owner,100)
                treasury.connect(account1).deposit(150000)
            ).to.emit(treasury,"Deposit");
        });
		// it("should revert when not called by an owner", async function () {
		// 	await expect(
		// 		treasury.connect(account1).withdraw(100)
		// 	).to.be.revertedWith("Not an owner");
		// });

	});

	// describe("withdraw", function() {
	// 	it("should return funds to the user when they withdraw a valid value", async function () {
    //         await expect(
	// 			treasury.withdraw(100)
    //         ).to.emit(treasury,"Withdraw");
    //     });
	// });

	describe("getBalances", function() {
		it("Should update account balance when funds are deposited", async function () {
            await expect(
                treasury.getBalances()
            ).to.emit(treasury,"Balances");
        });
	});
});

