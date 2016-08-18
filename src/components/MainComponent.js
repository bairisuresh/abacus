'use strict';

import React from 'react';
import Menu from '../containers/BMenu';
import Header from '../containers/Header';

require('styles//Main.scss');


class MainComponent extends React.Component {
  render() {
  	const {actions} = this.props; 
  	const childrenWithProps = React.Children.map(this.props.children,(child) => React.cloneElement(child, {
			actions : actions
		})
	);

    return (
      	<div className='app-container'>
	      	<Header/>
			<div id="outer-container" >
				<Menu pageWrapId={ "wrapper-page" } outerContainerId={ "outer-container" }/>
				<div className="help-space"></div>
				<div id ="wrapper-page" >
					{ childrenWithProps }
				</div>
			</div>
	    </div>
    );
  }
}

MainComponent.displayName = 'MainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;
