import React from 'react';
import { Container, Text } from '@hackclub/design-system';

import Footer from './Footer';

import '../App.css';

export default class Contact extends React.Component {
  render() {
    const pWeStyle = {
      marginTop: '130px',
      marginBottom: '40px',
      position: 'relative',
      fontFamily: 'Avenir',
      fontSize: '1.9rem',
      fontWeight: '800',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      lineHeight: '1.2',
      color: 'black'
    };

    return (
      <Container>
        <Text style={pWeStyle}>
          <span className="underline">Select items for the new category</span>
        </Text>
        <Footer />
      </Container>
    );
  }
}
