const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AdvanceStorageModule", (m) => {

  const storage = m.contract("AdvanceStorage", []);

  return { storage };
});