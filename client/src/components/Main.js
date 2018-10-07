import React from 'react';
import {
  Container,
  Flex,
  Text,
  Image,
  BackgroundImage
} from '@hackclub/design-system';
import EightExPay from '8x.pay';

import Footer from './Footer';
import PortalButton from './PortalButton';

import '../App.css';

export default class Main extends React.Component {
  render() {
    const ContainerStyle = {
      height: '81vh',
      maxWidth: '100%',
      backgroundColor: 'transparent'
    };

    const poweredContainerStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '23px',
      opacity: '0.75',
      fontWeight: '500',
      display: 'contents'
    };

    const pTitleNameStyle = {
      marginBottom: '6px',
      fontSize: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    };

    const pTitleStyle = {
      position: 'relative',
      top: '20px',
      left: '50px',
      fontFamily: 'Avenir',
      fontSize: '25px',
      fontWeight: '700',
      color: 'white'
    };

    const pGiveStyle = {
      marginTop: '80px',
      position: 'relative',
      left: '30px',
      fontFamily: 'Avenir',
      fontSize: '55px',
      fontWeight: '800',
      lineHeight: '1.1',
      color: 'white'
    };

    const pTheWorldStyle = {
      marginTop: '30px',
      position: 'relative',
      left: '30px',
      fontFamily: 'Avenir',
      fontSize: '25px',
      fontWeight: '700',
      color: 'white',
      maxWidth: '80%'
    };

    const pWeStyle = {
      marginTop: '70px',
      marginBottom: '70px',
      position: 'relative',
      fontFamily: 'Avenir',
      fontSize: '1.8rem',
      fontWeight: '900',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      lineHeight: '1.2'
    };

    const ButtonStyle = {
      marginLeft: '30px',
      marginTop: '15px'
    };

    const pAllMoneyStyle = {
      marginTop: '30px',
      position: 'relative',
      fontFamily: 'Avenir',
      fontSize: '1rem',
      fontWeight: '300',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    };

    const imageStyle = {
      width: '280px',
      height: '280px',
      marginRight: '25px',
      marginTop: '10px'
    };

    const imageSectionStyle = {
      width: '594px',
      height: '290px'
    };

    const logoImageStyle = {
      width: '57px',
      height: '28px',
      marginTop: '10px',
      marginLeft: '3px',
      display: 'inline-flex',
      verticalAlign: 'bottom'
    };

    return (
      <div className="main">
        <Container style={{ maxWidth: '100%', width: '100%' }}>
          <PortalButton />
          <BackgroundImage
            src={require('../assets/bg.png')}
            aria-label="kids"
            style={ContainerStyle}
          >
            <Container style={{ maxWidth: '84rem' }}>
              <Text style={pTitleStyle}>CAO</Text>
              <Text style={pGiveStyle}>
                Give back,
                <br />
                with crypto
              </Text>
              <Text style={pTheWorldStyle}>
                The world needs more people to play their part.
              </Text>
              <Flex mx={[1, 2]} wrap justify="left" style={ButtonStyle}>
                <EightExPay planHash="" label="Donate $10/month" />
              </Flex>
            </Container>
          </BackgroundImage>
        </Container>
        <Container>
          <Text style={pWeStyle}>
            <span className="underline">We don't donate money, </span>
            <br />
            <span className="underline"> we donate resources.</span>
          </Text>
        </Container>
        <Container style={{ width: '530px' }}>
          <Text style={pAllMoneyStyle}>
            All money donated to the Charitable Autonomous Organisation is
            allocated to different token sets at the end of every month.
          </Text>
        </Container>
        <Container style={poweredContainerStyle}>
          <Text style={{ opacity: '0.75' }}>
            Powered by:{' '}
            <Image
              src={require('../assets/set-logo.png')}
              alt="set logo"
              style={logoImageStyle}
            />
          </Text>
        </Container>
        <Container px={3} pb={20} style={{ marginTop: '40px' }}>
          <Flex mx={[1, 2]} wrap justify="center">
            <div>
              <Image
                Responsive
                src={require('../assets/natural.png')}
                alt="natural disaster"
                style={imageStyle}
              />
              <Text style={pTitleNameStyle}>Natural Disaster</Text>
            </div>
            <div>
              <Image
                src={require('../assets/clothing.png')}
                alt="clothing basics"
                style={imageStyle}
              />
              <Text style={pTitleNameStyle}>Clothing Basics</Text>
            </div>
            <div>
              <Image
                src={require('../assets/stranded.png')}
                alt="stranded survival"
                style={imageStyle}
              />
              <Text style={pTitleNameStyle}>Stranded Survival</Text>
            </div>
          </Flex>
        </Container>
        <Container px={3} pb={20} style={{ marginTop: '40px' }}>
          <Flex mx={[1, 2]} wrap justify="center">
            <Text style={pWeStyle}>
              <span className="underline">This month's CAO allocation</span>
            </Text>
            <Image
              Responsive
              src={require('../assets/section.png')}
              alt="section"
              style={imageSectionStyle}
            />
          </Flex>
        </Container>
        <Footer />
      </div>
    );
  }
}
