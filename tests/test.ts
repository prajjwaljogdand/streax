const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");
import {parseEther} from 'ethers/lib/utils';


describe("STRX token contract", function () {
  async function deployTokenFixture() {
    const Token = await ethers.getContractFactory("STRX");
    const [owner, addr1, addr2] = await ethers.getSigners();
    console.log("OWNER : ",owner.address)
    console.log("ADD1 : ",addr1.address)
    const hardhatToken = await Token.deploy(owner.address);
    await hardhatToken.deployed();

    // Fixtures can return anything you consider useful for your tests
    return { Token, hardhatToken, owner, addr1, addr2 };
  }

  it("Should MINT given amount of tokens and grant it to address", async function () {
    const { hardhatToken, owner} = await loadFixture(deployTokenFixture);
     await hardhatToken.mint(owner.address,"10000000000000000000");
     const balance = await hardhatToken.balanceOf(owner.address)
    expect((await hardhatToken.totalSupply()).toString()).to.equal(balance.toString())
  });

  it("Should Transfer given amount of tokens to given address", async function () {
    const { hardhatToken,owner, addr1} = await loadFixture(deployTokenFixture);
     await hardhatToken.mint(owner.address,"10000000000000000000");
     const t = await hardhatToken.transfer(addr1.address,"1000000000000000000");
     await t.wait()
     const balance = await hardhatToken.balanceOf(owner.address)
     expect((await hardhatToken.balanceOf(addr1.address)).toString()).to.equal("1000000000000000000")
  });

});