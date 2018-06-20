import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './hotel-list.scss';

class HotelsListDesktop extends Component {

  static proptypes = {
    data: PropTypes.array
  }

  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default HotelsListDesktop;