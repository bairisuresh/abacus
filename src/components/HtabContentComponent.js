'use strict';

import React from 'react';
import Item from '../containers/DataPod';
import Swiper from 'react-id-swiper';
import classNames from 'classnames';
import {Html5Entities} from 'html-entities';

require('styles//HtabContent.scss');
require('styles//swiper.min.css')


class HtabContentComponent extends React.Component {
	constructor(props,context){
		super(props,context);
		this.getDisplayName.bind(this);
		this.getFinalJson.bind(this);
	}

	getDisplayName(key){
		var sItmes = this.props.swiperItems;
		for(var i=0;i<sItmes.length;i++){
			let obj = {};
			obj = sItmes[i];
			if(obj[key]){
				return obj[key];
			}        
		}
	}

	assignMatchedKeyValues(n,o){
		let i;
		console.log("new key values ",n);
		for(i in n){
			o[i]? n[i] = o[i][0]:"";
		};
		console.log("newData assignMatchedKeyValues ",n);
		return n;
	}
	getFinalJson(detailData){
		let {formatedJson, labels} = this.props;
		let newData = formatedJson[detailData.feed[0]];
		let labelsKey = detailData.feed[0].toLowerCase()+"labels";
		newData.labels = labels[labelsKey];
		return this.formatAllDates(this.assignMatchedKeyValues(newData,detailData));
	}

	formatAllDates(data){
		let formatAllDate = ["eventUpdatedTimeStamp","expertUpdatedTimeStamp","pubdate", "documentPubDate"], i = 0;
		for(i=0;i<formatAllDate.length;i++){
			let ldate = "";
			ldate = data[formatAllDate[i]];
			if(ldate){
				let date = new Date(ldate);
				delete data.ldate;
				data.podDate = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
			}
		}
		return data;
	}

	render() {
		console.log("HtabContentcompu ",this.props);
		const {actions, docObject} = this.props;
		console.log("documenttype ",docObject);
		const {sparams} = this.props, that = this;
		let detailData = "";
		if(docObject.type && docObject.type == 'detail'){
			detailData = docObject.documents[0].fields;
			detailData = this.getFinalJson(detailData);
		}

		return ((docObject.type && docObject.type == 'detail') ? 
			<div className='detail-view'>
			<div className="main-content light-bg">
			<div className="block">
			<div className="event-detail_wrapper">
			<div className="event-title-bg">
			<span className="event-label-before"></span>
			<p className="event-label">{detailData.feed}</p>
			<p className="event-date">{detailData.podDate}</p>
			</div>

			<div className="event_detail_hldr">
			<div className="block overflow-vertical">
			<h2>{detailData.title}</h2>
			<p>March 13,2016 07:00 AM - March 16,2016 04:00 PM</p>
			<ul className="event-info">
			<li>Speakers</li>
			<li>SEC Staff and Industry Experts</li>

			<li>Host</li>
			<li>Investment Company Institute ("ICI")</li>

			<li>Location</li>
			<li>JW Marriott Grande Lakes in Orlando, Florida.</li>

			<li>Event Link</li>
			<li><a href="https://www.ici.org/events/upcoming/conf_16_mfimc?WT.mc_id=mconf_feb16">https://www.ici.org/events/upcoming/conf_16_mfimc?WT.mc_id=mconf_feb16</a></li>
			<div className="clearfix"></div>
			</ul>

				<div dangerouslySetInnerHTML={{__html: detailData.expertDetails || detailData.eventDescription || detailData.teaser}} />.

			</div>
			</div>

			<div className="recommend-btns">
			<div className="block">
			<h3>Recommended For You</h3>
			<div className="swiper-container swiper-recommend">
			<Swiper {...sparams} >
			{
				that.props.arrayMenu.map((obj,index)=>
					<div 
					className= {classNames({
						'swiper-slide': true,
						'active': "landingPage"== obj
					})
				}>
				{that.getDisplayName(obj)}
				</div>
				)
			}
			</Swiper>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>	
			</div>
			:
			<div className="main-content light-bg">
			<div className="block overflow-vertical">
			<ul className="events">
			{
				docObject.map(function(item){
					return <Item {...item} />
				})
			}
			</ul>
			</div>
			</div>	
			);
	}
}

HtabContentComponent.displayName = 'HTabContentComponent';

// Uncomment properties you need
// HtabContentComponent.propTypes = {};
HtabContentComponent.defaultProps = {
	swiperItems: [{"landingPage":"Home"},
	{"events":"Events"},
	{"experts":"Experts"},
	{"regulations":"Regulations"},
	{"solutions":"Solutions"},
	{"whitepapers":"Whitepapers"},
	{"news":"News"}],
	arrayMenu : ["landingPage", "events", "experts", "regulations", "solutions", "whitepapers", "news"],
	sparams : {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		slidesPerView: 5,
		spaceBetween: 50,
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 0
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 0
			},
			320: {
				slidesPerView: 3,
				spaceBetween: 0
			}
		}
	},

	formatedJson : {
		Events:{
			title:"",
			startDate:"",
			endDate:"",
			eventHost:"",
			eventSpeakers:"",
			eventLocation:"",
			uri:"",
			feed:"",
			eventDescription:"",
			eventUpdatedTimeStamp:""
		},
		Experts:{
			expertName:"",
			expertName : "",
			expertEmail: "",
			expertPhone : "",
			expertDivision : "",
			expertUpdatedTimeStamp : "",
			expertDetails : "",
			expertImage:"",
			feed:"",
			showPhone:"",
			showEmail:"",
			title:""

		},
		Solutions:{
			title : "",
			documentSecureURL : "",
			feed : "",
			teaser : ""
		},Rules:{
			title:"",
			feed:"",
			uri:"",
			teaser:"",
			pubdate:""
		},Whitepapers:{
			teaser:"",
			feed:"",
			documentAuthor:"",
			documentSecureURL:"",
			documentPubDate:"",
			title:""
		}
	},
	labels :{
		eventslabels:{
			eventHost:"Host",
			eventSpeakers:"Speakers",
			eventLocation:"Location",
			uri:"Event Link"
		},expertslabels:{
			expertName : "Expert Name",
			expertEmail: "Expert Email",
			expertPhone : "Expert Phone",
			expertDivision :"Expert Division"
		},soultionslabels:{
			documentSecureURL : "Document Link"
		},ruleslabels:{
			documentSecureURL : "Rules Link"
		},whitepaperslabels:{
			documentSecureURL : "Document Link",
			documentAuthor : "Document Author",    
		}}    
	};

	export default HtabContentComponent;
