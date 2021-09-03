const Storage = artifacts.require("Storage");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Storage);
};