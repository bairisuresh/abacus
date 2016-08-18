'use strict';

import React from 'react';
import MenuObject from 'react-burger-menu';
import { Link } from 'react-router';
require('styles//BrMenu.scss');

class BrMenuComponent extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			isOpen : false
		}
	}
	render() {
		const { actions } = this.props;
		const Menu = MenuObject.slide;
		return (
		<Menu isOpen={this.state.isOpen}  actions={actions}  pageWrapId={ actions.pageWrapId } outerContainerId = {actions.outerContainerId} >
		  <Link to="/"><div onClick={()=>{actions.routeChanged("/");this.setState({isOpen : false});}}>Home</div></Link>
		  <Link to="/alerts"><div onClick={()=>{actions.routeChanged("/alerts");this.setState({isOpen : false});}}>Alerts</div></Link>
		  <Link to="/config"><div onClick={()=>{actions.routeChanged("/config");this.setState({isOpen : false});}}>Settings</div></Link>
		</Menu>
		);
	}
}

BrMenuComponent.displayName = 'BrMenuComponent';

// Uncomment properties you need
// BrMenuComponent.propTypes = {};
// BrMenuComponent.defaultProps = {};

export default BrMenuComponent;
