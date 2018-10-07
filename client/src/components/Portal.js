import React from 'react';
import { Container, Text, Flex, Image } from '@hackclub/design-system';

import Footer from './Footer';

import '../App.css';

export default class Portal extends React.Component {
  render() {
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

    const imageStyle = {
      width: '730px',
      height: '435px',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    };

    return (
      <Container>
        <Text style={pWeStyle}>
          <span className="underline">Right now, the CAO has</span>
          <br />
          <span className="underline">$2,123,843 to allocate</span>
        </Text>
        <Container px={3} pb={20} style={{ marginTop: '40px' }}>
          <Flex mx={[1, 2]} wrap justify="center">
            <Image
              Responsive
              src={require('../assets/table.png')}
              alt="table"
              style={imageStyle}
            />
          </Flex>
        </Container>
        <Footer />
      </Container>
    );
  }
}
