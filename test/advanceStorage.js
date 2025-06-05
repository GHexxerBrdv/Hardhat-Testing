const { assert } = require("chai");
const { assertArgument } = require("ethers");
const { ethers } = require("hardhat");

describe("Advance Storage Test", () => {
    let storage;
    beforeEach(async () => {
        storage = await ethers.deployContract("AdvanceStorage");
    })

    it("construction", async () => {
        assert(storage.target !== '');
        console.log("the address of the contract: ", storage.target);
    })

    it("all", async () => {
        await storage.add(1);
        await storage.add(2);
        await storage.add(3);
        await storage.add(4);
        await storage.add(5);
        await storage.add(6);
        const data = await storage.get(0);
        assert.equal(data, 1);

        const length = await storage.getLength();
        assert.equal(length, 6);
    })

})