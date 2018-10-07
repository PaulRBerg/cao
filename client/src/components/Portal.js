import React from 'react';
import {
  Container,
  Text,
  Flex,
  Image,
  Button,
  Link
} from '@hackclub/design-system';

import Footer from './Footer';

import '../App.css';

export default class Portal extends React.Component {
  render() {
    const pWeStyle = {
      marginTop: '50px',
      marginBottom: '50px',
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

    return (
      <Container>
        <Text style={pWeStyle}>
          <span className="underline">Right now, the CAO has</span>
          <br />
          <span className="underline">$3,141,592 to allocate</span>
        </Text>
        <Container px={3} pb={20} style={{ marginTop: '40px' }}>
          <Flex mx={[1, 2]} wrap justify="center">
            <Image
              Responsive
              src={require('../assets/images/table.png')}
              alt="table"
              style={imageStyle}
            />
            <table>
              <tr>
                <th>Bundle</th>
                <th>Percent Allocation</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>Natural Disaster</td>
                <td>10%</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Clothing Basics</td>
                <td>10%</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Stranded Survival</td>
                <td>10%</td>
                <td>10%</td>
              </tr>
            </table>
          </Flex>
        </Container>
        <div style={centerStyle}>
          <Link href="/category">
            <Button style={ButtonStyle}>Allocate Resources</Button>
          </Link>
        </div>
        <Footer />
      </Container>
    );
  }
}
