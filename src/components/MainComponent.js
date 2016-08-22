'use strict';

import React from 'react';
import Menu from '../containers/BMenu';
import HeaderCont from '../containers/Header';

require('styles//Main.scss');


class MainComponent extends React.Component {
  render() {
  	console.log("MainComponent loaded");
    return (
      	<div className='app-container'>
	      	<HeaderCont/>
			<div id="outer-container" className="outer-container" >
				<Menu pageWrapId={ "wrapper-page" } outerContainerId={ "outer-container" }/>
				<div className="help-space"></div>
				<div id ="wrapper-page" className="wrapper-page" >
					{ this.props.children }
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
