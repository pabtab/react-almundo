import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.scss';

import Header from './components/Header/index';
import Filter from './components/Filter/index';
import FilterDesktop from './components/Filter/index-desktop';
import HotelsList from './containers/Hotels-list/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App--body">
          <MediaQuery minDeviceWidth={1020}>
            <aside className="filters">
              <FilterDesktop />
            </aside>
            <section className="body">
              <HotelsList />
            </section>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1020}>
            <Filter />
            <HotelsList />
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default App;
