'use strict';

import React from 'react';
import Item from '../containers/DataPod';
import Swiper from 'react-id-swiper';
import classNames from 'classnames';

require('styles//HtabContent.scss');
require('styles//swiper.min.css')


class HtabContentComponent extends React.Component {
	constructor(props,context){
		super(props,context);
		this.getDisplayName.bind(this);
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
	render() {
	console.log("HtabContentcompu ",this.props);
	const {actions, docObject} = this.props;
	console.log("documenttype ",docObject);
	const {sparams} = this.props, that = this;
	let detailData = "";
	if(docObject.type && docObject.type == 'detail'){
		detailData = docObject.documents[0].fields;
	}

	return ((docObject.type && docObject.type == 'detail') ? 
		<div className='detail-view'>
			<div className="main-content light-bg">
				<div className="block">
					<div className="event-detail_wrapper">
						<div className="event-title-bg">
							<span className="event-label-before"></span>
							<p className="event-label">{detailData.feed[0]}</p>
							<p className="event-date">07/25/2016</p>
						</div>
						
						<div className="event_detail_hldr">
							<div className="block overflow-vertical">
								<h2>{detailData.title[0]}</h2>
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
								
								<div className="event-register-fees">
									<h3>Registration Fees</h3>
									<ul>
										<li>ICI members/FBA members:</li>
										<li>$1,550</li>

										<li>Nonmembers:</li>
										<li>$2,100</li>

										<li>Directors:</li>
										<li>$680</li>

										<li>Government employees:</li>
										<li>$680</li>
										<div className="clearfix"></div>
									</ul>
								</div>
								
								<div className="event-conference">
									<h3>Conference Highlights</h3>
									<ul>
										<li>Learn from SEC staff and industry experts about recent and upcoming regulatory efforts affecting funds.</li>
										<li>Listen to industry experts discuss what today's regulatory environment, market trends, and evolving business practices mean for the fund industry of tomorrow.</li>
										<li>Learn from SEC staff and industry experts about recent and upcoming regulatory efforts affecting funds.</li>
										<li>Listen to industry experts discuss what today's regulatory environment, market trends, and evolving business practices mean for the fund industry of tomorrow.</li>
										<li>Learn from SEC staff and industry experts about recent and upcoming regulatory efforts affecting funds.</li>
										<li>Listen to industry experts discuss what today's regulatory environment, market trends, and evolving business practices mean for the fund industry of tomorrow.</li>
										<li>Learn from SEC staff and industry experts about recent and upcoming regulatory efforts affecting funds.</li>
										<li>Listen to industry experts discuss what today's regulatory environment, market trends, and evolving business practices mean for the fund industry of tomorrow.</li>
									</ul>
								</div>
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
    }
};

export default HtabContentComponent;
