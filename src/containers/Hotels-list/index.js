import React, { Component } from 'react';

import Card from '../../components/Card/index';
import dataJson from '../../data.json';

import './hotel-list.scss';

class HotelsList extends Component {

  render() {
    console.log(dataJson)
    return (
      <div className="hotel-list--body">
        {
          dataJson.map((hotelCard, idx) => {
            return <Card data={hotelCard} key={idx} />
          })
        }
      </div>
    );
  }
}

export default HotelsList;