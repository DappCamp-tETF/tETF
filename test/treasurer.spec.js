const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("treasurer", () => {
    let account1, owner, treasury;

    beforeEach(async () => {
        const accounts = await ethers.getSigners();

        owner = accounts[0];
        account1 = accounts[1];

        const Treasury = await ethers.getContractFactory("treasurer");
        treasury = await Treasury.deploy();
    });

	describe("deposit", function () {
        it("Should send ether to the contract and update the account balance mapping", async function () {
            await expect(
                const provider = waffle.provider;

                provider.getBalance(treasury.address)).to.equal(0);
            )
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