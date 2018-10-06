import React from 'react';
import { Container, Flex, Text, Image } from '@hackclub/design-system';
import EightExPay from '8x.pay';

import '../App.css';

export default class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onClick = this.onClick.bind(this);
  // }

  // onClick(event) {
  //   return <EightExPay planHash="" label='Pay'/>
  // }

  render() {
    const ContainerStyle = {
      height: '60vh',
      maxWidth: '100%'
    };

    const pTitleStyle = {
      marginTop: '30px',
      position: 'relative',
      left: '50px',
      fontFamily: 'Avenir',
      fontSize: '25px',
      fontWeight: '700'
    };

    const pGiveStyle = {
      marginTop: '30px',
      position: 'relative',
      left: '30px',
      fontFamily: 'Avenir',
      fontSize: '55px',
      fontWeight: '800',
      lineHeight: '1.1'
    };

    const pTheWorldStyle = {
      marginTop: '30px',
      position: 'relative',
      left: '30px',
      fontFamily: 'Avenir',
      fontSize: '25px',
      fontWeight: '700'
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

    return (
      <div className="main">
        <Container p={4} bg="snow" style={ContainerStyle}>
          <Text style={pTitleStyle}>CAO</Text>
          <Text style={pGiveStyle}>
            <span className="underline">Give back, </span>
            <br />
            <span className="underline"> with crypto</span>
          </Text>
          <Text style={pTheWorldStyle}>
            The world needs more people to play their part.
          </Text>
          <Flex mx={[1, 2]} wrap justify="left" style={ButtonStyle}>
            <EightExPay planHash="" label="Donate $10/month" />
          </Flex>
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
        <Container px={3} pb={20} style={{ marginTop: '40px' }}>
          <Flex mx={[1, 2]} wrap justify="center">
            <Image
              Responsive
              src={require('../assets/natural.png')}
              alt="natural disaster"
              style={imageStyle}
            />
            <Image
              src={require('../assets/clothing.png')}
              alt="clothing basics"
              style={imageStyle}
            />
            <Image
              src={require('../assets/stranded.png')}
              alt="stranded survival"
              style={imageStyle}
            />
          </Flex>
        </Container>
      </div>
    );
  }
}
