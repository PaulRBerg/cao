import React, { Component } from 'react';
import { Router } from '@reach/router';

import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Main path="/" />
      </Router>
    );
  }
}
