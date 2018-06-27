import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.scss';

import Header from './components/Header/index';
import Filter from './components/Filter/index';
import FilterDesktop from './components/Filter/index-desktop';
import HotelsList from './containers/Hotels-list/index';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchingValues: {
        hotelName: '',
        stars: [1, 2, 3, 4, 5]
      }
    }

    this.getSearchingValues = this.getSearchingValues.bind(this);
  }

  getSearchingValues(hotelName, stars) {
    console.log(stars);
    this.setState({
      searchingValues: {
        hotelName, 
        stars
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App--body">
          <MediaQuery minDeviceWidth={1020}>
            <aside className="filters">
              <FilterDesktop searchValues={this.getSearchingValues}/>
            </aside>
            <section className="body">
              <HotelsList searchValues={this.state.searchingValues}/>
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
