'use strict';

import React from 'react';
import {Html5Entities} from 'html-entities';
import classNames from 'classnames';

require('styles//SumDetailPod.scss');

class SumDetailPodComponent extends React.Component {
	constructor(props,context){
		super(props,context);
	}
  render() {
  	let eDate = "",eLocation = "", etitle ="";
  	const {btnClass, changeSelection, getPodImage, fields, showDetailView} = this.props;
  	if(fields.pubdate && fields.pubdate[0]){  			
		let date = new Date(fields.pubdate[0])
  		eDate = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
  	}else if(fields.startDate && fields.startDate[0]){
  		let date = new Date(fields.startDate[0])
  		eDate = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
  	}	  		
	eLocation = fields.eventLocation ?fields.eventLocation[0] : "JQB, Quincy, MA";
	etitle = fields.title ? Html5Entities.decode(fields.title[0]) :""; 
    return (
		<li className="detail-pod-compu">
			<span className = "pod-bg-image" style={getPodImage(fields.feed[0])}></span>
			<p className="event-label">{fields.feed[0]}</p>
			<h2 className="event-title" onClick={showDetailView}>{etitle}</h2>
			<p className="post-name">{eLocation}</p>
			<p className="event-date">{eDate}</p>
			<div className={classNames({
					      'register-btn': true,
					      'active': fields.selected
					    })}
    		 onClick = { changeSelection} >
				<span className="p-before" style={btnClass(fields.feed[0])}></span>
				<p >Register</p>
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
