import React, { Component } from 'react';
import logo from '../../images/logo-almundo.svg';

import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;