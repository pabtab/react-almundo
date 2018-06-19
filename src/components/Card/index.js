import React, { Component } from 'react';
import PropTypes from 'prop-types';

import imagen from '../../images/hotels/897079_215_b.jpg'
import star from '../../icons/filters/star.svg'
import bath from '../../icons/amenities/bathrobes.svg'

import './card.scss';

class Card extends Component {

  static propTypes = {
    name: PropTypes.string,
    stars: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    amenities: PropTypes.array
  }

  render() {
    let {name, stars, price, image, amenities} = this.props.data;
    console.log(`../../images/hotels/${image}`)
    return (
      <div className="card">
        <img className="card-img-top" src={imagen} alt={`Card ${name}`} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            { [...Array(stars)].map(() => {
              return <img src={star}/>
            })}
          </p>
          <p className="card-text">
            {
              amenities.map( el => {
                return <img className="card--amenities-img" src={bath}/>
              })
            }
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    );
  }
}

export default Card;