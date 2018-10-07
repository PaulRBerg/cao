import React, { Component } from 'react';
import { Router } from '@reach/router';

import Main from './components/Main';
import Set from './components/Set';
import Portal from './components/Portal';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Main path="/" />
        <Set path="/set" />
        <Portal path="/portal" />
        <Contact path="/contact" />
      </Router>
    );
  }
}
