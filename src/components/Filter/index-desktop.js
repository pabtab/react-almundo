import React, { Component } from 'react';

import './filter-desktop.scss';

const STARS = [1, 2, 3, 4, 5]


class FilterDesktop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      starsFilter: [],
      valueSearch: ''
    }

    this.stars = [
    {
      1: false
    }, {
      2: false
    }, { 
      3: false
    }, { 
      4: false
    }, { 
      5: false
    }]

    this.handlerChangeSearch = this.handlerChangeSearch.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleStarsCheckbox = this.handleStarsCheckbox.bind(this);

  }

  handlerChangeSearch(evt) {
    this.setState({ valueSearch: evt.target.value});
  }

  handleSearchButton() {
    this.props.searchValues(this.state.valueSearch, [])
  }

  handleStarsCheckbox(evt){
    if(evt.target.name === 'all') {

    } else {
      this.stars[evt.target.name][evt.target.value] = evt.target.checked;
      console.log(this.stars)
    }
  }

  createCheckBox() {
    return STARS.map(elem => {
      return (
        <div>
          <input type="checkbox" class="form-check-input" value={elem} name={elem-1} id="checkbox-star" onChange={this.handleStarsCheckbox} checked={this.stars[0][elem+1]}/>
          <label class="form-check-label" for="checkbox-star">
            {
              this.setNumberStars(elem)
            }
          </label>
        </div>
      )
    })
  }

  setNumberStars(elem) {
    let starsNumber = [];
    for (let i = 0; i < elem; i++) {
      starsNumber.push(<span className="icon icon--star icon--star__yellow"></span>) 
    }

    return starsNumber;
  }

  render() {
    return (
      <div className="desktop-filter--content">
        <section className="card lateral title">
          <p>Filtros</p>
        </section>
        <section className="card lateral filter">
          <div className="content-head__filter">
            <div className="icon icon--filter"></div>
            <span className="card--title">Nombre de hotel</span>
          </div>
          <div className="content-body__filter">
            <input type="text"
              className="form-control"
              placeholder="Ingrese el nombre del hotel"
              onChange={this.handlerChangeSearch} 
              value={this.state.valueSearch}/>
            <button onClick={this.handleSearchButton}>Aceptar</button>
          </div>
        </section>
        <section className="card lateral filter stars">
          <div className="content-head__filter">
            <div className="icon icon--star"></div>
            <span className="card--title">Estrellas</span>
          </div>
          <div className="content-body__filter">
            <div>
              <input type="checkbox" class="form-check-input" id="checkbox-star" value="all" onChange={this.handleStarsCheckbox} checked/>
              <label class="form-check-label" for="checkbox-star">
                Todas las estrellas
            </label>
            </div>
            { this.createCheckBox() }
          </div>
        </section>
      </div>
    );
  }
}

export default FilterDesktop;