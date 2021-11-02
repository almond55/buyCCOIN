const KyotoSwap = artifacts.require("KyotoSwap");

module.exports = async function (deployer){
  //testnet values, change with real one on live
  const kyoaddress = '0xaEBC9EbDd1CD6808b632aA675eA571EEddD0C5b4';
  const busdaddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
  await deployer.deploy(KyotoSwap, busdaddress, kyoaddress);
  const kyotoswap = await KyotoSwap.deployed()

  console.log('\nThe contract has been migrated to Binance Smart Chain\n\n')
  console.log(`If you've deployed contract on testnet, you can check it at:\nhttps://testnet.bscscan.com/address/${kyotoswap.address}\n`)
  console.log(`If you've deployed contract on mainnet, you can check it at:\nhttps://bscscan.com/address/${kyotoswap.address}`)
};
