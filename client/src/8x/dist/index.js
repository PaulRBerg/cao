'use strict';

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var observable = _interopDefault(require('riot-observable'));
var reactCopyToClipboard = require('react-copy-to-clipboard');
var artifacts = require('@8xprotocol/artifacts');
var styled = _interopDefault(require('styled-components'));
var reactTransitionGroup = require('react-transition-group');
var isNil = _interopDefault(require('lodash/fp/isNil'));
var EightEx = _interopDefault(require('8x.js'));
var BigNumber = _interopDefault(require('bignumber.js'));

const img = require('./metamask.png');

const img$1 = require('./ledger.png');

const img$2 = require('./trezor.png');

const img$3 = require('./alert.png');

const img$4 = require('./wallet.png');

const img$5 = require('./key.png');

const img$6 = require('./netflix.png');

const img$7 = require('./spinner.png');

const img$8 = require('./eth.png');

const img$9 = require('./dropdown.png');

const img$a = require('./download-metamask.png');

const img$b = require('./dai.png');

const img$c = require('./check.png');

const img$d = require('./locked.png');

const img$e = require('./dai-confirm.png');

const img$f = require('./arrow.png');

const img$g = require('./coinbase.png');

// import abacusGreyLogo from '../assets/images/abacus-grey-logo.png';
var Images = {
  metamaskLogo: img,
  ledgerLogo: img$1,
  trezorLogo: img$2,
  alertLogo: img$3,
  walletImage: img$4,
  keyImage: img$5,
  netflixLogo: img$6,
  spinner: img$7,
  ethLogo: img$8,
  dropDown: img$9,
  downloadMetaMask: img$a,
  daiLogo: img$b,
  checkTick: img$c,
  lockPicture: img$d,
  daiConfirm: img$e,
  arrow: img$f,
  coinbase: img$g
};

/* Import statements */
/* App component */

class SelectWallet extends React__default.Component {
  render() {
    return React__default.createElement(
      'div',
      {
        className: 'background'
      },
      React__default.createElement(
        'div',
        {
          className: 'small-card'
        },
        React__default.createElement(
          'div',
          {
            className: 'main-card'
          },
          React__default.createElement(
            'div',
            {
              className: 'card-header'
            },
            React__default.createElement(
              'h1',
              null,
              'Where are your funds stored?'
            ),
            React__default.createElement('p', null, 'Please select an option')
          ),
          React__default.createElement(
            'div',
            {
              className: 'options-container'
            },
            React__default.createElement(
              reactRouterDom.Link,
              {
                to: '/metamask-handler'
              },
              React__default.createElement(
                'div',
                {
                  className: 'item metamask'
                },
                React__default.createElement(
                  'div',
                  {
                    className: 'logo'
                  },
                  React__default.createElement('img', {
                    src: Images.metamaskLogo
                  })
                ),
                React__default.createElement(
                  'div',
                  {
                    className: 'text'
                  },
                  React__default.createElement('h2', null, 'MetaMask'),
                  React__default.createElement(
                    'p',
                    null,
                    'MetaMask is a browser extension that allows you to store Ether and interact with decentralised apps.'
                  )
                )
              )
            ),
            React__default.createElement(
              'div',
              {
                className: 'item ledger'
              },
              React__default.createElement(
                'div',
                {
                  className: 'logo'
                },
                React__default.createElement('img', {
                  src: Images.coinbase
                })
              ),
              React__default.createElement(
                'div',
                {
                  className: 'text'
                },
                React__default.createElement('h2', null, 'Coinbase Wallet'),
                React__default.createElement(
                  'p',
                  null,
                  "Coinbase is the world's largest cryptocurrency exchange. If you have an account with them, click here."
                )
              )
            ),
            React__default.createElement(
              'div',
              {
                className: 'item trezor'
              },
              React__default.createElement(
                'div',
                {
                  className: 'logo'
                },
                React__default.createElement('img', {
                  src: Images.trezorLogo
                })
              ),
              React__default.createElement(
                'div',
                {
                  className: 'text'
                },
                React__default.createElement('h2', null, 'Trezor'),
                React__default.createElement('p', null, 'Coming soon...')
              )
            )
          )
        )
      )
    );
  }
}

/* Import statements */

class DropdownButton extends React__default.Component {
  render() {
    return React__default.createElement(
      'div',
      {
        className: 'container'
      },
      React__default.createElement(
        'button',
        {
          className: 'dropdown',
          onClick: () => this.props.action(this.props.item)
        },
        React__default.createElement(
          'div',
          {
            className: 'label'
          },
          React__default.createElement(
            'div',
            {
              className: 'left'
            },
            React__default.createElement('img', {
              className: 'logo',
              src: this.props.item.image
            }),
            React__default.createElement(
              'p',
              {
                className: 'coin-name'
              },
              this.props.item.name
            )
          ),
          React__default.createElement(
            'div',
            {
              className: 'right'
            },
            React__default.createElement(
              'p',
              {
                className: 'coin-ticker'
              },
              this.props.item.ticker
            ),
            this.props.showTriangle
              ? React__default.createElement('p', {
                  className: 'triangle'
                })
              : React__default.createElement('p', null)
          )
        )
      )
    );
  }
}

/* Import statements */
/* App component */

class Dropdown extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      items: this.props.items,
      selectedItem: this.props.items[0]
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.initializeDropdown();
  }

  initializeDropdown() {
    this.props.onSelectedItem(this.state.selectedItem.name);
  }

  // Handles change in selected item on dropdown menu and passes data to subscription info
  handleSelectedChange(selectedItem) {
    this.props.onSelectedItem(selectedItem.name);
  }

  showMenu(event) {
    this.setState(
      {
        showMenu: true
      },
      () => {
        document.addEventListener('click', this.closeMenu);
      }
    );
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState(
        {
          showMenu: false
        },
        () => {
          document.removeEventListener('click', this.closeMenu);
        }
      );
    }
  }

  itemSelected(object) {
    this.setState(
      {
        selectedItem: object,
        showMenu: false
      },
      () => {
        document.removeEventListener('click', this.closeMenu);
      }
    );
    this.handleSelectedChange(object);
  }

  returnDropdownButtons(items) {
    return this.props.items
      .filter(object => {
        return this.state.selectedItem.name !== object.name;
      })
      .map((object, i) => {
        return React__default.createElement(DropdownButton, {
          item: object,
          key: i,
          action: this.itemSelected,
          showTriangle: false
        });
      });
  }

  triangleVisibility() {
    if (this.state.items.length > 1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return React__default.createElement(
      'div',
      {
        className: 'dropdown-wrapper'
      },
      React__default.createElement(
        'div',
        {
          className: 'dropdown-container'
        },
        React__default.createElement(DropdownButton, {
          item: this.state.selectedItem,
          action: this.showMenu,
          showTriangle: this.triangleVisibility()
        }),
        this.state.showMenu
          ? React__default.createElement(
              'div',
              {
                className: 'menu',
                ref: element => {
                  this.dropdownMenu = element;
                }
              },
              this.returnDropdownButtons()
            )
          : null
      )
    );
  }
}

var bus = observable(undefined);

/* Import statements */

class Header extends React__default.Component {
  render() {
    return React__default.createElement(
      'div',
      {
        className: 'header'
      },
      React__default.createElement(
        reactRouterDom.Link,
        {
          className: 'back button',
          to: this.props.previousPage
        },
        'Back'
      ),
      React__default.createElement(
        'p',
        {
          className: 'heading-label'
        },
        this.props.title
      ),
      React__default.createElement(
        'a',
        {
          className: 'close button',
          onClick: () => bus.trigger('modal:show', false)
        },
        'Close'
      )
    );
  }
}

/* Import statements */
/* App component */

class MetaMaskInstall extends React__default.Component {
  constructor() {
    super();
  }

  render() {
    return React__default.createElement(
      'div',
      null,
      React__default.createElement(
        'div',
        {
          className: 'small-card'
        },
        React__default.createElement(Header, {
          title: 'MetaMask Not Installed',
          previousPage: '/'
        }),
        React__default.createElement(
          'div',
          {
            className: 'prompt'
          },
          React__default.createElement(
            'h2',
            {
              className: 'install'
            },
            '8x Pay cannot detect MetaMask on your browser'
          ),
          React__default.createElement('img', {
            src: Images.metamaskLogo,
            className: 'logo'
          }),
          React__default.createElement(
            'p',
            {
              className: 'text'
            },
            'Please make sure the MetaMask plugin is installed on this browser.'
          ),
          React__default.createElement(
            'a',
            {
              href: 'https://www.metamask.io',
              className: 'button'
            },
            React__default.createElement(
              'p',
              {
                className: 'metamask-download'
              },
              'Download MetaMask'
            )
          )
        )
      )
    );
  }
}

/*Import statements*/

class MetaMaskLocked extends React__default.Component {
  constructor() {
    super();
  }

  render() {
    return React__default.createElement(
      'div',
      {
        className: 'background'
      },
      React__default.createElement(
        'div',
        {
          className: 'small-card'
        },
        React__default.createElement(Header, {
          title: 'MetaMask Locked',
          previousPage: '/'
        }),
        React__default.createElement(
          'div',
          {
            className: 'locked-container'
          },
          React__default.createElement(
            'h2',
            {
              className: 'locked-title'
            },
            'Please unlock your MetaMask'
          ),
          React__default.createElement('img', {
            className: 'graphic',
            src: Images.metamaskLogo
          }),
          React__default.createElement(
            'p',
            {
              className: 'locked-text'
            },
            'Login and select your MetaMask account to proceed to payment page'
          )
        )
      )
    );
  }
}

/* Import statements */
/* App component */

class SubscriptionInfo extends React__default.Component {
  constructor() {
    super();
    this.state = {
      copied: false,
      selectedCurrency: '',
      selectedPeriod: '',
      kyberConversion: '',
      logo: [],
      subscriptionName: '',
      subscriptionDetails: '',
      subscriptionAmount: '',
      subscriptionPeriod: '',
      authorization: false,
      paymentStatus: ''
    };
    this.handleSelectedCurrency = this.handleSelectedCurrency.bind(this);
    this.handleSelectedPeriod = this.handleSelectedPeriod.bind(this);
    this.subscriptionPlanHandler = this.subscriptionPlanHandler.bind(this);
    this.handleAuthorization = this.handleAuthorization.bind(this);
  }

  componentDidMount() {
    this.handleSelectedCurrency();
    this.handleSelectedPeriod();
    this.handleAuthorization();
    bus.on('subscription:plan:sent', this.subscriptionPlanHandler);
    bus.trigger('subscription:plan:requested');
  }

  componentWillUnmount() {
    bus.off('subscription:plan:sent', this.subscriptionPlanHandler);
  }

  subscriptionPlanHandler(object) {
    console.log('called');
    this.setState({
      logo: object.logo,
      subscriptionName: object.subscriptionName,
      subscriptionDetails: object.subscriptionDetails,
      subscriptionAmount: object.subscriptionAmount,
      subscriptionPeriod: object.subscriptionPeriod
    });
  }

  handleAuthorization() {
    bus.on('user:authorization:received', status => {
      this.setState({
        authorization: status
      });
    });
  }

  handleSubscribe() {
    bus.on('user:subscribe:completed', (hash, status) => {
      this.setState({
        paymentStatus: 'subscribed'
      });
      console.log('Subscription Hash is:' + '' + hash);
    });
    bus.trigger('user:subscribe:requested');
  }

  handleActivateSubscription() {
    bus.on('user:activate:completed', (subscriptionHash, status) => {
      this.setState({
        paymentStatus: 'activated'
      });
      console.log('activated');
    });
    bus.trigger('user:activate:requested');
  } // Gets data from selected currency of user

  handleSelectedCurrency(currency) {
    console.log('curreny selected');
    this.setState({
      selectedCurrency: currency
    });
  } // Gets data from selected time period of user

  handleSelectedPeriod(period) {
    console.log('period selected');
    this.setState({
      selectedPeriod: period
    });
  } // Uses Kyber API to get conversion rates

  getKyberInformation() {
    fetch('https://tracker.kyber.network/api/tokens/pairs')
      .then(results => {
        return results.json();
      })
      .then(data => {
        // Added a factor of 1% to account for slippage
        var currencyConversion = data.ETH_DAI.currentPrice * 1.01;
        let roundedNumber = currencyConversion.toFixed(6);
        console.log('kyber conversion updated');
        this.setState({
          kyberConversion: roundedNumber
        });
      });
  }

  calculateSendAmount() {
    //this.getKyberInformation();
    if (this.state.selectedCurrency === 'Dai') {
      return (
        parseFloat(this.state.selectedPeriod) *
        parseFloat(this.state.subscriptionAmount)
      ).toFixed(6);
    } else if (this.state.selectedCurrency === 'Ethereum') {
      return (
        this.state.selectedPeriod *
        this.state.kyberConversion *
        this.state.subscriptionAmount
      ).toFixed(4);
    }
  }

  checkDaiSelected() {
    return this.state.selectedCurrency === 'Dai' ? true : false;
  }

  dropdownItems() {
    return [
      {
        image: Images.daiLogo,
        name: 'Dai',
        ticker: 'DAI'
      },
      {
        image: Images.ethLogo,
        name: 'Ethereum',
        ticker: 'ETH'
      }
    ];
  }

  timeItems() {
    return [
      {
        name: '3',
        ticker: this.humanizeDuration(this.state.subscriptionPeriod)
      },
      {
        name: '6',
        ticker: this.humanizeDuration(this.state.subscriptionPeriod)
      },
      {
        name: '9',
        ticker: this.humanizeDuration(this.state.subscriptionPeriod)
      }
    ];
  }

  resetCopyState() {
    setTimeout(() => {
      if (this.state.copied == true) {
        console.log('copy set to false');
        this.setState({
          copied: false
        });
        return;
      }
    }, 2000);
  }

  humanizeDuration(timeInSeconds) {
    var result = '';

    if (timeInSeconds) {
      if ((result = Math.round(timeInSeconds / (60 * 60 * 24 * 30 * 12))) > 0) {
        //years
        result = result === 1 ? ' year' : result + ' years';
      } else if (
        (result = Math.round(timeInSeconds / (60 * 60 * 24 * 30))) > 0
      ) {
        //months
        result = result === 1 ? ' month' : result + ' months';
      } else if (
        (result = Math.round(timeInSeconds / (60 * 60 * 24 * 7))) > 0
      ) {
        //months
        result = result === 1 ? ' week' : result + ' weeks';
      } else if ((result = Math.round(timeInSeconds / (60 * 60 * 24))) > 0) {
        //days
        result = result === 1 ? ' day' : result + ' days';
      } else if ((result = Math.round(timeInSeconds / (60 * 60))) > 0) {
        //hours
        result = result === 1 ? ' hours' : result + ' hours';
      } else if ((result = Math.round(timeInSeconds / 60)) > 0) {
        //minutes
        result = result === 1 ? ' minute' : result + ' minutes';
      } else if ((result = Math.round(timeInSeconds)) > 0) {
        //seconds
        result = result === 1 ? ' second' : result + ' seconds';
      } else {
        result = 'unknown';
      }
    }

    return result;
  }

  returnPayButtonState() {
    const authorization = React__default.createElement(
      'div',
      {
        className: 'give-auth'
      },
      React__default.createElement(
        'p',
        {
          onClick: () => {
            bus.trigger('user:authorization:requested');
          }
        },
        'Give Authorization'
      )
    );
    const subscribe = React__default.createElement(
      'div',
      {
        className: 'subscribe'
      },
      React__default.createElement(
        'p',
        {
          onClick: () => {
            this.handleSubscribe();
          }
        },
        'Subscribe'
      )
    );
    const activate = React__default.createElement(
      'div',
      {
        className: 'activate'
      },
      React__default.createElement(
        'p',
        {
          onClick: () => {
            this.handleActivateSubscription();
          }
        },
        'Activate Subscription'
      )
    );

    if (!this.checkDaiSelected()) {
      return React__default.createElement(
        reactRouterDom.Link,
        {
          to: '/conversion'
        },
        React__default.createElement(
          'div',
          {
            className: 'transaction'
          },
          React__default.createElement('p', null, 'Continue')
        )
      );
    }

    if (!this.state.authorization) {
      return authorization;
    }

    switch (this.state.paymentStatus) {
      case 'subscribed':
        return activate;

      case 'loading':
        return loading;

      default:
        return subscribe;
    }
  } // Conditions on which page to render depending on status provided by handlers

  render() {
    switch (this.props.status) {
      case 'unlocked':
        return this.renderUnlocked();
        break;

      case 'locked':
        return this.renderLocked();
        break;

      case 'not installed':
        return this.renderInstallPrompt();
        break;

      case 'loading':
        return this.renderLoading();
        break;

      default:
        return this.renderError();
    }
  }

  renderUnlocked() {
    let shouldFlex = 1;

    if (this.state.logo) {
      shouldFlex = 0;
    }

    return React__default.createElement(
      'div',
      {
        className: 'background-subs'
      },
      React__default.createElement(
        'div',
        {
          className: 'small-card'
        },
        React__default.createElement(Header, {
          title: 'Subscription Information',
          previousPage: '/'
        }),
        React__default.createElement(
          'div',
          {
            className: 'hero'
          },
          React__default.createElement(
            'div',
            {
              className: 'main-item'
            },
            this.state.logo
              ? React__default.createElement(
                  'div',
                  {
                    className: 'logo'
                  },
                  React__default.createElement('img', {
                    src: this.state.logo
                  })
                )
              : null,
            React__default.createElement(
              'div',
              {
                className: 'text',
                style: {
                  flex: `${shouldFlex}`
                }
              },
              React__default.createElement(
                'p',
                null,
                this.state.subscriptionName,
                ' -  ',
                this.state.subscriptionDetails
              ),
              React__default.createElement(
                'span',
                null,
                '$',
                this.state.subscriptionAmount,
                'USD billed every ',
                this.humanizeDuration(this.state.subscriptionPeriod)
              )
            )
          ),
          React__default.createElement(
            'div',
            {
              className: 'option'
            },
            React__default.createElement(
              'div',
              {
                className: 'currency'
              },
              React__default.createElement(
                'div',
                {
                  className: 'text'
                },
                React__default.createElement('p', null, 'I want to pay using')
              ),
              React__default.createElement(Dropdown, {
                items: this.dropdownItems(),
                onSelectedItem: this.handleSelectedCurrency
              })
            ),
            React__default.createElement(
              'div',
              {
                className: 'time'
              },
              React__default.createElement(
                'div',
                {
                  className: 'text'
                },
                React__default.createElement(
                  'p',
                  null,
                  'I want to top my account every'
                )
              ),
              React__default.createElement(Dropdown, {
                items: this.timeItems(),
                onSelectedItem: this.handleSelectedPeriod
              })
            )
          ),
          React__default.createElement(
            'div',
            {
              className: 'action'
            },
            React__default.createElement(
              'p',
              {
                className: 'text'
              },
              'To start your subscription, please send'
            ),
            React__default.createElement(
              'h2',
              null,
              this.calculateSendAmount(),
              ' ',
              this.state.selectedCurrency
            ),
            React__default.createElement(
              'p',
              {
                className: 'text'
              },
              'to your personal wallet'
            )
          ),
          React__default.createElement(
            'div',
            {
              className: 'item-address'
            },
            React__default.createElement(
              'p',
              {
                className: 'text-address'
              },
              this.props.userAddress
            ),
            React__default.createElement(
              reactCopyToClipboard.CopyToClipboard,
              {
                text: this.props.useraddress,
                onCopy: () => {
                  this.setState({
                    copied: true
                  });
                  this.resetCopyState();
                }
              },
              React__default.createElement(
                'div',
                {
                  className: 'text-button'
                },
                this.state.copied
                  ? React__default.createElement(
                      'p',
                      {
                        className: 'text-copy'
                      },
                      'Copied'
                    )
                  : React__default.createElement(
                      'p',
                      {
                        className: 'text-copy'
                      },
                      'Copy'
                    )
              )
            )
          ),
          React__default.createElement(
            'div',
            {
              className: 'balance'
            },
            React__default.createElement('p', null, 'Current Balance'),
            React__default.createElement(
              'p',
              {
                className: 'currency'
              },
              this.checkDaiSelected()
                ? this.props.daiBalance
                : this.props.ethBalance,
              ' ',
              this.state.selectedCurrency
            )
          ),
          this.returnPayButtonState()
        )
      )
    );
  }

  renderLocked() {
    return React__default.createElement(MetaMaskLocked, null);
  }

  renderInstallPrompt() {
    return React__default.createElement(MetaMaskInstall, null);
  } // @TODO: Add a page for loading trezor and ledger screens

  renderLoading() {
    return React__default.createElement(
      'div',
      null,
      React__default.createElement('p', null, 'Loading...')
    );
  }
}

const config = artifacts.ConfigAddresses.kovan;

function getToken(ticker) {
  let object = config['approvedTokens'].find(item => item.ticker == ticker) || {
    address: ''
  };
  return object.address;
}

function getContract(contract) {
  let object = config['addresses'].find(item => item.name == contract) || {
    address: ''
  };
  return object.address;
}

/* Import statements */

class MetamaskHandler extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      address: '',
      ethBalance: '',
      daiBalance: ''
    };
  }

  componentDidMount() {
    this.initialiseMetaMask();
  } // Function used to update the state of MetaMask Handler.

  updateStatus(status, address, balance) {
    this.setState({
      status: status,
      address: address,
      ethBalance: balance
    });
  }

  // Checks if MetaMask is installed on the browser and calls MetaMask state functions
  initialiseMetaMask() {
    if (typeof web3 === 'undefined') {
      console.log('No web3? You should consider trying MetaMask!');
      this.updateStatus('not installed');
      return;
    }

    console.log('Metamask is installed');
    this.checkMetaMaskState();
    this.watchMetaMaskState();
  } // Checks if user is logged into MetaMask

  checkMetaMaskState() {
    web3.eth.getAccounts((err, accounts) => {
      if (err != null) {
        console.log(err);
        this.updateStatus('error');
      } else if (accounts.length === 0) {
        console.log('MetaMask is locked');
        this.updateStatus('locked');
      } else {
        console.log('MetaMask is unlocked');
        this.updateStatus('unlocked');
        this.getMetaMaskData();
      }
    });
  } // Checks for user account changes (login, logout) on metamask and updates state if valid.

  watchMetaMaskState() {
    var account = web3.eth.accounts[0];
    var accountInterval = setInterval(() => {
      if (web3.eth.accounts[0] !== account) {
        account = web3.eth.accounts[0];
        this.checkMetaMaskState();
      }

      this.checkMetaMaskBalance();
    }, 100);
  } // Checks MetaMask balance every 5 seconds while waiting for user deposit

  checkMetaMaskBalance() {
    setTimeout(() => {
      this.getMetaMaskData();
    }, 2000);
  }

  // Supplies components with MetaMask address and balance
  getMetaMaskData() {
    var address = web3.eth.accounts[0];
    web3.eth.getBalance(address, (err, result) => {
      if (!err) {
        this.updateStatus(
          this.state.status,
          address,
          web3.fromWei(result, 'ether').toNumber()
        );
      } else {
        console.log('error');
      }
    });
    this.getERC20Balance();
  } // Gets DAI balance of user address

  getERC20Balance() {
    var token = web3.eth
      .contract(artifacts.MockTokenAbi.abi)
      .at(getToken('DAI'));
    token.balanceOf.call(web3.eth.accounts[0], (err, bal) => {
      if (err) {
        console.error(err);
      }

      const divideBalance = bal / Math.pow(10, 18);
      this.setState({
        daiBalance: divideBalance
      });
    });
  }

  render() {
    return React__default.createElement(SubscriptionInfo, {
      status: this.state.status,
      userAddress: this.state.address,
      ethBalance: this.state.ethBalance,
      daiBalance: this.state.daiBalance
    });
  }
}

class ConversionPrompt extends React__default.Component {
  constructor() {
    super();
  }

  render() {
    return React__default.createElement(
      'div',
      {
        className: 'small-card'
      },
      React__default.createElement(Header, {
        title: 'Convert to Dai',
        previousPage: '/metamask-handler'
      }),
      React__default.createElement(
        'div',
        {
          className: 'main-content'
        },
        React__default.createElement(
          'div',
          {
            className: 'main-text'
          },
          React__default.createElement(
            'h2',
            {
              id: 'message'
            },
            'Once you begin your subscription, your Ethereum will be converted into Dai.'
          )
        ),
        React__default.createElement(
          'div',
          {
            className: 'main-graphics'
          },
          React__default.createElement(
            'div',
            {
              className: 'ethereum'
            },
            React__default.createElement('img', {
              className: 'logo',
              src: Images.ethLogo
            }),
            React__default.createElement('h2', null, '0.014'),
            React__default.createElement('p', null, 'ETH')
          ),
          React__default.createElement(
            'div',
            {
              className: 'arrow'
            },
            React__default.createElement('img', {
              className: 'arrow',
              src: Images.arrow
            })
          ),
          React__default.createElement(
            'div',
            {
              className: 'dai'
            },
            React__default.createElement('img', {
              className: 'logo',
              src: Images.daiLogo
            }),
            React__default.createElement('h2', null, '84.00'),
            React__default.createElement('p', null, 'DAI')
          )
        ),
        React__default.createElement(
          'div',
          {
            className: 'secondary-text'
          },
          React__default.createElement(
            'p',
            {
              className: 'title'
            },
            'Why is this happening?'
          ),
          React__default.createElement(
            'p',
            {
              className: 'paragraph'
            },
            'DAI is a stablecoin that is pegged to the US Dollar, this means it\u2019s value will always stay around $1.00ea. By converting your ETH to DAI, you will avoid the price fluctuations and will have enough funds to cover your subscription for 6 months.'
          )
        )
      ),
      React__default.createElement(
        reactRouterDom.Link,
        {
          to: '/begin-subscription'
        },
        React__default.createElement(
          'div',
          {
            className: 'button'
          },
          React__default.createElement(
            'p',
            {
              className: 'convert'
            },
            'Convert to DAI'
          )
        )
      )
    );
  }
}

class BeginSubscription extends React__default.Component {
  constructor() {
    super();
  }

  render() {
    return React__default.createElement(
      'div',
      {
        className: 'small-card'
      },
      React__default.createElement(Header, {
        title: 'Begin Subscription',
        previousPage: '/conversion'
      }),
      React__default.createElement(
        'div',
        {
          className: 'content'
        },
        React__default.createElement(
          'div',
          {
            className: 'header-text'
          },
          React__default.createElement(
            'h2',
            {
              className: 'header-bold'
            },
            'Your conversion is now complete'
          ),
          React__default.createElement(
            'p',
            {
              className: 'header-small'
            },
            'You are ready to begin your subscription'
          )
        ),
        React__default.createElement(
          'div',
          {
            className: 'graphic'
          },
          React__default.createElement('img', {
            src: Images.daiConfirm
          })
        ),
        React__default.createElement(
          'div',
          {
            className: 'subtext'
          },
          React__default.createElement(
            'p',
            {
              className: 'subtext-bold'
            },
            'What happens next?'
          ),
          React__default.createElement(
            'p',
            {
              className: 'subtext-small'
            },
            'Your subscription will now start, and each month 14.00 DAI will be deducted from your Personal Wallet. Once your balance becomes low, we will notify you and will need to top up your account.'
          )
        )
      ),
      React__default.createElement(
        'div',
        {
          className: 'button'
        },
        React__default.createElement(
          'p',
          {
            className: 'begin-subscription'
          },
          'Begin Subscription \u2013 $14/month'
        )
      )
    );
  }
}

function Container({ location }) {
  return React__default.createElement(
    Wrapper,
    null,
    React__default.createElement(
      reactTransitionGroup.TransitionGroup,
      {
        className: 'transition-group'
      },
      React__default.createElement(
        reactTransitionGroup.CSSTransition,
        {
          key: location.key,
          timeout: {
            enter: 200,
            exit: 200
          },
          classNames: 'fade'
        },
        React__default.createElement(
          'section',
          {
            className: 'route-section'
          },
          React__default.createElement(
            reactRouterDom.Switch,
            {
              location: location
            },
            React__default.createElement(reactRouterDom.Route, {
              exact: true,
              path: '/',
              component: SelectWallet
            }),
            React__default.createElement(reactRouterDom.Route, {
              path: '/metamask-handler',
              component: MetamaskHandler
            }),
            React__default.createElement(reactRouterDom.Route, {
              path: '/conversion',
              component: ConversionPrompt
            }),
            React__default.createElement(reactRouterDom.Route, {
              path: '/begin-subscription',
              component: BeginSubscription
            })
          )
        )
      )
    )
  );
}
const Wrapper = styled.div`
  div.transition-group {
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;
var Container$1 = reactRouterDom.withRouter(Container);

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const keys = {
      27: () => {
        e.preventDefault();
        bus.trigger('modal:show', false);
        window.removeEventListener('keyup', this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  } // Changed !isNil(this.modal) to allow drop down menus to work within modal

  handleOutsideClick(e) {
    e.preventDefault();

    if (isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        bus.trigger('modal:show', false);
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  render() {
    const { children } = this.props;
    return React__default.createElement(
      'div',
      {
        className: 'modal-overlay'
      },
      React__default.createElement(
        'div',
        {
          className: 'modal',
          ref: node => (this.modal = node)
        },
        React__default.createElement(
          'div',
          {
            className: 'modal-content'
          },
          children
        )
      ),
      React__default.createElement('button', {
        type: 'button',
        className: 'close-button',
        onClick: () => bus.trigger('modal:show', false)
      })
    );
  }
}

class SimpleModalLauncher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.listenToggleModal();
    this.initialiseWeb3();
  }

  listenToggleModal() {
    console.log('called');
    bus.on('modal:show', status => {
      this.setState({
        showModal: status
      });
    });
  }

  initialiseWeb3() {
    window.addEventListener('load', function() {
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3 = new Web3(web3.currentProvider);
        console.log('used metamask web3');
      } else {
        console.log('No web3? You should consider trying MetaMask!'); // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)

        web3 = new Web3(
          new Web3.providers.HttpProvider('http://localhost:8080')
        );
      } // Now you can start your app & access web3 freely:

      bus.trigger('web3:initialised', web3);
    });
  }

  render() {
    const { buttonLabel, children } = this.props;
    const { showModal } = this.state;
    return React__default.createElement(
      'div',
      null,
      React__default.createElement(
        'button',
        {
          type: 'button',
          className: 'modal-button',
          onClick: () => {
            bus.trigger('modal:show', true);
          }
        },
        buttonLabel
      ),
      showModal && React__default.createElement(SimpleModal, null, children)
    );
  }
}

class UserStore {
  constructor() {
    this.startListening();
  }

  startListening() {}
}

class SubscriptionStore {
  constructor() {
    this.startListeners();
    this.listenPlanHash();
    this.listenPlanRequested();
  }

  startListeners() {
    bus.on('web3:initialised', web3 => {
      this.eightEx = new EightEx(web3, {
        volumeSubscriptionAddress: getContract('VolumeSubscription'),
        transactingTokenAddress: getToken('DAI'),
        transferProxyAddress: getContract('TransferProxy'),
        executorAddress: getContract('Executor')
      });
      web3.eth.getAccounts((err, accounts) => {
        if (err != null) {
          console.log('cannot get address');
        } else if (accounts.length === 0) {
          console.log('you have not logged in');
        } else {
          this.address = accounts;
          console.log(this.address);
          this.web3 = web3;
          this.listenAuthorization();
          this.listenSubscribe();
          this.listenUserActivation();
        }
      });
    });
  }

  listenPlanHash() {
    bus.on('planhash:sent', planHash => {
      this.planHash = planHash;
    });
  }

  listenPlanRequested() {
    bus.on('subscription:plan:requested', () => {
      // Show dummy data if there's no plan hash
      if (!this.planHash) {
        bus.trigger('subscription:plan:sent', {
          logo: null,
          subscriptionName: 'Netflix [DEMO]',
          subscriptionDetails: 'Premium Plan',
          subscriptionAmount: 14,
          subscriptionPeriod: 30 * 24 * 60 * 60
        });
        return;
      }

      this.eightEx.plans.get(this.planHash).then(elem => {
        this.currentPlan = Array.from(elem);
        console.log(elem);

        if (this.currentPlan) {
          const currencyBase = new BigNumber(10).pow(18);

          const planObj = (({
            image,
            name,
            description,
            amount,
            interval
          }) => ({
            logo: image,
            subscriptionName: name,
            subscriptionDetails: description,
            subscriptionAmount: amount.div(currencyBase).toNumber(),
            subscriptionPeriod: interval
          }))(elem);

          console.log(planObj);
          bus.trigger('subscription:plan:sent', planObj);
        }
      });
      this.eightEx.subscriptions
        .hasGivenAuthorisation(this.address)
        .then(result => {
          if (result == true) {
            console.log('The user has already given authorisation');
            bus.trigger('user:authorization:received', true);
          }
        });
    });
  }

  listenAuthorization() {
    bus.on('user:authorization:requested', () => {
      this.eightEx.subscriptions.giveAuthorisation().then(obj => {
        if (obj !== null) {
          bus.trigger('user:authorization:received', true);
          bus.trigger('user:subscribe:requested');
        } else {
          console.log('User cancelled transaction');
        }
      });
    });
  }

  listenSubscribe() {
    bus.on('start:subscribe:process', () => {
      const txData = null;
      const metaData = null;
      this.eightEx.subscriptions
        .subscribe(this.planHash, metaData, txData)
        .then(subscriptionHash => {
          bus.trigger('user:subscribe:completed', subscriptionHash, true);
          this.subscriptionHash = subscriptionHash;
        });
    });
    bus.on('user:subscribe:requested', () => {
      this.eightEx.subscriptions
        .hasGivenAuthorisation(this.address)
        .then(boolean => {
          console.log(boolean);

          if (boolean === true) {
            bus.trigger('start:subscribe:process');
          } else {
            console.log('Authorization not given');
          }
        });
    });
  }

  listenUserActivation() {
    bus.on('user:activate:requested', () => {
      const txData = null;

      if (this.subscriptionHash) {
        this.eightEx.subscriptions
          .activate(this.subscriptionHash, txData)
          .then(receipt => {
            bus.trigger('user:activate:completed', this.subscriptionHash, true);
            console.log('Subscription receipt is' + '' + receipt);
          });
      }
    });
  }
}

___$insertStyle(
  '.eight-ex-pay a {\n  text-decoration: none;\n}\n.eight-ex-pay body {\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  margin: 0;\n}\n@media (max-device-width: 1200px) {\n  .eight-ex-pay body {\n    font-size: 14px;\n  }\n}\n.eight-ex-pay h1 {\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n  line-height: 1.2em;\n  font-size: 1.35em;\n  margin: 0;\n}\n.eight-ex-pay h2 {\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 1.75em;\n  letter-spacing: 0.06em;\n  margin: 0;\n}\n.eight-ex-pay h3 {\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 1.5em;\n  text-align: left;\n  margin: 0;\n}\n.eight-ex-pay h4 {\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 1.25em;\n  letter-spacing: 0.04em;\n  text-align: left;\n  margin: 0;\n}\n.eight-ex-pay h5 {\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 1.25em;\n  letter-spacing: 0.06em;\n  margin: 0;\n}\n.eight-ex-pay p {\n  margin: 0.5em 0;\n}\n.eight-ex-pay .container .dropdown {\n  background-color: white;\n  border: none;\n  border-radius: 0.85em;\n  padding: 1em 1em 1em 1em;\n  box-shadow: 2px 0 20px #EFEFEF;\n  width: 100%;\n}\n.eight-ex-pay .container .dropdown .label {\n  display: flex;\n  justify-content: space-between;\n}\n.eight-ex-pay .container .dropdown .label p {\n  font-size: 1.35em;\n  font-weight: 300;\n}\n.eight-ex-pay .container .dropdown .label .left {\n  display: flex;\n  padding-right: 1em;\n}\n.eight-ex-pay .container .dropdown .label .left .logo {\n  max-width: 3.5em;\n  max-height: 3em;\n}\n.eight-ex-pay .container .dropdown .label .left p {\n  margin-left: 1em;\n}\n.eight-ex-pay .container .dropdown .label .right {\n  display: flex;\n  padding-left: 1em;\n}\n.eight-ex-pay .container .dropdown .label .right p {\n  color: #958DB7;\n  margin-right: 1em;\n}\n.eight-ex-pay .container .dropdown .label .right .triangle {\n  margin-top: 0.85em;\n}\n.eight-ex-pay .container .dropdown .label .triangle {\n  content: "";\n  width: 0;\n  height: 0;\n  border-left: 0.25em solid transparent;\n  border-right: 0.25em solid transparent;\n  border-top: 0.5em solid #958DB7;\n  margin-top: 0.5em;\n}\n.eight-ex-pay .dropdown-wrapper {\n  position: relative;\n}\n.eight-ex-pay .dropdown-wrapper .dropdown-container {\n  max-width: 100%;\n}\n.eight-ex-pay .dropdown-wrapper .dropdown-container .menu {\n  display: flex;\n  flex-direction: column;\n  z-index: 1000;\n  position: absolute;\n  min-width: inherit;\n  width: 100%;\n  box-shadow: none;\n}\n.eight-ex-pay .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.eight-ex-pay .header a {\n  text-decoration: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n.eight-ex-pay .header .back {\n  border-color: #958DB7;\n  color: #958DB7;\n}\n.eight-ex-pay .header .close {\n  color: white;\n  background-color: #181039;\n  border-color: #958DB7;\n}\n.eight-ex-pay .header .heading-label {\n  color: #0E0639;\n  font-weight: 600;\n  font-size: 1.25em;\n  text-align: center;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .header .heading-label {\n    font-size: 1em;\n  }\n}\n.eight-ex-pay .header .button {\n  border-style: solid;\n  border-width: 0.05em;\n  border-radius: 0.75em;\n  padding: 0.65em 1em;\n  font-weight: 200;\n}\n.eight-ex-pay .small-card .prompt {\n  text-align: center;\n  margin: 0em 5em;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .small-card .prompt {\n    margin: 0em;\n  }\n}\n.eight-ex-pay .small-card .prompt .install {\n  text-align: center;\n  font-size: 1.25em;\n  font-weight: 600;\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n.eight-ex-pay .small-card .prompt img {\n  width: 3em;\n}\n.eight-ex-pay .small-card .prompt .text {\n  font-size: 1em;\n  font-weight: 400;\n  color: #958DB7;\n  padding: 1em 0em;\n}\n.eight-ex-pay .small-card .prompt .button {\n  padding: 1em 0em;\n}\n.eight-ex-pay .small-card .prompt .button .metamask-download {\n  color: white;\n  justify-content: center;\n  background-color: #5944EE;\n  margin: 0 2em;\n  border-radius: 0.85em;\n  padding: 0.85em 4em;\n}\n.eight-ex-pay .small-card .locked-container {\n  text-align: center;\n  margin: 0em 4em;\n}\n.eight-ex-pay .small-card .locked-container .locked-title {\n  font-size: 1.25em;\n  font-weight: 600;\n  padding: 1em 0em;\n}\n.eight-ex-pay .small-card .locked-container img {\n  width: 4em;\n  background-image: linear-gradient(to bottom right, #FF9C3F, #F6D365);\n  padding: 1em 7em;\n  border-radius: 0.85em;\n}\n.eight-ex-pay .small-card .locked-container .locked-text {\n  text-align: center;\n  font-size: 1em;\n  color: #958DB7;\n  padding-top: 1em;\n  font-weight: 400;\n  padding-bottom: 2em;\n}\n.eight-ex-pay .modal-button {\n  padding: 0.75em 2em;\n  background-color: black;\n  border: 0;\n  border-radius: 0.3em;\n  font-size: 1em;\n  color: #fff;\n  width: 100%;\n  flex: 1;\n  cursor: pointer;\n  outline: none;\n}\n.eight-ex-pay .modal-button:hover {\n  background-color: #466d87;\n}\n.eight-ex-pay .planhash-input {\n  display: flex;\n  background-color: white;\n  border: none;\n  border-radius: 0.85em;\n  padding: 1em 1em 1em 1em;\n  box-shadow: 9px 10px 20px 0px rgba(239, 239, 239, 0.8);\n}\n.eight-ex-pay .planhash-input #planhash-input {\n  border: none;\n  font-size: 1em;\n  width: 100%;\n}\n.eight-ex-pay .planhash-input input::-webkit-input-placeholder {\n  line-height: 3;\n  color: lightgray;\n}\n@global {\n  .eight-ex-pay {\n    body-overflow: hidden;\n  }\n}\n.eight-ex-pay .modal-overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  padding: 1em;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 9999;\n  opacity: 1;\n  animation: show 0.5s ease;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n@keyframes show {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n  1% {\n    display: flex;\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.eight-ex-pay .modal {\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0, 0, 0.625rem, rgba(0, 0, 0, 0.2);\n  border-radius: 0.4em;\n}\n@media (min-width: 576px) {\n  .eight-ex-pay .modal {\n    width: 32rem;\n  }\n}\n.eight-ex-pay .close-button {\n  position: fixed;\n  top: 0;\n  right: 0;\n  background: #fff;\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  outline: 0;\n  box-shadow: 0, 0, 0.625rem, rgba(0, 0, 0, 0.2);\n}\n.eight-ex-pay .close-button:before, .eight-ex-pay .close-button:after {\n  content: "";\n  position: absolute;\n  top: 1.2rem;\n  left: 0.25rem;\n  width: 2rem;\n  height: 0.1rem;\n  background-color: #888;\n}\n.eight-ex-pay .close-button:before {\n  transform: rotate(45deg);\n}\n.eight-ex-pay .close-button:after {\n  transform: rotate(-45deg);\n}\n.eight-ex-pay .close-button:hover:before, .eight-ex-pay .close-button:hover:after {\n  background-color: #444;\n}\n.eight-ex-pay .small-card {\n  margin: auto;\n  max-width: 35em;\n  background-color: #F5F5F8;\n  border-radius: 1em;\n  padding: 1em 2em 1em 2em;\n}\n.eight-ex-pay .small-card .hero {\n  text-align: center;\n}\n.eight-ex-pay .small-card .hero .text {\n  margin-bottom: 2em;\n}\n.eight-ex-pay .small-card .hero .text h1 {\n  font-size: 1.5em;\n  font-weight: 700;\n  margin-bottom: 0.5em;\n}\n.eight-ex-pay .small-card .hero .text .middle-text {\n  font-size: 0.85em;\n  font-weight: 400;\n  color: #958DB7;\n}\n.eight-ex-pay .small-card .hero .end-text {\n  font-size: 0.85em;\n  font-weight: 400;\n  margin-bottom: 2em;\n}\n.eight-ex-pay .small-card .hero .end-text .warning {\n  color: #E8183B;\n  margin-bottom: 2em;\n  margin-top: 1em;\n}\n.eight-ex-pay .small-card .hero .end-text .proceed {\n  color: #958DB7;\n}\n.eight-ex-pay .small-card .address-item {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin: 0em 2em 2em 2em;\n}\n.eight-ex-pay .small-card .address-item .address-box {\n  display: flex;\n  align-items: left;\n  overflow: hidden;\n  border-color: #6E5BB9;\n  border-radius: 0.5em;\n  background-color: white;\n  margin: 0.5em;\n  padding: 1em 2em;\n  box-shadow: 2px 0 16px #EFEFEF;\n  color: #958DB7;\n}\n.eight-ex-pay .small-card .cta-button {\n  display: flex;\n  justify-content: center;\n}\n.eight-ex-pay .small-card .cta-button .text {\n  color: white;\n  font-weight: 500;\n  border-radius: 0.75em;\n  box-shadow: 2px 0 16px #EFEFEF;\n  background-color: #5944EE;\n  padding: 1em 6em;\n}\n.eight-ex-pay .small-card .hero {\n  text-align: center;\n  padding-top: 1em;\n}\n.eight-ex-pay .small-card .hero .middle-text {\n  color: #958DB7;\n  font-weight: 300;\n  font-size: 0.85em;\n  margin-bottom: 2em;\n}\n.eight-ex-pay .small-card .hero h1 {\n  font-size: 1.25em;\n  margin-bottom: 1em;\n}\n.eight-ex-pay .small-card .confirm-box {\n  display: flex;\n  flex-direction: column;\n  margin: 0em 5em 3em 5em;\n}\n.eight-ex-pay .small-card .confirm-box .item {\n  display: flex;\n  align-items: center;\n  border-color: #6E5BB9;\n  border-radius: 0.5em;\n  background-color: white;\n  margin: 0.5em;\n  padding: 1em 1em;\n  box-shadow: 2px 0 16px #EFEFEF;\n  color: #958DB7;\n}\n.eight-ex-pay .small-card .confirm-box .item p {\n  font-size: 0.85em;\n  font-weight: 300;\n  padding-left: 1em;\n}\n.eight-ex-pay .small-card .cta-button {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n.eight-ex-pay .small-card .cta-button p {\n  color: #958DB7;\n  border-radius: 0.75em;\n  padding: 1em 4em;\n  background-color: #EAEAF0;\n}\n.eight-ex-pay .small-card .hero {\n  text-align: center;\n  padding: 0em 1.5em;\n}\n.eight-ex-pay .small-card .hero .icon {\n  margin-bottom: 2em;\n}\n.eight-ex-pay .small-card .hero h1 {\n  font-size: 1.35em;\n  font-weight: 500;\n  padding: 0em 2em;\n  margin-bottom: 0.75em;\n}\n.eight-ex-pay .small-card .hero .middle-text {\n  margin-bottom: 2.5em;\n  font-weight: 300;\n  font-size: 0.85em;\n  letter-spacing: 0.04em;\n}\n.eight-ex-pay .small-card .hero .message {\n  font-size: 0.75em;\n  font-weight: 400;\n  color: #4D25F9;\n}\n.eight-ex-pay .small-card .cta-button {\n  display: flex;\n  justify-content: center;\n}\n.eight-ex-pay .small-card .cta-button .text {\n  color: white;\n  font-weight: 500;\n  border-radius: 0.75em;\n  box-shadow: 2px 0 16px #EFEFEF;\n  background-color: #5944EE;\n  padding: 1em 6em;\n}\n.eight-ex-pay .small-card .hero {\n  text-align: center;\n  padding: 0em 1.5em;\n}\n.eight-ex-pay .small-card .hero .icon {\n  margin-bottom: 2em;\n}\n.eight-ex-pay .small-card .hero h1 {\n  font-size: 1.35em;\n  font-weight: 500;\n  padding: 0em 2em;\n  margin-bottom: 0.75em;\n}\n.eight-ex-pay .small-card .hero .middle-text {\n  margin-bottom: 2.5em;\n  font-weight: 300;\n  font-size: 0.85em;\n  letter-spacing: 0.04em;\n}\n.eight-ex-pay .small-card .hero .warning {\n  font-size: 0.75em;\n  font-weight: 600;\n  color: #E8183B;\n}\n.eight-ex-pay .small-card .cta-button {\n  display: flex;\n  justify-content: center;\n}\n.eight-ex-pay .small-card .cta-button .text {\n  color: white;\n  font-weight: 500;\n  border-radius: 0.75em;\n  box-shadow: 2px 0 16px #EFEFEF;\n  background-color: #5944EE;\n  padding: 1em 4em;\n}\n.eight-ex-pay .small-card .hero {\n  text-align: center;\n  padding: 2em 1em 2em 1em;\n}\n.eight-ex-pay .small-card .hero .header-text {\n  text-align: center;\n  font-size: 1em;\n  font-weight: 500;\n  padding: 0em 2em;\n  margin-bottom: 2em;\n}\n.eight-ex-pay .small-card .hero .header-text span {\n  color: #644DF0;\n}\n.eight-ex-pay .small-card .hero .item {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1.5em 0em;\n  background-color: white;\n  border-radius: 0.75em;\n  margin-bottom: 2em;\n  box-shadow: 2px 0 16px #EFEFEF;\n}\n.eight-ex-pay .small-card .hero .item p {\n  text-align: left;\n  width: 33%;\n  color: #958DB7;\n  font-weight: 300;\n  box-sizing: border-box;\n  padding: 0.5em 0em 0.5em 3em;\n  margin: 0em;\n}\n.eight-ex-pay .small-card .hero .middle-text {\n  color: #958DB7;\n  font-size: 0.85em;\n  margin-bottom: 2em;\n}\n.eight-ex-pay .small-card .hero .checkbox {\n  display: flex;\n  flex-direction: column;\n  margin: 0em 5em 0em 5em;\n}\n.eight-ex-pay .small-card .hero .checkbox .tick {\n  display: flex;\n  align-items: center;\n  border-color: #6E5BB9;\n  border-radius: 0.5em;\n  background-color: white;\n  margin: 0.5em;\n  padding: 0.6em 1em;\n  box-shadow: 2px 0 16px #EFEFEF;\n}\n.eight-ex-pay .small-card .hero .checkbox .tick .square {\n  background-color: #F5F5F8;\n  height: 1.375em;\n  width: 1.375em;\n  border-radius: 0.3em;\n  margin: 0.5em 1em 0.5em 0.5em;\n}\n.eight-ex-pay .small-card .hero .checkbox .tick p {\n  color: #958DB7;\n  font-weight: 300;\n  font-size: 0.85em;\n}\n.eight-ex-pay .small-card .cta-button {\n  display: flex;\n  justify-content: center;\n}\n.eight-ex-pay .small-card .cta-button p {\n  color: #958DB7;\n  border-radius: 0.75em;\n  padding: 1em 4em;\n  background-color: #EAEAF0;\n}\n.eight-ex-pay .main-card {\n  max-width: 35em;\n  margin: auto;\n  padding-bottom: 1em;\n  padding-top: 1em;\n}\n.eight-ex-pay .main-card a {\n  text-decoration: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n.eight-ex-pay .main-card .card-header {\n  text-align: center;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .main-card .card-header {\n    text-align: left;\n  }\n}\n.eight-ex-pay .main-card .card-header p {\n  color: #958DB7;\n  font-weight: 400;\n  font-size: 0.85em;\n  letter-spacing: 0.03em;\n}\n.eight-ex-pay .main-card .card-header h1 {\n  font-size: 1.25em;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n}\n.eight-ex-pay .main-card .options-container {\n  margin: 1.5em 0;\n}\n.eight-ex-pay .main-card .options-container .item {\n  display: flex;\n  justify-content: flex-start;\n  background-color: red;\n  padding: 2em;\n  margin: 1em auto;\n  border-radius: 0.85em;\n  box-shadow: 2px 0 20px #EFEFEF;\n  color: white;\n  font-weight: 200;\n  min-height: 33%;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .main-card .options-container .item {\n    padding: 1em 1em 0.5em 1em;\n  }\n}\n.eight-ex-pay .main-card .options-container .item .logo {\n  display: flex;\n  align-items: center;\n  margin-right: 3.5em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .main-card .options-container .item .logo {\n    margin-right: 1em;\n  }\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .main-card .options-container .item .logo img {\n    padding-bottom: 0.75em;\n    width: 3em;\n  }\n}\n.eight-ex-pay .main-card .options-container .item .text h2 {\n  font-size: 1em;\n  font-weight: 600;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .main-card .options-container .item .text h2 {\n    font-size: 0.85em;\n    margin-top: 0.75em;\n  }\n}\n.eight-ex-pay .main-card .options-container .item .text p {\n  font-size: 1em;\n  font-weight: 300;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .main-card .options-container .item .text p {\n    font-size: 0.85em;\n  }\n}\n.eight-ex-pay .main-card .options-container .item:hover {\n  transform: scale(1.03);\n  transition: scale 6s;\n}\n.eight-ex-pay .main-card .options-container .metamask {\n  background-image: linear-gradient(to bottom right, #FF9C3F, #F6D365);\n}\n.eight-ex-pay .main-card .options-container .ledger {\n  background-image: linear-gradient(to bottom right, #8894FC, #BC75FF);\n}\n.eight-ex-pay .main-card .options-container .trezor {\n  background-image: linear-gradient(to bottom right, #EC8C69, #ED6EA0);\n}\n.eight-ex-pay .main-card .options-container .exchange {\n  background-color: #2B2654;\n  display: none;\n}\n.eight-ex-pay .small-card {\n  transform: scale(0.9);\n}\n.eight-ex-pay .small-card .hero {\n  display: flex;\n  flex-direction: column;\n  padding-top: 2em;\n  padding-bottom: 1em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .small-card .hero {\n    padding-top: 0.5em;\n  }\n}\n.eight-ex-pay .small-card .hero .main-item {\n  display: flex;\n  background-color: white;\n  border-radius: 0.85em;\n  box-shadow: 2px 0 20px #EFEFEF;\n  padding: 2em 1em 0em 1em;\n  margin-bottom: 1.5em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .small-card .hero .main-item {\n    flex-direction: column;\n    padding: 1em 0.5em 0em 0.5em;\n  }\n}\n.eight-ex-pay .small-card .hero .main-item .logo {\n  margin-right: 4em;\n  padding-left: 4em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .small-card .hero .main-item .logo {\n    margin-right: 0em;\n    padding: 0em 1em 0em 0.5em;\n  }\n}\n@media (max-device-width: 450px) and (max-device-width: 450px) {\n  .eight-ex-pay .small-card .hero .main-item .logo img {\n    width: 2em;\n  }\n}\n.eight-ex-pay .small-card .hero .main-item .text {\n  font-size: 1.25em;\n  font-weight: 500;\n}\n.eight-ex-pay .small-card .hero .main-item .text p {\n  margin-top: 0em;\n}\n.eight-ex-pay .small-card .hero .main-item .text span {\n  color: #958DB7;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n}\n.eight-ex-pay .small-card .hero .option {\n  display: flex;\n  padding-bottom: 0.5em;\n  text-align: left;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .small-card .hero .option {\n    flex-direction: column;\n    width: 100%;\n  }\n}\n.eight-ex-pay .small-card .hero .option .currency {\n  display: flex;\n  flex-direction: column;\n  margin-right: 1em;\n  width: 50%;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .small-card .hero .option .currency {\n    width: 100%;\n    padding-bottom: 1em;\n  }\n}\n.eight-ex-pay .small-card .hero .option .currency .text {\n  color: #958DB7;\n  font-size: 0.85em;\n  font-weight: 400;\n  margin-bottom: 0.5em;\n}\n.eight-ex-pay .small-card .hero .option .time {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .small-card .hero .option .time {\n    width: 100%;\n  }\n}\n.eight-ex-pay .small-card .hero .option .time .text {\n  color: #958DB7;\n  font-size: 0.85em;\n  font-weight: 400;\n  margin-bottom: 0.5em;\n}\n.eight-ex-pay .small-card .hero .option .box {\n  background-color: white;\n  border-radius: 0.85em;\n}\n.eight-ex-pay .small-card .hero .action {\n  text-align: center;\n  margin: 1.5em 0em 2em 0em;\n  color: #958DB7;\n}\n.eight-ex-pay .small-card .hero .action h2 {\n  color: black;\n  font-size: 1.5em;\n  font-weight: 400;\n  padding: 0.5em 0em;\n}\n.eight-ex-pay .small-card .hero .action .text {\n  margin: 0em;\n  font-size: 1em;\n  font-weight: 400;\n}\n.eight-ex-pay .small-card .hero .item-address {\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  border-radius: 0.85em;\n  box-shadow: 2px 0 20px #EFEFEF;\n  padding: 0.5em;\n}\n.eight-ex-pay .small-card .hero .item-address .text-address {\n  color: #958DB7;\n  padding: 0.5em 1em 0.5em 1em;\n  font-weight: 300;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .small-card .hero .item-address .text-address {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n.eight-ex-pay .small-card .hero .item-address .text-copy {\n  color: white;\n  background-color: #5944EE;\n  border-radius: 0.5em;\n  padding: 0.5em 1em;\n}\n.eight-ex-pay .small-card .hero .balance {\n  display: flex;\n  justify-content: space-between;\n  color: #958DB7;\n  margin-bottom: 1em;\n  padding-top: 0.85em;\n  padding-bottom: 1em;\n}\n.eight-ex-pay .small-card .hero .balance .currency {\n  color: black;\n}\n.eight-ex-pay .small-card .hero .give-auth {\n  background-color: #5944EE;\n  border-radius: 0.85em;\n  padding: 0.5em;\n  margin-bottom: 0.5em;\n}\n.eight-ex-pay .small-card .hero .give-auth p {\n  color: white;\n  font-weight: 700;\n}\n.eight-ex-pay .small-card .hero .subscribe {\n  background-color: #5944EE;\n  border-radius: 0.85em;\n  padding: 0.5em;\n  margin-bottom: 0.5em;\n}\n.eight-ex-pay .small-card .hero .subscribe p {\n  color: white;\n  font-weight: 700;\n}\n.eight-ex-pay .small-card .hero .activate {\n  background-color: #5944EE;\n  border-radius: 0.85em;\n  padding: 0.5em;\n  margin-bottom: 0.5em;\n}\n.eight-ex-pay .small-card .hero .activate p {\n  color: white;\n  font-weight: 700;\n}\n.eight-ex-pay .hero-confirm {\n  margin: 0em 2em;\n}\n.eight-ex-pay .hero-confirm .confirmation-logo {\n  text-align: center;\n}\n.eight-ex-pay .hero-confirm .confirmation-logo img {\n  width: 10em;\n}\n.eight-ex-pay .hero-confirm .confirmation-text {\n  text-align: center;\n  font-size: 1.25em;\n  color: black;\n  font-weight: 400;\n  padding-bottom: 1em;\n}\n.eight-ex-pay .hero-confirm .confirmation-text span {\n  font-weight: 600;\n}\n.eight-ex-pay .hero-confirm .receipt {\n  text-align: center;\n  font-size: 0.85em;\n  font-weight: 400;\n  padding-bottom: 1em;\n}\n.eight-ex-pay .hero-confirm .receipt span {\n  font-weight: 600;\n}\n.eight-ex-pay .main-content {\n  align-items: center;\n  text-align: center;\n  margin: 0em 6em;\n  padding: 0.5em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .main-content {\n    margin: 0em 2em;\n  }\n}\n.eight-ex-pay .main-content .main-text {\n  padding: 1em 0em;\n}\n.eight-ex-pay .main-content .main-text #message {\n  font-size: 1.25em;\n  font-weight: 600;\n  line-height: 1.4em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .main-content .main-text #message {\n    font-size: 1.15em;\n  }\n}\n.eight-ex-pay .main-content .main-graphics {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1em 0em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .main-content .main-graphics img {\n    width: 3em;\n  }\n}\n.eight-ex-pay .main-content .main-graphics h2 {\n  font-size: 1.25em;\n  font-weight: 600;\n  font-family: "SFMono-Regular", monospace;\n}\n.eight-ex-pay .main-content .main-graphics p {\n  color: #958DB7;\n  font-weight: 300;\n}\n.eight-ex-pay .main-content .main-graphics .arrow {\n  padding: 0em 1em;\n}\n.eight-ex-pay .main-content .main-graphics .logo {\n  padding-bottom: 0.5em;\n}\n.eight-ex-pay .main-content .secondary-text .title {\n  font-size: 1em;\n  font-weight: 600;\n  padding-bottom: 0.5em;\n}\n.eight-ex-pay .main-content .secondary-text .paragraph {\n  color: #958DB7;\n  font-size: 0.85em;\n  font-weight: 400;\n  padding-bottom: 1em;\n  line-height: 1.6em;\n}\n.eight-ex-pay .button {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  padding-bottom: 2em;\n}\n.eight-ex-pay .button .convert {\n  background-color: #5944EE;\n  border-radius: 0.85em;\n  color: white;\n  font-size: 1em;\n  font-weight: 500;\n  padding: 1em 6em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .button .convert {\n    padding: 0.75em 4em;\n  }\n}\n.eight-ex-pay .content {\n  padding: 1em 0em;\n  align-items: center;\n  text-align: center;\n  margin: 0em 6em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .content {\n    margin: 0em 2em;\n  }\n}\n.eight-ex-pay .content .header-text {\n  padding-bottom: 2em;\n}\n.eight-ex-pay .content .header-text .header-bold {\n  font-size: 1.25em;\n  font-weight: 600;\n  line-height: 1.4em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .content .header-text .header-bold {\n    font-size: 1.15em;\n  }\n}\n.eight-ex-pay .content .header-text .header-small {\n  color: #958DB7;\n  font-weight: 400;\n  font-size: 1em;\n}\n.eight-ex-pay .content .graphic {\n  padding-bottom: 2em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .content .graphic img {\n    width: 5em;\n  }\n}\n.eight-ex-pay .content .subtext .subtext-bold {\n  font-weight: 600;\n  padding-bottom: 0.5em;\n}\n.eight-ex-pay .content .subtext .subtext-small {\n  font-weight: 400;\n  color: #958DB7;\n  font-size: 0.85em;\n  line-height: 1.6em;\n}\n.eight-ex-pay .button {\n  text-decoration: none;\n}\n.eight-ex-pay .button .begin-subscription {\n  background-color: #5944EE;\n  border-radius: 0.85em;\n  color: white;\n  font-size: 1em;\n  font-weight: 500;\n  padding: 1em 4em;\n}\n@media (max-device-width: 450px) {\n  .eight-ex-pay .button .begin-subscription {\n    padding: 0.75em 4em;\n  }\n}'
);

/*

------------------------------------------------------------

Create a .env file and fill in the following variables below

------------------------------------------------------------

# Executor contract address
EXECUTOR = ""

# Transcting token address (that you'd like to stake for)
TRANSACTING_TOKEN = ""

# Volume subscription address
VOLUME_SUBSCRIPTION = ""

# Transfer proxy address
TRANSFER_PROXY = ""

*/
/* App component */

class EightExPay extends React__default.Component {
  constructor(props) {
    super(props);
    let userStore = new UserStore();
    let subscriptionStore = new SubscriptionStore();
    console.log(`New plan hash passed: ${this.props.planHash}`);
    bus.trigger('planhash:sent', props.planHash);
    bus.on('user:activate:completed', (subscriptionHash, status) => {
      if (props.activated) {
        props.activated(subscriptionHash, status);
        bus.trigger('modal:show', false);
      }
    });
  }

  componentDidUpdate() {
    console.log(`New plan hash passed: ${this.props.planHash}`);
    bus.trigger('planhash:sent', this.props.planHash);
  }

  render() {
    return React__default.createElement(
      'div',
      {
        className: 'eight-ex-pay'
      },
      React__default.createElement(
        SimpleModalLauncher,
        {
          buttonLabel: this.props.label || 'Pay with 8x'
        },
        React__default.createElement(
          reactRouterDom.MemoryRouter,
          null,
          React__default.createElement(Container$1, null)
        )
      )
    );
  }
}

module.exports = EightExPay;
