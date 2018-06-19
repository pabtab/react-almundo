import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header/index';
import Filter from './components/Filter/index';
import HotelsList from './containers/Hotels-list/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Filter/>
        <HotelsList/>
      </div>
    );
  }
}

export default App;
