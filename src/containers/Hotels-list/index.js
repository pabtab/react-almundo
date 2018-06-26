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
    return this.props.searchValues ? x.name.toLowerCase().includes(this.props.searchValues.hotelName.toLowerCase()) : null
  }

  render() {
    let data = this.state.data
    return (
      <div className="hotel-list--body">
        <MediaQuery minDeviceWidth={1224}>
          <HotelsListDesktop data={data.filter(this.searchingFor)}>
            {this.renderCardHotels('desktop')}
          </HotelsListDesktop>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          {
            this.renderCardHotels('mobile')
          }
        </MediaQuery>
      </div>
    );
  }

  renderCardHotels = (device) => {
    return this.state.data.map((hotelCard, idx) => {
      return <CardHotel data={hotelCard} key={idx} device={device} />
    })
  }

}

export default HotelsList;