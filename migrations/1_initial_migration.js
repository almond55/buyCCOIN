const KYO = artifacts.require("KyoCoin");
const BUSD = artifacts.require("BusdCoin");
const KyotoSwap = artifacts.require("KyotoSwap");

module.exports = async function (deployer){
  await deployer.deploy(KYO);
  await deployer.deploy(BUSD);
  const busd = await BUSD.deployed();
  const kyo = await KYO.deployed();
  await deployer.deploy(KyotoSwap, busd.address, kyo.address);
};
