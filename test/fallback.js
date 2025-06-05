const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

describe("fallback test", () => {
    let fallback, signer;
    beforeEach(async () => {
        [signer] = await ethers.getSigners();

        fallback = await ethers.deployContract("Fallback");
    })

    it("construction", async () => {
        assert(fallback.target !== "");

        console.log("the address of the contract :", fallback.target);
    })

    it("test event", async () => {
        await expect(signer.sendTransaction({
            to: fallback.target,
            value: ethers.parseEther("1.0")
        })).to.emit(fallback, "Log").withArgs("fallback called");
    })
})