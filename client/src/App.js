import React, { Component } from 'react';
import { Router } from '@reach/router';

import Main from './components/Main';
import Set from './components/Set';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Main path="/" />
        <Set path="/set" />
      </Router>
    );
  }
}
