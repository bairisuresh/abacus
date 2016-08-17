'use strict';

import React from 'react';
import MenuObject from 'react-burger-menu';
require('styles//BrMenu.scss');

class BrMenuComponent extends React.Component {
  render() {
  	const { actions } = this.props;
    const Menu = MenuObject.slide;
	return (
		<Menu actions={actions} pageWrapId={ actions.pageWrapId } outerContainerId = {actions.outerContainerId} >
		  <a id="home" className="menu-item" href="/">Home</a>
		  <a id="about" className="menu-item" href="/config">Alerts</a>
		  <a id="contact" className="menu-item" href="/alerts">Settings</a>
		  <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
		</Menu>
     );
  }
}

BrMenuComponent.displayName = 'BrMenuComponent';

// Uncomment properties you need
// BrMenuComponent.propTypes = {};
// BrMenuComponent.defaultProps = {};

export default BrMenuComponent;
