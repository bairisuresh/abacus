import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Swiper from 'react-id-swiper';
import HTabContent from '../components/HtabContentComponent';

require('styles//HomeTabs.scss');
require('styles//swiper.min.css')

class Body extends Component {
  render() {
    const {actions, FDataReducer} = this.props;
    const {data} = FDataReducer;
      let docArray = []
      if(data){
      let {documents} = data;
      if(documents && documents.length){
        docArray = documents;
      }
    }
    const tHtabProps = {actions, FDataReducer,docArray};
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
      <div className="home-tabs">
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
      <HTabContent {...tHtabProps} />
    </div>
    );
  }
}

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
