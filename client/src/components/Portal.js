import React from 'react';
import {
  Container,
  Text,
  Flex,
  Image,
  Button,
  Link
} from '@hackclub/design-system';

import SetProtocol from 'setprotocol.js';
import BigNumber from 'bignumber.js';
import Footer from './Footer';

import { config, gas, gasPrice } from '../constants';

import '../App.css';
import bus from '../bus';

export default class Portal extends React.Component {
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
      selectedTokens: [],
      newCategoryName: '',
      setProtocol,
      web3: injectedWeb3,
      category: []
    };

    console.log('test ~ ' + bus.hello);

    this.onRedeemSet = this.onRedeemSet.bind(this);
    this.onIssueSet = this.onIssueSet.bind(this);
  }

  componentDidMount() {
    this.setState({ category: 'true' });
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

  render() {
    const { category } = this.state;
    console.log(category);

    const pWeStyle = {
      marginTop: '50px',
      marginBottom: '50px',
      position: 'relative',
      fontFamily: 'Avenir',
      fontSize: '2.8rem',
      fontWeight: '900',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      lineHeight: '1.2'
    };

    const imageStyle = {
      width: '730px',
      height: '435px',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    };

    const CreateCustomImageStyle = {
      width: '730px',
      height: '278px',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    };

    const ButtonStyle = {
      fontWeight: '500',
      fontSize: '15px',
      textAlign: 'center',
      padding: '15px',
      borderRadius: '4px',
      backgroundColor: 'black',
      color: 'white',
      width: '165px',
      transition: 'all 0.3s ease 0s'
    };

    const centerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    const NoCategoryStyle = {
      position: 'absolute',
      fontSize: '1.2em',
      fontWeight: '400',
      top: '60px'
    };

    return (
      <Container>
        <Text style={pWeStyle}>
          <span className="underline">Right now, the CAO has</span>
          <br />
          <span className="underline">$3,141,592 to allocate</span>
        </Text>
        <Container px={3} pb={20} style={{ marginTop: '40px' }}>
          {this.state.newCategoryName ? (
            <Flex mx={[1, 2]} wrap justify="center">
              <Image
                Responsive
                src={require('../assets/images/table.png')}
                alt="table"
                style={imageStyle}
              />
              <table>
                <thead>
                  <tr>
                    <th>Bundle</th>
                    <th>Percent Allocation</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.newCategoryName}</td>
                    <td>100%</td>
                    <td>$3,141,592</td>
                  </tr>
                </tbody>
              </table>
            </Flex>
          ) : (
            <Flex mx={[1, 2]} wrap justify="center">
              <Image
                Responsive
                src={require('../assets/images/table.png')}
                alt="table"
                style={CreateCustomImageStyle}
              />
              <table>
                <tr>
                  <th>Bundle</th>
                  <th>Percent Allocation</th>
                  <th>Price</th>
                </tr>
                <p style={NoCategoryStyle}>No categories created.</p>
                <div className="CreateCustom">
                  <Image
                    Responsive
                    src={require('../assets/images/create-custom-category.png')}
                    alt="create-custom-category"
                    style={{ weight: '55px', height: '55px', float: 'left' }}
                  />
                  <p style={{ float: 'right', paddingLeft: '3px' }}>
                    <Link href="/category">Create custom category</Link>
                  </p>
                </div>
              </table>
            </Flex>
          )}
        </Container>
        <div style={centerStyle}>
          <Button style={ButtonStyle} onClick={() => this.onIssueSet()}>
            Allocate Resources
          </Button>
        </div>
        <Footer />
      </Container>
    );
  }
}
