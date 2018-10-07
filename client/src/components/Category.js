import React from 'react';
import { Container, Text, Button } from '@hackclub/design-system';

import Footer from './Footer';

import '../App.css';
import tokens from '../tokens.js';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: [] };
  }

  componentDidMount() {
    this.setState({ category: 'someCategory' });
  }

  render() {
    const { category } = this.state;

    console.log(category);

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
            <input placeholder="Enter name ..." />
          </form>
          <Button style={ButtonStyle}>Create</Button>
        </div>
        <React.Fragment />
        {tokens.map((foo, index) => (
          <div className="Category">
            <span
              className="emoji"
              aria-label={foo.name}
              role="img"
              key={index}
            >
              {foo.symbol}
            </span>
          </div>
        ))}
        <Footer />
      </Container>
    );
  }
}
