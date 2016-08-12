'use strict';

import React from 'react';
import Headroom from 'react-headroom';
require('styles//Header.scss');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
          <Headroom className="headroom--pinned">
                  <a href="javascript:void(0);" className="menu-icon"></a>
                  <span className="icon header-search-icon"></span>
                  <span className="icon header-bell-icon"></span>
          </Headroom>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
