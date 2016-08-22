'use strict';

import React from 'react';
import MenuObject from 'react-burger-menu';
import { Link } from 'react-router';
import {ALERTS, HOME} from '../actions/const';
require('styles/BrMenu.scss');

class BrMenuComponent extends React.Component {
  render() {
    
    const { actions, custIcon } = this.props;
    const {actionRouteChange, navigateToAlerts, navigateToHome, switchToClick} = actions;
    const Menu = MenuObject.slide;
    console.error("isOpen>>> ",custIcon);
    return (
    <Menu isOpen={this.props.isOpen} customBurgerIcon={ this.props.custIcon } pageWrapId={ actions.pageWrapId } outerContainerId = {actions.outerContainerId} >
		<div className="profile-details-wrapper">
			<div className="profile-details-hldr">
				<div className="profile-details">
					<div className="profile-pic"><img src="./images/profile_pic.png" alt="" /></div>
					<div className="profile-info">
						<p>John Doe</p>
						<span>11:51 EST</span>
					</div>
				</div>
			</div>
		</div>
		
		<div className="menu-search-form">
			<form role="form">
				<div className="form-group">
				  <input type="text" className="form-control" placeholder="Search" />
				</div>
			 </form>
		</div>
		<ul className="slide-menu-links marg-b-30">
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/");navigateToHome({state : HOME})}}><Link to="/" >Home</Link></li>
			<li onClick={(e)=> {actionRouteChange("/"); switchToClick({click:'events'}); }}><a  onClick={(e)=> {e.preventDefault();}}>Events</a></li>
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/experts")}}><Link to="/experts" >Experts</Link></li>
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/regulations")}}><Link to="/regulations" >Regulations</Link></li>
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/solutions")}}><Link to="/solutions" >Solutions</Link></li>
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/whitepapers")}}><Link to="/whitepapers" >Whitepapers</Link></li>
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/news")}}><Link to="/news" >News</Link></li>
		</ul>
		<ul className="slide-menu-links">
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/myprofile")}}><Link to="/myprofile" >My Profile</Link></li>
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/alerts"); navigateToAlerts({state : ALERTS});}} ><Link to="/alerts" ><span>My Alerts</span></Link></li>
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/englishus")}}><Link to="/englishus" className="lang" >English (US)</Link></li>
		</ul>
		
		<ul className="slide-menu-links menu-logout">
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/logout")}}><Link to="/logout"  >Log Out</Link></li>			
		</ul>  
    </Menu>
    );
  }
}

BrMenuComponent.displayName = 'BrMenuComponent';

// Uncomment properties you need
BrMenuComponent.propTypes = { custIcon: React.PropTypes.bool};
// BrMenuComponent.defaultProps = {};

export default BrMenuComponent;
