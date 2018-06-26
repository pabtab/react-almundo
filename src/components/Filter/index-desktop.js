import React, { Component } from 'react';

import './filter-desktop.scss';

class FilterDesktop extends Component {
  render() {
    return (
      <div className="desktop-filter--content">
        <section className="card title">
          <p>Filtros</p>
        </section>
        <section className="card filter">
          <div className="content-head__filter">
            <div className="icon icon--filter"></div>
            <span className="card--title">Nombre de hotel</span>
          </div>
          <div className="content-body__filter">
            <input type="text" className="form-control-plaintext" />
            <button>Aceptar</button>
          </div>
        </section>
        <section className="card filter stars">
          <div className="content-head__filter">
            <div className="icon icon--star"></div>
            <span className="card--title">Estrellas</span>
          </div>
          <div className="content-body__filter">
            <div>
              <input type="checkbox" class="form-check-input" id="checkbox-star" />
              <label class="form-check-label" for="checkbox-star">
                Todas las estrellas
            </label>
            </div>
            <div>
              <input type="checkbox" class="form-check-input" id="checkbox-star" />
              <label class="form-check-label" for="checkbox-star">
                <span className="icon icon--star icon--star__yellow"></span>
              </label>
            </div>
            <div>
              <input type="checkbox" class="form-check-input" id="checkbox-star" />
              <label class="form-check-label" for="checkbox-star">
                <span className="icon icon--star icon--star__yellow"></span>
                <span className="icon icon--star icon--star__yellow"></span>
              </label>
            </div>
            <div>
              <input type="checkbox" class="form-check-input" id="checkbox-star" />
              <label class="form-check-label" for="checkbox-star">
                <span className="icon icon--star icon--star__yellow"></span>
                <span className="icon icon--star icon--star__yellow"></span>
                <span className="icon icon--star icon--star__yellow"></span>
              </label>
            </div>
            <div>
              <input type="checkbox" class="form-check-input" id="checkbox-star" />
              <label class="form-check-label" for="checkbox-star">
                <span className="icon icon--star icon--star__yellow"></span>
                <span className="icon icon--star icon--star__yellow"></span>
                <span className="icon icon--star icon--star__yellow"></span>
                <span className="icon icon--star icon--star__yellow"></span>
              </label>
            </div>
            <div>
              <input type="checkbox" class="form-check-input" id="checkbox-star" />
              <label class="form-check-label" for="checkbox-star">
                <span className="icon icon--star icon--star__yellow"></span>
                <span className="icon icon--star icon--star__yellow"></span>
                <span className="icon icon--star icon--star__yellow"></span>
                <span className="icon icon--star icon--star__yellow"></span>
                <span className="icon icon--star icon--star__yellow"></span>
              </label>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FilterDesktop;