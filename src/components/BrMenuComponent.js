'use strict';

import React from 'react';
import MenuObject from 'react-burger-menu';
import { Link } from 'react-router';
import {ALERTS, HOME} from '../actions/const';
require('styles/BrMenu.scss');

class BrMenuComponent extends React.Component {
  render() {
    
    const { actions, custIcon } = this.props;
    const {actionRouteChange, navigateToAlerts, switchToClick} = actions;
    const Menu = MenuObject.slide;
    console.log("isOpen>>> ",custIcon);
    console.log("\n\n\n\n her in bmenu updation \n\n\n\n");    
    return (
    <Menu isOpen={this.props.isOpen} customBurgerIcon={ this.props.custIcon } 
    pageWrapId={ actions.pageWrapId } outerContainerId = {actions.outerContainerId} >
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
			<li onClick={(e)=> {switchToClick({tab:'landingPage'}); }}><Link to="/" >Home</Link></li>
			<li onClick={(e)=> {switchToClick({tab:'events'}); }}><a  onClick={(e)=> {e.preventDefault();}}>Events</a></li>
			<li onClick={(e)=> {switchToClick({tab:'experts'}); }}><a  onClick={(e)=> {e.preventDefault();}}>Experts</a></li>
			<li onClick={(e)=> {switchToClick({tab:'regulations'}); }}><a  onClick={(e)=> {e.preventDefault();}}>Regulations</a></li>
			<li onClick={(e)=> {switchToClick({tab:'solutions'}); }}><a  onClick={(e)=> {e.preventDefault();}}>Solutions</a></li>
			<li onClick={(e)=> {switchToClick({tab:'whitepapers'}); }}><a  onClick={(e)=> {e.preventDefault();}}>Whitepapers</a></li>
			<li onClick={(e)=> {switchToClick({tab:'news'}); }}><a  onClick={(e)=> {e.preventDefault();}}>News</a></li>
		</ul>
		<ul className="slide-menu-links">
			<li ><a  onClick={(e)=> {e.preventDefault();}}>My Profile</a></li>
			<li onClick={(e)=> {e.preventDefault();actionRouteChange("/alerts"); navigateToAlerts({state : ALERTS});}} ><a  onClick={(e)=> {e.preventDefault();}}><span>My Alerts</span></a></li>
			<li ><a  onClick={(e)=> {e.preventDefault();}} className="lang" >English (US)</a></li>
		</ul>
		
		<ul className="slide-menu-links menu-logout">
			<li ><a  onClick={(e)=> {e.preventDefault();}} >Log Out</a></li>		
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
