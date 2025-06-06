const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

describe("structure test", () => {
    let contract;
    beforeEach(async () => {
        contract = await ethers.deployContract("structContract");
    });

    it("construction", async () => {
        assert(contract.target !== '');
        console.log("the contract address is :", contract.target);


        const student = await contract.structExample();

        expect(student.registration_id).to.equal(19);
        expect(student.name).to.equal("viraj");
    })

    it("should create a new Todo", async function () {
        await contract.create("Learn Hardhat");
        const todo = await contract.todos(0);
        expect(todo.text).to.equal("Learn Hardhat");
        expect(todo.completed).to.be.false;
    });

    it("should add a car to the CarMapping", async function () {
        await contract.addCar(1, "Tesla", 250);
        const car = await contract.CarMapping(1);
        expect(car.name).to.equal("Tesla");
        expect(car.maxSpeed).to.equal(250);
    });

    it("should add multiple cars to CarMappingArr", async function () {
        await contract.addCarToMOSA(1, "BMW", 220);
        await contract.addCarToMOSA(1, "Audi", 240);

        const car1 = await contract.CarMappingArr(1, 0);
        const car2 = await contract.CarMappingArr(1, 1);

        expect(car1.name).to.equal("BMW");
        expect(car1.maxSpeed).to.equal(220);
        expect(car2.name).to.equal("Audi");
        expect(car2.maxSpeed).to.equal(240);
    });

})