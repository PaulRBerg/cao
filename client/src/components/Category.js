import React from 'react';
import { Container, Text, Button } from '@hackclub/design-system';

import SetProtocol from 'setprotocol.js';
import BigNumber from 'bignumber.js';

import Footer from './Footer';
import bus from '../bus';

import '../App.css';
import tokens from '../tokens.js';
import { config, gas, gasPrice } from '../constants';

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
      web3: injectedWeb3,
      tokensWithSelectedState: tokens.map(item => {
        return {
          ...item,
          selected: false
        };
      })
    };

    this.onCreateSet = this.onCreateSet.bind(this);
    this.onApproveSpending = this.onApproveSpending.bind(this);
    this.getAccount = this.getAccount.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state.tokensWithSelectedState[0].selected = true;

    bus.trigger('hello');
  }

  async onCreateSet() {
    const { setProtocol } = this.state;

    const naturalUnit = new BigNumber(10);
    const name = 'Stable Set';
    const symbol = 'SBST';
    const account = this.getAccount();
    const txOpts = {
      from: account,
      gas: gas,
      gasPrice: gasPrice
    };

    let theTokens = this.state.tokensWithSelectedState
      .filter(item => item.selected)
      .map(item => item.address);

    const txHash = await setProtocol.createSetAsync(
      theTokens,
      theTokens.map(item => new BigNumber(1)),
      naturalUnit,
      name,
      symbol,
      txOpts
    );

    const setAddress = await setProtocol.getSetAddressFromCreateTxHashAsync(
      txHash
    );

    bus.tokens = this.state.tokensWithSelectedState.filter(
      item => item.selected
    );

    bus.name = this.state.input;
    bus.setAddress = setAddress;
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
    approveTokensForTransfer(
      this.state.tokensWithSelectedState
        .filter(item => item.selected)
        .map(item => item.address)
    );
  }

  getAccount() {
    const { web3 } = this.state;
    if (web3.eth.accounts[0]) return web3.eth.accounts[0];
    throw new Error('Your MetaMask is locked. Unlock it to continue.');
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
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
            <input placeholder="Enter name ..." onChange={this.handleChange} />
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
        {this.state.tokensWithSelectedState.map((foo, index) => (
          <div
            className="Category"
            key={index}
            onClick={() => {
              console.log(index);

              let newState = this.state.tokensWithSelectedState;
              newState[index].selected = !foo.selected;
              this.setState({
                tokensWithSelectedState: newState
              });
            }}
          >
            <span
              className="emoji"
              aria-label={foo.name}
              role="img"
              style={{
                background: foo.selected ? '#efefef' : '#fff'
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
