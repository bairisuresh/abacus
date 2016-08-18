'use strict';

import React from 'react';
import Item from '../containers/DataPod'

require('styles//HtabContent.scss');


class HtabContentComponent extends React.Component {
  render() {
    return (
		<div className="main-content light-bg">
			<div className="block overflow-vertical">
				<ul className="events">
					<Item/>
					<Item/><Item/><Item/><Item/><Item/><Item/><Item/>					
				</ul>
			</div>
		</div>    	
    );
  }
}

HtabContentComponent.displayName = 'HTabContentComponent';

// Uncomment properties you need
// HtabContentComponent.propTypes = {};
// HtabContentComponent.defaultProps = {};

export default HtabContentComponent;
