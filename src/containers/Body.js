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
  constructor(props,context){
    super(props,context);
  }
  componentDidMount(){
    const { dispatch, actions,TReducer} = this.props;
    dispatch(actions.switchToClick({tab : 'landingPage'}));
  }  
  render() {

    const {actions, FDataReducer,TReducer} = this.props;
    const {data} = FDataReducer;
    console.log("reducers states body ",[FDataReducer,TReducer]);
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

Body.propTypes = {
  actions: PropTypes.object.isRequired,
  FDataReducer: PropTypes.object.isRequired,
  TReducer : PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    FDataReducer : state.FDataReducer,
    TReducer : state.TReducer
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = require('../actions/TabActions.js');  
  const actionMap = { actions: bindActionCreators(actions, dispatch),dispatch };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
