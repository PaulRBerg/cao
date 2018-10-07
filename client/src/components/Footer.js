import React from 'react';
import { Container, Text, Link, Divider } from '@hackclub/design-system';

import '../App.css';

export default class Portal extends React.Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      backgroundColor: 'hitesmoke',
      maxWidth: '100%',
      bottom: '0',
      position: 'inherit'
    };

    const pWeStyle = {
      marginTop: '130px',
      marginBottom: '40px',
      position: 'relative',
      fontFamily: 'Avenir',
      fontSize: '1.3rem',
      fontWeight: '500',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      lineHeight: '1.2'
    };

    return (
      <Container style={containerStyle}>
        <Divider />
        <Text m={3} style={pWeStyle}>
          <Link href="/" color="black" style={{ marginLeft: '110px' }}>
            Home
          </Link>
        </Text>
        <Text m={3} style={pWeStyle}>
          <Link href="/portal" color="black">
            Portal
          </Link>
        </Text>
        <Text m={3} style={pWeStyle}>
          <Link href="/contact" color="black">
            Contact
          </Link>
        </Text>
      </Container>
    );
  }
}
