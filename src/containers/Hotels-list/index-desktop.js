import React, { Component } from 'react';

import './hotel-list.scss';

class HotelsListDesktop extends Component {

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