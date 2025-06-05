const { expect } = require("chai");
const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("functions testing", () => {
    let functions, signer;
    beforeEach(async () => {
        [signer] = await ethers.getSigners();

        functions = await ethers.deployContract("functionContract");

    })

    it("construction", async () => {
        assert(functions.target !== '');

        console.log("the address of the contract :", functions.target);
    })

    it("all", async () => {

        const c = await functions.pubFunction();
        assert.equal(c, 40);

        const estimateGas = await functions.pubFunction.estimateGas();

        // await expect(functions.pubFunction({gasLimit: estimateGas/2n })).to.be.reverted;

        const value = await ethers.parseUnits("10", "wei");
        const result = await functions.payableFunction.staticCall({ value });
        assert.equal(result, value);

        await expect(
            functions.payableFunction({ value: ethers.parseUnits("1", "wei") })
        ).to.be.revertedWith("send more eth");


        const tx = await signer.sendTransaction({
            to: functions.target,
            data: "0x12345678", 
            value: 0,
        });

        const receipt = await tx.wait();
        expect(receipt.status).to.equal(1);
    })
})