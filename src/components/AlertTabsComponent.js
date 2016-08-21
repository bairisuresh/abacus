'use strict';

import React from 'react';

require('styles//AlertTabs.scss');

class AlertTabsComponent extends React.Component {
  render() {
    return (
		<div className="main-content">
			<div className="block">
				<ul className="nav nav-tabs nav-justified alerts-tab">
					<li className="active"><a data-toggle="tab" href="#today">Today</a></li>
					<li><a data-toggle="tab" href="#recent">Recent</a></li>
					<li><a data-toggle="tab" href="#all">All</a></li>
				  </ul>
				  <div className="tab-content alerts-tab-content">
					<div id="today" className="tab-pane fade in active">
						<div className="today-content">
						  <div className="count">0</div>
						  <h3>My Alerts</h3>
						  <p>Currently, you do not have User Alerts.</p>
						</div>
						<div className="today-content">
						  <div className="count">0</div>
						  <h3>For You, from State Street</h3>
						  <p className="border-none">Currently, you do not have System Alerts.</p>
						</div>
					</div>
					<div id="recent" className="tab-pane fade">
					  <div className="today-content">
						  <div className="count">0</div>
						  <h3>Recent</h3>
						  <p>Currently, you do not have User Alerts.</p>
						</div>
						<div className="today-content">
						  <div className="count">0</div>
						  <h3>Recent</h3>
						  <p className="border-none">Currently, you do not have System Alerts.</p>
						</div>
					</div>
					<div id="all" className="tab-pane fade">
					  <div className="today-content">
						  <div className="count">0</div>
						  <h3>All</h3>
						  <p>Currently, you do not have User Alerts.</p>
						</div>
						<div className="today-content">
						  <div className="count">0</div>
						  <h3>All</h3>
						  <p className="border-none">Currently, you do not have System Alerts.</p>
						</div>
					</div>
				  </div>
			</div>
		</div>      
    );
  }
}

AlertTabsComponent.displayName = 'AlertTabsComponent';

// Uncomment properties you need
// AlertTabsComponent.propTypes = {};
// AlertTabsComponent.defaultProps = {};

export default AlertTabsComponent;
