import React, { Component } from 'react';

import './filter-desktop.scss';

const STARS = [1, 2, 3, 4, 5]


class FilterDesktop extends Component {

  constructor(props) {
    super(props);

    this.initialStateStars = [
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

    this.state = {
      starsFilter: [],
      valueSearch: '',
      allStarsCheckbox: true,
      stars: this.initialStateStars
    }

    this.handlerChangeSearch = this.handlerChangeSearch.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleStarsCheckbox = this.handleStarsCheckbox.bind(this);

  }

  handlerChangeSearch(evt) {
    this.setState({ valueSearch: evt.target.value});
  }

  handleSearchButton() {
    let {valueSearch, starsFilter } = this.state;
    this.props.searchValues(valueSearch, starsFilter)
  }

  handleStarsCheckbox(evt){
    if(evt.target.name === 'all') {
      this.setState({ allStarsCheckbox: true, stars: [...this.initialStateStars] }, () => this.setFilter(STARS))
      

    } else {
      let tempArrayStars = [...this.state.stars];
      tempArrayStars[evt.target.value] = {[evt.target.name]: evt.target.checked};

      this.setState({ 
        allStarsCheckbox: false, 
        stars: tempArrayStars
      }, () => { 
        this.setFilter(this.getStarsChoosen())
      })
      
    }
     
  }

  setFilter(starsFilter) {
    console.log(this.state.stars)
    this.setState({ starsFilter: starsFilter}, this.handleSearchButton);
  }

  getStarsChoosen() {
    return this.state.stars.filter( (el, id) => {
      return el[id+1];
    })
    .map( el => {
      return Number(Object.keys(el));
    })
  }

  createCheckBox() {
    return STARS.map((elem, id) => {
      console.log('Vuelve')
      return (
        <div>
          <input type="checkbox" class="form-check-input" value={elem-1} name={elem} id="checkbox-star" onChange={this.handleStarsCheckbox} checked={this.state.stars[id][elem]}/>
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
              <input type="checkbox" class="form-check-input" id="checkbox-star" name="all" onChange={this.handleStarsCheckbox} checked={this.state.allStarsCheckbox}/>
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