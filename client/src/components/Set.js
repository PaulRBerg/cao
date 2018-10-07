import React, { Component } from 'react';
import { Button } from '@hackclub/design-system';

import SetProtocol from 'setprotocol.js';
import BigNumber from 'bignumber.js';

// Kovan configuration
const config = {
  coreAddress: '0xdd7d1deb82a64af0a6265951895faf48fc78ddfc',
  setTokenFactoryAddress: '0x7497d12488ee035f5d30ec716bbf41735554e3b1',
  transferProxyAddress: '0xa0929aba843ff1a1af4451e52d26f7dde3d40f82',
  vaultAddress: '0x76aae6f20658f763bd58f5af028f925e7c5319af'
};
const daiAddress = '0x1d82471142f0aeeec9fc375fc975629056c26cee';
const trueUsdAddress = '0xadb015d61f4beb2a712d237d9d4c5b75bafefd7b';

class App extends Component {
  constructor() {
    super();
    const injectedWeb3 = window.web3 || undefined;
    let setProtocol;
    try {
      // Use MetaMask/Mist provider
      const provider = injectedWeb3.currentProvider;
      setProtocol = new SetProtocol(provider, config);
    } catch (err) {
      // Throws when user doesn't have MetaMask/Mist running
      throw new Error(
        `No injected web3 found when initializing setProtocol: ${err}`
      );
    }

    this.state = {
      setProtocol,
      web3: injectedWeb3,
      // Etherscan Links
      createdSetLink:
        'https://kovan.etherscan.io/address/0x074a777081463d2c9e98dd88d78bbb2276cc89f1',
      stableSetAddress: '0x074a777081463d2c9e98dd88d78bbb2276cc89f1'
    };
    this.createSet = this.createSet.bind(this);
    this.approveAllowance = this.approveAllowance.bind(this);
    this.issueSet = this.issueSet.bind(this);
    this.redeemSet = this.redeemSet.bind(this);
    this.getAccount = this.getAccount.bind(this);
  }

  async createSet() {
    const { setProtocol } = this.state;

    /**
     * Steps to create your own Set Token
     * ----------------------------------
     *
     * 1. Fund your MetaMask wallet with Kovan ETH: https://gitter.im/kovan-testnet/faucet
     * 2. Modify your Set details below to your liking
     * 3. Click `Create My Set`
     */

    let array = ['address1', 'address2'];

    const componentAddresses = [daiAddress, trueUsdAddress];
    const componentUnits = [new BigNumber(5), new BigNumber(5)];
    const naturalUnit = new BigNumber(10);
    const name = 'Stable Set';
    const symbol = 'SBST';
    const account = this.getAccount();
    const txOpts = {
      from: account,
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
    this.setState({
      createdSetLink: `https://kovan.etherscan.io/address/${setAddress}`,
      stableSetAddress: setAddress
    });
  }

  async approveAllowance() {
    const { setProtocol } = this.state;

    /**
     * Approve all component tokens for transfer to the Set Protocol contracts
     */
    const approveTokensForTransfer = tokenAddresses => {
      tokenAddresses.forEach(async function(address) {
        await setProtocol.setUnlimitedTransferProxyAllowanceAsync(address, {
          gas: 30000,
          gasPrice: 6000000000
        });
      });
    };

    approveTokensForTransfer([daiAddress, trueUsdAddress]);
  }

  async issueSet() {
    const { setProtocol, stableSetAddress } = this.state;

    /**
     * Steps to Issue your Set Token
     * -----------------------------
     *
     * 1. Get TestNet TrueUSD and Dai
     *   - Navigate to the links below:
     *     - TrueUSD: https://kovan.etherscan.io/address/0xadb015d61f4beb2a712d237d9d4c5b75bafefd7b#writeContract
     *     - Dai:     https://kovan.etherscan.io/address/0x1d82471142f0aeeec9fc375fc975629056c26cee#writeContract
     *   - Click `Connect with MetaMask` link in the `Write Contract` tab. Click `OK` in the modal that shows up.
     *   - In the `greedIsGood` function, put in:
     *     - _to: Your MetaMask address
     *     - _value: 100000000000000000000000
     *   - Click the `Write` button
     *   - Confirm your MetaMask transaction
     *   - You now have TestNet tokens for TrueUSD/Dai.
     *   - Be sure to repeat the process for the other remaining TrueUSD/Dai token.
     */

    // Issue 1x StableSet which equals 10 ** 18 base units.
    const issueQuantity = new BigNumber(10 ** 18);

    // Check that our issue quantity is divisible by the natural unit.
    const isMultipleOfNaturalUnit = await setProtocol.setToken.isMultipleOfNaturalUnitAsync(
      stableSetAddress,
      issueQuantity
    );

    if (!isMultipleOfNaturalUnit) {
      throw new Error(
        `Issue quantity is not multiple of natural unit. Confirm that your issue quantity is divisible by the natural unit.`
      );
    }

    let issueTxHash;
    try {
      issueTxHash = await setProtocol.issueAsync(
        stableSetAddress,
        issueQuantity,
        {
          from: this.getAccount(),
          gas: 4000000,
          gasPrice: 8000000000
        }
      );
    } catch (err) {
      throw new Error(`Error when issuing a new Set token: ${err}`);
    }

    console.log('issueTxHash', issueTxHash);
  }

  async redeemSet() {
    const { setProtocol, stableSetAddress } = this.state;
    const quantity = new BigNumber(10 ** 18);
    const withdraw = true;
    const tokensToExclude = [];
    const txOpts = {
      from: this.getAccount(),
      gas: 4000000,
      gasPrice: 8000000000
    };

    let redeemTxHash;
    try {
      redeemTxHash = await setProtocol.redeemAsync(
        stableSetAddress,
        quantity,
        withdraw,
        tokensToExclude,
        txOpts
      );
    } catch (err) {
      throw new Error(`Error when redeeming a Set token: ${err}`);
    }
    console.log('redeemTxHash', redeemTxHash);
  }

  getAccount() {
    const { web3 } = this.state;
    if (web3.eth.accounts[0]) return web3.eth.accounts[0];
    throw new Error('Your MetaMask is locked. Unlock it to continue.');
  }

  renderEtherScanLink(link, content) {
    return (
      <div className="App-button-container">
        <a target="_blank" rel="noopener" href={link}>
          {content}
        </a>
      </div>
    );
  }

  render() {
    const { createdSetLink } = this.state;

    const ButtonStyle = {
      maxWidth: '300px',
      minWidth: '200px',
      padding: '18px',
      marginTop: '10px',
      marginBottom: '10px'
    };

    const DisabledButtonStyle = {
      maxWidth: '300px',
      minWidth: '200px',
      padding: '18px',
      marginTop: '10px',
      marginBottom: '10px',
      cursor: 'not-allowed'
    };

    return (
      <div className="App">
        <header>
          <h1 className="App-title">Set Boiler Plate</h1>
        </header>
        {createdSetLink
          ? this.renderEtherScanLink(createdSetLink, 'Link to your new Set')
          : null}
        <div>
          <Button onClick={this.createSet} style={ButtonStyle}>
            Create My Set
          </Button>
        </div>
        <div>
          <Button onClick={this.approveAllowance} style={ButtonStyle}>
            Approve Spending
          </Button>
        </div>
        <div>
          {createdSetLink ? (
            <Button onClick={this.issueSet} style={ButtonStyle}>
              Issue My Set Tokens
            </Button>
          ) : (
            <Button
              className="button-disabled"
              disabled
              style={DisabledButtonStyle}
            >
              Issue My Set Tokens
            </Button>
          )}
        </div>
        <div>
          {createdSetLink ? (
            <Button onClick={this.redeemSet} style={ButtonStyle}>
              Redeem My Set Tokens
            </Button>
          ) : (
            <Button
              className="button-disabled"
              disabled
              style={DisabledButtonStyle}
            >
              Redeem My Set Tokens
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
