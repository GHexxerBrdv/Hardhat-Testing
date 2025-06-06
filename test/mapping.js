const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("Mapping test", () => {
    let mapping, signer, account1;
    beforeEach(async () => {
        [signer, account1] = await ethers.getSigners();
        mapping = await ethers.deployContract("mappingContract");
    })

    it("construction", async () => {
        assert(mapping.target !== '');
        console.log("the address if the contract :", mapping.target);
    })

    it("set element", async () => {
        await mapping.setElement(14);
        const element = await mapping.normalMapping(signer);
        assert.equal(element, 14);
    })

    it("set element nested mapping", async ()=> {
        await mapping.connect(account1).setElementNestedMapping(14,true);
        const element = await mapping.nestedMapping(14, account1);
        assert.equal(element, true);
    })

    it("set element double nested mapping", async ()=> {
        await mapping.connect(account1).setElementinDoubleNestedMapping(14,signer, account1, "Anonymous user");
        const element = await mapping.doubleNestedMapping(14, signer, account1);
        assert.equal(element, "Anonymous user");
    })
})