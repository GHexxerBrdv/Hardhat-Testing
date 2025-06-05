const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CalculatorModule", (m) => {

  const calc = m.contract("Calculator", [] );

  return { calc };
});
