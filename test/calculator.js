const { assert } = require("chai");
const { MaxUint256 } = require("ethers");
const { ethers } = require("hardhat");

describe("Calculator test", () => {
    let calc, signer;
    beforeEach(async () => {
        [signer] = await ethers.getSigners();

        const deployment = await hre.ignition.deploy(require("../ignition/modules/calculator"));

        calc = deployment.calc;
    })

    it("Verify that deployment has been done properly", async () => {
        assert(calc.target !== '');
        console.log("the address of contract: ", calc.target);
    })

    it("set a and b", async () => {
        await calc.set(3, 7);
        const a = await calc.a();
        const b = await calc.b();

        assert.equal(a.toString(), "3");
        assert.equal(b.toString(), "7");
    })

    it("add operation", async () => {
        await calc.set(3, 7);
        
        const add = await calc.add();
        assert.equal(add, 10);
    })

    it("all", async () => {
        await calc.set(3, 3);
        
        const add = await calc.add();
        console.log("add :", add);

        const sub = await calc.sub();
        console.log("sub :", sub);

        const div = await calc.div();
        console.log("div :", div);

        const mul = await calc.mul();
        console.log("mul :", mul);

        await calc.setAToMax();
        const a = await calc.a();
        assert.equal(a, MaxUint256);
    })

})