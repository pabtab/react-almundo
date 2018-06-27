import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import { getHotelList } from '../../api/index';
import PropTypes from 'prop-types';

import CardHotel from '../../components/CardHotel/index';
import HotelsListDesktop from './index-desktop';

import './hotel-list.scss';

class HotelsList extends Component {

  static proptypes = {
    searchValues: PropTypes.objectOf(
      PropTypes.string,
      PropTypes.array
    )
  }

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
    let { hotelName, stars } = this.props.searchValues;

    if(hotelName && stars) {
      return x.name.toLowerCase().includes(hotelName.toLowerCase()) && stars.includes(x.stars);

    } else if(hotelName) {
      return x.name.toLowerCase().includes(hotelName.toLowerCase())

    } else if(stars) {
      return stars.includes(x.stars)
    }

    return x;
  }

  render() {
    let data = this.state.data.filter(this.searchingFor);
    console.log(data);
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