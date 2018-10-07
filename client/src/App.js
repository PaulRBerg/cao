import React, { Component } from 'react';
import { Router } from '@reach/router';

import Main from './components/Main';
import Set from './components/Set';
import Portal from './components/Portal';
import Contact from './components/Contact';
import Category from './components/Category';
import bus from './bus';

export default class App extends Component {
  constructor(props) {
    super(props);

    bus.hello = 'world';
  }
  render() {
    return (
      <Router>
        <Main path="/" />
        <Set path="/set" />
        <Portal path="/portal" />
        <Contact path="/contact" />
        <Category path="/category" />
      </Router>
    );
  }
}
