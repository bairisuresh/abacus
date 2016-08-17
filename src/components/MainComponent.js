'use strict';

import React from 'react';
import Menu from '../containers/BMenu';
import Header from '../containers/Header';

require('styles//Main.scss');


class MainComponent extends React.Component {
  render() {
    return (
      	<div className='app-container'>
	      	<Header/>
			<div id="outer-container" >
				<Menu pageWrapId={ "wrapper-page" } outerContainerId={ "outer-container" }/>
				<div id ="wrapper-page" >
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
