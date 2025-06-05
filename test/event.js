const { expect } = require("chai");
const { assert } = require("chai");
const { ethers } = require("hardhat")

describe("event test", () => {
    let event;

    beforeEach(async () => {
        event = await ethers.deployContract("eventContract");
        await event.waitForDeployment();
    });

    it("construction", async () => {
        assert(event.target !== '');
        console.log("the address of the contract : ", event.target)
    })

    it("emit event test", async () => {
        await expect(event.callEvent("Okokok")).to.emit(event, "functionCalled").withArgs(await getBlockTimestamp(), "Okokok");
    })
})

async function getBlockTimestamp() {
  const blockNum = await ethers.provider.getBlockNumber();
  const block = await ethers.
  provider.getBlock(blockNum);
  return block.timestamp + 1;
}