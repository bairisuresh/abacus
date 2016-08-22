'use strict';

import React from 'react';
import {Html5Entities} from 'html-entities';
import classNames from 'classnames';

require('styles//SumDetailPod.scss');

class SumDetailPodComponent extends React.Component {
	constructor(props,context){
		super(props,context);
		console.log("pod in constructor");
	}
	componentWillReceiveProps(nextProps,) {
		let that = this;
		console.log("Pod nextProps****** ",[nextProps,this.props]);
	}
  render() {
  	let eDate = "",props = this.props,eLocation = "", etitle ="";
  	const {btnClass, changeSelection, getPodImage, fields} = this.props;
	try{
	  	if(fields.pubdate[0]){  			
			let date = new Date(fields.pubdate[0])
	  		eDate = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear(); 
	  	}	  		
		eLocation = fields.eventLocation ?fields.eventLocation[0] : "JQB, Quincy, MA";
		etitle = fields.title ? Html5Entities.decode(fields.title[0]) :""; 
	}catch(e){
		console.error(e.message);
	}
	console.log("///////////////////////////////////////////// fields id ",props)
    return (
		<li className="detail-pod-compu">
			<span className = "pod-bg-image" style={getPodImage(fields.feed[0])}></span>
			<p className="event-label">{fields.feed[0]}</p>
			<h2 className="event-title">{etitle}</h2>
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
