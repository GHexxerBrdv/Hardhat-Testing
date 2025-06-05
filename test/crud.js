const { expect } = require("chai");
const { assert } = require("chai");
const { ethers } = require("hardhat")

describe("crud", () => {
  let crud, signer;

  beforeEach(async () => {
    
    [signer] = await ethers.getSigners();

    crud = await ethers.deployContract("Curd");
    // await crud.waitForDeployment();
  })

  it("deploy smart contract properly", async () => {
    assert(crud.target !== '');
    console.log("Smart contract address: ", crud.target);
  })

  it("check next id", async () => {
    const id = await crud.nextId();
    console.log("next id is: ", id.toString());
    assert.equal(id.toString(), '1');
  })
  it("create", async () => {
    await crud.create("AnonymousUser");
    const id = await crud.nextId();
    console.log("next id is: ", id.toString());
    assert.equal(id.toString(), '2');
    const [Id, Name] = await crud.read(1);
    // console.log("name of user: ", Name);
    assert.equal(Name, "AnonymousUser");
    assert.equal(Id.toString(), "1");
  })

  it("Creating second user", async () => {
    await crud.create("Gaurang");
    const id = await crud.nextId();
    assert.equal(id.toString() , '2');

    await crud.create("brdv");
    const id1 = await crud.nextId();
    assert.equal(id1.toString() , '3');
  })

  it("updating user", async () => {
    await crud.create("Gaurang");
    const [,name1] = await crud.read(1);
    assert.equal(name1, "Gaurang");
    await crud.update(1, "brdv");
    const [,name2] = await crud.read(1);
    assert.equal(name2, "brdv");

  })

  it("destroy user", async () => {
    await crud.create("Gaurang");
    const id = await crud.nextId();
    assert.equal(id.toString() , '2');

    await crud.create("brdv");
    const id1 = await crud.nextId();
    assert.equal(id1.toString() , '3');

    await crud.destroy(2);
    
    expect(crud.read(2)).to.be.revertedWith('User does not exist');
  })
})