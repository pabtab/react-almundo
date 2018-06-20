import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    let { name, stars, price, image, amenities } = this.props.data;
    return (
      <div className="card">
        <img className="card-img-top" src={require(`../../images/hotels/${image}`)} alt={`Card ${name}`} />
        <div className="card-body">
          <section>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {[...Array(stars)].map(() => {
                return <img src={require(`../../icons/filters/star.svg`)} alt="star" />
              })}
            </p>
            <p className="card-text">
              {
                amenities.map(el => {
                  return <img className="card--amenities-img" src={require(`../../icons/amenities/${el}.svg`)} alt={`Amenities`} />
                })
              }
            </p>
          </section>
          { this.props.device === 'desktop' && <hr /> }
          <p className="card-text-pay">
            <span >Precio por noche por habitación</span>
            <h2>ARS {Math.round(price)}</h2>
            <button>Ver Hotel</button>
          </p>
        </div>
      </div>
    );
  }

}

export default Card;