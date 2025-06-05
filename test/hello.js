const { assert } = require("chai");
const { assertArgument } = require("ethers");
const { ethers } = require("hardhat");

describe("hello world test", () => {
    let hello;
    beforeEach(async () => {
        hello = await ethers.deployContract("HelloWorld");
    })

    it("construction", async () => {
        assert(hello.target !== '');

        console.log("the address of the contract :", hello.target);
    })

    it("all", async () => {
        const result = await hello.hello();

        assert.equal(result, "Hello World");
    })
})