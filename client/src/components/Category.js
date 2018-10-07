import React from 'react';
import { Container, Text, Button } from '@hackclub/design-system';

import SetProtocol from 'setprotocol.js';
import BigNumber from 'bignumber.js';

import Footer from './Footer';

import '../App.css';
import tokens from '../tokens.js';

// Kovan configuration
const config = {
  coreAddress: '0xdd7d1deb82a64af0a6265951895faf48fc78ddfc',
  setTokenFactoryAddress: '0x7497d12488ee035f5d30ec716bbf41735554e3b1',
  transferProxyAddress: '0xa0929aba843ff1a1af4451e52d26f7dde3d40f82',
  vaultAddress: '0x76aae6f20658f763bd58f5af028f925e7c5319af'
};
const gas = 2000000;
const gasPrice = 10000000000;

// Hardcoded items
const earthquakeItems = [
  tokens[0].address, // banana
  tokens[1].address, // water
  tokens[2].address, // canned food
  tokens[5].address, // sleeping bag
  tokens[7].address // fire
];

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

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
      createdSetLink: '',
      setAddress: '',
      setProtocol,
      web3: injectedWeb3
    };

    this.onCreateSet = this.onCreateSet.bind(this);
    this.onApproveSpending = this.onApproveSpending.bind(this);
    this.onIssueSet = this.onIssueSet.bind(this);
    this.onSendSet = this.onSendSet.bind(this);
    this.onRedeemSet = this.onRedeemSet.bind(this);
    this.getAccount = this.getAccount.bind(this);

    console.log(earthquakeItems);
  }

  async onCreateSet() {
    const { setProtocol } = this.state;

    const componentUnits = [
      new BigNumber(1),
      new BigNumber(1),
      new BigNumber(1),
      new BigNumber(1),
      new BigNumber(1)
    ];
    const naturalUnit = new BigNumber(10);
    const name = 'Stable Set';
    const symbol = 'SBST';
    const account = this.getAccount();
    const txOpts = {
      from: account,
      gas: gas,
      gasPrice: gasPrice
    };

    const txHash = await setProtocol.createSetAsync(
      earthquakeItems,
      componentUnits,
      naturalUnit,
      name,
      symbol,
      txOpts
    );
    const setAddress = await setProtocol.getSetAddressFromCreateTxHashAsync(
      txHash
    );
    console.log('setAddress', setAddress);
    this.setState({
      createdSetLink: `https://kovan.etherscan.io/address/${setAddress}`,
      setAddress: setAddress
    });
  }

  async onApproveSpending() {
    const { setProtocol } = this.state;

    /**
     * Approve all component tokens for transfer to the Set Protocol contracts
     */
    const approveTokensForTransfer = tokenAddresses => {
      tokenAddresses.forEach(async function(address) {
        await setProtocol.setUnlimitedTransferProxyAllowanceAsync(address, {
          gas: 60000,
          gasPrice: 6000000000
        });
      });
    };

    console.log('approved successfully');
    approveTokensForTransfer(earthquakeItems);
  }

  async onIssueSet() {
    const { setProtocol, setAddress } = this.state;

    // Issue 1x Set which equals 10 ** 18 base units.
    const issueQuantity = new BigNumber(10 ** 18);

    // Check that our issue quantity is divisible by the natural unit.
    const isMultipleOfNaturalUnit = await setProtocol.setToken.isMultipleOfNaturalUnitAsync(
      setAddress,
      issueQuantity
    );

    if (!isMultipleOfNaturalUnit) {
      throw new Error(
        `Issue quantity is not multiple of natural unit. Confirm that your issue quantity is divisible by the natural unit.`
      );
    }

    let issueTxHash;
    try {
      issueTxHash = await setProtocol.issueAsync(setAddress, issueQuantity, {
        from: this.getAccount(),
        gas: gas,
        gasPrice: gasPrice
      });
    } catch (err) {
      throw new Error(`Error when issuing a new Set token: ${err}`);
    }

    console.log('issueTxHash', issueTxHash);
  }

  async onSendSet() {}

  async onRedeemSet() {
    const { setProtocol, setAddress } = this.state;
    const quantity = new BigNumber(10 ** 18);
    const withdraw = true;
    const tokensToExclude = [];
    const txOpts = {
      from: this.getAccount(),
      gas: gas,
      gasPrice: gasPrice
    };

    let redeemTxHash;
    try {
      redeemTxHash = await setProtocol.redeemAsync(
        setAddress,
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

  render() {
    const { createdSetLink } = this.state;

    const pWeStyle = {
      marginTop: '100px',
      marginBottom: '40px',
      position: 'relative',
      fontFamily: 'Avenir',
      fontSize: '2.8rem',
      fontWeight: '900',
      alignItems: 'center',
      textAlign: 'left',
      lineHeight: '1.2',
      color: 'black'
    };

    const ButtonStyle = {
      fontWeight: '500',
      fontSize: '15px',
      textAlign: 'center',
      padding: '13px',
      borderRadius: '4px',
      backgroundColor: 'black',
      color: 'white',
      width: '117px',
      transition: 'all 0.3s ease 0s',
      float: 'right',
      marginLeft: '10px'
    };

    return (
      <Container>
        <Text style={pWeStyle}>
          <span className="underline">Select items for </span>
          <br />
          <span className="underline">the new category</span>
        </Text>
        <div className="Search">
          <form>
            <input placeholder="Enter name ..." />
          </form>
          <Button onClick={this.onCreateSet} style={ButtonStyle}>
            Create
          </Button>
          <Button onClick={this.onApproveSpending} style={ButtonStyle}>
            Approve
          </Button>
          <Button onClick={this.onIssueSet} style={ButtonStyle}>
            Issue
          </Button>
          {/*<Button onClick={this.onSendSet} style={ButtonStyle}>*/}
          {/*Send*/}
          {/*</Button>*/}
          <Button onClick={this.onRedeemSet} style={ButtonStyle}>
            Redeem
          </Button>
          {createdSetLink
            ? this.renderEtherScanLink(createdSetLink, 'Link to your new set')
            : null}
        </div>
        <React.Fragment />
        {tokens.map((foo, index) => (
          <div className="Category" key={index}>
            <span
              className="emoji"
              aria-label={foo.name}
              role="img"
              style={{
                background: [0, 1, 2, 5, 7].includes(index) ? '#efefef' : '#fff'
              }}
            >
              {foo.symbol}
            </span>
          </div>
        ))}
        <Footer />
      </Container>
    );
  }

  renderEtherScanLink(link, content) {
    return (
      <div
        className="App-button-container"
        style={{ marginLeft: '10px', fontSize: '15px' }}
      >
        <a target="_blank" rel="noopener" href={link}>
          {content}
        </a>
      </div>
    );
  }
}
