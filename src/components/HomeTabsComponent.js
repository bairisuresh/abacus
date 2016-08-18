'use strict';

import React from 'react';
import $ from 'jquery';
import Swiper from 'react-id-swiper';

require('styles//HomeTabs.scss');
require('styles//swiper.min.css')

class HomeTabsComponent extends React.Component {
  render() {
  	const params = {
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
    return (
	     <div className="top-tabs">
			<div className="swiper-hldr">
				<div className="swiper-container-outer">
					<Swiper {...params}>
						<div className="swiper-slide active">Home</div>
						<div className="swiper-slide">Events</div>
						<div className="swiper-slide">Experts</div>
						<div className="swiper-slide">Regulations</div>
						<div className="swiper-slide">News</div>
						<div className="swiper-slide">White Papers</div>
					</Swiper>
				</div>
			</div>
		</div>
    );
  }
}

HomeTabsComponent.displayName = 'HomeTabsComponent';

// Uncomment properties you need
// HomeTabsComponent.propTypes = {};
// HomeTabsComponent.defaultProps = {};

export default HomeTabsComponent;
