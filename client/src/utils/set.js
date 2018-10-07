import SetProtocol from 'setprotocol.js';
import BigNumber from 'bignumber.js';

const getWeb3 = require('./getWeb3');

let setProtocol;

// Kovan Config
const config = {
  coreAddress: '0xdd7d1deb82a64af0a6265951895faf48fc78ddfc',
  setTokenFactoryAddress: '0x7497d12488ee035f5d30ec716bbf41735554e3b1',
  transferProxyAddress: '0xa0929aba843ff1a1af4451e52d26f7dde3d40f82',
  vaultAddress: '0x76aae6f20658f763bd58f5af028f925e7c5319af',
  rebalancingSetTokenFactoryAddress:
    '0xc1be2c0bb387aa13d5019a9c518e8bc93cb53360'
};

const createSet = async componentAddresses => {
  const web3 = await getWeb3();
  const setProtocol = new SetProtocol(web3.currentProvider, config);

  const length = componentAddresses.length;

  let componentUnits = [];
  for (let i = 0; i < length; i++) {
    componentUnits.push(new BigNumber(1 / length));
  }

  const naturalUnit = new BigNumber(length);
  const name = 'Charity Set';
  const symbol = 'CHST';
  const txOpts = {
    from: web3.eth.accounts[0],
    gas: 4000000,
    gasPrice: 8000000000
  };

  const txHash = await setProtocol.createSetAsync(
    componentAddresses,
    componentUnits,
    naturalUnit,
    name,
    symbol,
    txOpts
  );
  const setAddress = await setProtocol.getSetAddressFromCreateTxHashAsync(
    txHash
  );
  console.log(setAddress);
};

const burnSet = address => {};

module.exports = {
  createSet,
  burnSet
};
