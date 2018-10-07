import React from 'react';
import { Container, Text, Link, Section } from '@hackclub/design-system';

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
          <span className="underline">Contact Us</span>
          <Section>
            <Link href="/">
              <Text>asd</Text>
            </Link>
          </Section>
        </Text>
      </Container>
    );
  }
}
