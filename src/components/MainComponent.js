'use strict';

import React from 'react';
import Menu from '../containers/BMenu';
import HeaderCont from '../containers/Header';

require('styles//Main.scss');


class MainComponent extends React.Component {
  render() {
  	const {actions, BMReducer, HReducer, FDataReducer} = this.props; 
  	const headertProps = {actions,HReducer};
  	console.error('headertProps ',headertProps);
  	console.error("MainComponent ",{actions,BMReducer, HReducer});
  	const childrenWithProps = React.Children.map(this.props.children,(child) => React.cloneElement(child, {
			actions,
			BMReducer,
			HReducer,
			FDataReducer
		})
	);
    return (
      	<div className='app-container'>
	      	<HeaderCont {...headertProps}/>
			<div id="outer-container" className="outer-container" >
				<Menu pageWrapId={ "wrapper-page" } outerContainerId={ "outer-container" }/>
				<div className="help-space"></div>
				<div id ="wrapper-page" className="wrapper-page" >
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
