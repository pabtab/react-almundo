import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import { getHotelList } from '../../api/index';

import CardHotel from '../../components/CardHotel/index';
import HotelsListDesktop from './index-desktop';

import './hotel-list.scss';

class HotelsList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: []
    };

    this.searchingFor = this.searchingFor.bind(this)
  }

  componentWillMount() {
    getHotelList().then(res => {
      this.setState({ data: res.data });
    })
      .catch(err => {
        console.log(err)
      })
  }

  searchingFor(x){
    return this.props.searchValues ? 
      x.name.toLowerCase().includes(this.props.searchValues.hotelName.toLowerCase()) || this.props.searchValues.starsFilter.includes(x.stars)
      : null
  }

  render() {
    let data = this.state.data.filter(this.searchingFor);
    return (
      <div className="hotel-list--body">
        <MediaQuery minDeviceWidth={1224}>
          <HotelsListDesktop>
            {this.renderCardHotels(data, 'desktop')}
          </HotelsListDesktop>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          {
            this.renderCardHotels(data, 'mobile')
          }
        </MediaQuery>
      </div>
    );
  }

  renderCardHotels = (data, device) => {
    return data.map((hotelCard, idx) => {
      return <CardHotel data={hotelCard} key={idx} device={device} />
    })
  }

}

export default HotelsList;