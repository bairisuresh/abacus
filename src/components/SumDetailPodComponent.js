'use strict';

import React from 'react';

require('styles//SumDetailPod.scss');

class SumDetailPodComponent extends React.Component {
  render() {
    return (
		<li>
			<p className="event-label">Event</p>
			<h2 className="event-title">NEW TEST EVENT by SQA 5/27/2016</h2>
			<p className="post-name">JQB, Quincy, MA</p>
			<p className="event-date">07/25/2016</p>
			<div className="register-btn active">
				<p>Registered</p>
			</div>
		</li>
    );
  }
}

SumDetailPodComponent.displayName = 'SumDetailPodComponent';

// Uncomment properties you need
// SumDetailPodComponent.propTypes = {};
// SumDetailPodComponent.defaultProps = {};

export default SumDetailPodComponent;
