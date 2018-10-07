import React from 'react';
import { Container, Text, Button } from '@hackclub/design-system';

// import Footer from './Footer';

import '../App.css';
import data from '../emoji.json';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.setState({ data: data });
  }

  render() {
    const { data } = this.state;

    const pWeStyle = {
      marginTop: '100px',
      marginBottom: '40px',
      position: 'relative',
      fontFamily: 'Avenir',
      fontSize: '1.9rem',
      fontWeight: '800',
      alignItems: 'center',
      textAlign: 'center',
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
          <span className="underline">Select items for the new category</span>
        </Text>
        <div className="Search">
          <form>
            <input placeholder="Enter name ..." />
          </form>
          <Button style={ButtonStyle}>Create</Button>
        </div>
        <React.Fragment />
        {data.map((foo, index) => (
          <div className="Category">
            <span aria-label={foo.label} role="img" key={index}>
              {foo.emoji}
            </span>
          </div>
        ))}
      </Container>
    );
  }
}
