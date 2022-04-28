const CarbonSwap = artifacts.require("CarbonSwap");

module.exports = async function (deployer){
  //testnet values, change with real one on live
  const ccoinaddress = '0x71b1E6b9e18519796Bdf204Ec4A54AB23b3BCd5b';
  const usdcaddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
  await deployer.deploy(CarbonSwap, usdcaddress, ccoinaddress);
  const carbonswap = await CarbonSwap.deployed()

  console.log('\nThe contract has been migrated to Polygon\n\n')
  console.log(`If you've deployed contract on testnet, you can check it at:\nhttps://testnet.polygonscan.com/address/${carbonswap.address}\n`)
  console.log(`If you've deployed contract on mainnet, you can check it at:\nhttps://polygonscan.com/address/${carbonswap.address}`)
};
