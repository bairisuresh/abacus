'use strict';

import React from 'react';
import {Link} from 'react-router'
require('styles//Header.scss');

class HeaderComponent extends React.Component {
  render() {
    const {actions,Header} = this.props;
    return (
        <div className="top-bar">
          <div className="main-menu"></div>
          <h1>{Header.heading}</h1>
          <Link to="/config" >
            <div onClick={()=>{actions.navigateToAlerts({});}} className="settings-btn"></div>
          </Link>
          <Link to="/alerts" >
            <div onClick={()=>{actions.navigateToSettings({});}} className="notifications-btn" >
              <span>12</span>
            </div>
          </Link>
          
        </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
