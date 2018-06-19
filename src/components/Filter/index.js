import React, { Component } from 'react';

import './filter.scss';

class Filter extends Component {
  render() {
    return (
      <section className="filter--header">
        <p>Filtrar</p>
        <span className="filter--header__arrow-down"></span>
      </section>
    );
  }
}

export default Filter;