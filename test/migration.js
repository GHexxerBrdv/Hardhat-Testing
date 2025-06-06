const { expect } = require("chai");
const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("test migration", () => {
    let migration, migrationFactory, signer, account;

    beforeEach(async () => {
        [signer, account] = await ethers.getSigners();

        migrationFactory = await ethers.getContractFactory("Migrations");

        migration = await migrationFactory.deploy();
    })

    it("construction", async () => {
        assert(migration.target !== '');
        console.log("the contract address is :", migration.target);
        assert.equal(await migration.owner(), signer.address);
        assert.equal(await migration.last_completed_migration(), 0);
    })

    it("Test owner can set", async () => {
        await migration.connect(signer).setCompleted(14);
        assert.equal(await migration.last_completed_migration(), 14);
    })

    it("Test non owner can set", async () => {
        await expect(migration.connect(account).setCompleted(14)).to.be.rejectedWith("This function is restricted to the contract's owner");
        assert.equal(await migration.last_completed_migration(), 0);
    })
})