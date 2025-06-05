const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("EnumModule", (m) => {

  const Enum = m.contract("CurenumContractd", [] );

  return { Enum };
});