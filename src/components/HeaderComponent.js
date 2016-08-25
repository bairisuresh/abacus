'use strict';

import React from 'react';
import {Link} from 'react-router';
import {HOME,SETTINGS, ALERTS} from '../actions/const';
require('styles//Header.scss');

class HeaderComponent extends React.Component {
  getHtmlContet(){
    const {actions,HReducer} = this.props;
    let Home = (
        <div className="top-bar">
          <div className="main-menu"></div>
          <h1>{HReducer.heading}</h1>
          <Link to="/config" >
            <div onClick={()=>{actions.navigateToSettings({state : SETTINGS});actions.actionRouteChange("/config");}} className="settings-btn"></div>
          </Link>
          <Link to="/alerts" >
            <div onClick={()=>{actions.navigateToAlerts({state : ALERTS});actions.actionRouteChange("/alerts");}} className="notifications-btn" >
              <span>12</span>
            </div>
          </Link>
          
        </div>
    ),settings = (
      <div className="configure-btns-wrapper">
        <div className="configure-btns-hldr">
          <a onClick={e=>e.preventDefault()} className="save-btn"><span>Save filter</span></a>
          <h3>Configuration</h3>
        <Link to="/" className="done-btn"  >
          <span onClick={()=>{actions.navigateToHome({state : HOME});actions.actionRouteChange("/");}} >Done</span>
        </Link>
        </div>
      </div>
    ), alerts = (
      <div className="top-bar alerts">
        <Link to="/" >
          <div className="alerts-back" onClick={()=>{actions.navigateToHome({state : HOME});actions.actionRouteChange("/");}} ></div>
        </Link>
        <h1>Alerts</h1>
      </div>    
    );
    switch(HReducer.data.state){
      case HOME:
        return Home;
      case SETTINGS:
        return settings;
      case ALERTS:
        return alerts;
      default : 
      return Home
    }
  }
  render() {
    
    return this.getHtmlContet();
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
