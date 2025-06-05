const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("enum test", () => {
    let Enum, signer;
    beforeEach(async () => {
        [signer] = await ethers.getSigners();

        Enum = await ethers.deployContract("enumContract");

    })

    it("construction", async () => {
        assert(Enum.target !== '');
        console.log("the address of the contract: ", Enum.target);
    })

    it("get enum", async () => {
        const choise = await Enum.RSVP();
        assert.equal(choise, 2);
    })

    it("change enum", async () => {
        await Enum.changeEnum(1);
        const choise = await Enum.RSVP();
        assert.equal(choise, 1);
    })
})