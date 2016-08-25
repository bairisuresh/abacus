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

	assignMatchedKeyValues(n,o,iA){
		let i;
		console.log("new key values ",n);
		for(i in n){
			o[i]? n[i] = o[i][0]:"";
		};
		console.log("newData assignMatchedKeyValues ",n);
		return this.getIteratedArray(n,iA)	
	}
	getIteratedArray(newArray,iterateA){
		let i = 0,iterables = [];
		for(i=0;i<iterateA.length;i++){
			let obj = "",tempObj={};
			obj = newArray[iterateA[i]];
			if(obj){
				tempObj[iterateA[i]] = obj;
				iterables.push(tempObj);
			}
		}
		newArray.iterables = iterables;
		return newArray;
	}
	getFinalJson(detailData){
		let {formatedJson, labels,iterate} = this.props;
		let newData = formatedJson[detailData.feed[0]];
		let labelsKey = detailData.feed[0].toLowerCase()+"labels";
		let iArray = iterate[detailData.feed[0]];
		newData.labels = labels[labelsKey];		
		return this.formatAllDates(this.assignMatchedKeyValues(newData,detailData,iArray));
	}

	formatAllDates(data){
		let formatAllDate = ["eventUpdatedTimeStamp","expertUpdatedTimeStamp","pubdate", "documentPubDate"], i = 0;
		let formatSEDates = ["startDate","endDate"];
		let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		for(i=0;i<formatAllDate.length;i++){
			let ldate = "";
			ldate = data[formatAllDate[i]];
			if(ldate){
				let date = new Date(ldate);
				delete data[formatAllDate[i]];
				data.podDate = (date.getUTCMonth()+1)+"/"+date.getUTCDate()+"/"+date.getUTCFullYear();
			}
		}
		for(i=0;i<formatSEDates.length;i++){
			let sedate = ""
			sedate = new Date(data[formatSEDates[i]]);
			data[formatSEDates[i]] = data[formatSEDates[i]] ? sedate.toUTCString():""; 
		}
		//getting url
		let links = ["uri","documentSecureURL"];
		for(i=0;i<links.length;i++){
			let link = "";
			link = data[links[i]];
			if(link){
				delete data[links[i]];
				data.link = link;
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
			{
				detailData.startDate ? <p>{ detailData.startDate+" - "+detailData.endDate}</p>:""
			}
			
			<ul className="event-info">

			{
				detailData.iterables.map((obj)=>{
					let keys = Object.keys(obj),label = detailData.labels[keys[0]];
					console.log("label here is ",label);
					return ([<li>{label}</li>,<li>{obj[keys[0]]}</li>]);
				})
			}

			{
				[<li>{detailData.labels.link}</li>,
				<li><a href={detailData.link}>{detailData.link}</a></li>]
			}
			
			<div className="clearfix"></div>
			</ul>

			<div className="server-data" dangerouslySetInnerHTML={{__html: detailData.expertDetails || detailData.eventDescription || detailData.teaser}} />

			</div>
			</div>

			<div className="recommend-btns">
			<div className="block">
			<h3>Recommended For You</h3>
			<div className="swiper-container swiper-recommend">
			<Swiper {...sparams} >
			{
				that.props.arrayMenu.map((obj,index)=>{				
					console.log("obj arrayMenu ",obj,detailData.feed)
					return (<div 
						className= {classNames({
							'swiper-slide': true,
							'active': obj == detailData.feed
						})
					}>
					{obj}
					</div>)
				}
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
	arrayMenu : ["Home", "Events", "Experts", "Rules", "Solutions", "Whitepapers", "News"],
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
			link:"Event Link"
		},expertslabels:{
			expertName : "Expert Name",
			expertEmail: "Expert Email",
			expertPhone : "Expert Phone",
			expertDivision :"Expert Division"
		},solutionslabels:{
			link : "Document Link"
		},ruleslabels:{
			link : "Rules Link"
		},whitepaperslabels:{
			link : "Document Link",
			documentAuthor : "Document Author",    
		}
	},
	iterate:{
		Events:["eventHost","eventSpeakers","eventLocation"],
		Experts:["expertName","expertEmail","expertPhone","expertDivision"],
		Solutions:[],
		Rules : [],
		Whitepapers : ["documentAuthor"]
	}    
};

export default HtabContentComponent;
