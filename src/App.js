import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.scss';

import Header from './components/Header/index';
import Filter from './components/Filter/index';
import HotelsList from './containers/Hotels-list/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MediaQuery minDeviceWidth={1020}>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1020}>
          <Filter />
        </MediaQuery>
        <HotelsList />
      </div>
    );
  }
}

export default App;
