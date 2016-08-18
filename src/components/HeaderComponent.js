'use strict';

import React from 'react';
require('styles//Header.scss');

class HeaderComponent extends React.Component {
  render() {
    return (
        <div className="top-bar">
          <div className="main-menu"></div>
          <h1>Regulatory Resource Center</h1>
          <div className="settings-btn"></div>
          <div className="notifications-btn">
            <span>12</span>
          </div>
        </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
