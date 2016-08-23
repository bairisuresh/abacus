import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Swiper from 'react-id-swiper';
import HTabContent from '../components/HtabContentComponent';
import classNames from 'classnames';
import $ from 'jquery';

require('styles//HomeTabs.scss');
require('styles//swiper.min.css')

class Body extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {currentElement:this.props.TReducer.tab};
  }
  componentWillReceiveProps(){
    this.setState({currentElement:this.props.TReducer.tab});
    $('.swiper-button-prev').insertAfter('.swiper-container');
    $('.swiper-button-next').insertAfter('.swiper-container');
  }
  componentDidMount(){
    const { dispatch, actions,TReducer} = this.props;
    dispatch(actions.switchToClick({tab : 'landingPage'}));
    $('.swiper-button-prev').insertAfter('.swiper-container');
    $('.swiper-button-next').insertAfter('.swiper-container');
  }
  isActive(path){
    return path == this.props.TReducer.tab ? true : false;
  }
  render() {
    const {actions,TReducer} = this.props;
    const {switchToClick} = actions;
    const {data} = TReducer, that = this;
    console.log("reducer props \n\n\n\n ",[TReducer]);
      let docArray = []
      if(data){
      let {documents} = data;
      if(documents && documents.length){
        docArray = documents;
      }
    }
    const tHtabProps = {actions,docArray};
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
              <div onClick={(e)=> {switchToClick({tab:'landingPage'});that.setState({currentElement:"landingPage"}) }} className= {classNames({
                'swiper-slide': true,
                'active': that.state.currentElement== 'landingPage'
              })}>Home</div>
              <div onClick={(e)=> {switchToClick({tab:'events'}); that.setState({currentElement:"events"}) }} className= {classNames({
                'swiper-slide': true,
                'active': that.state.currentElement== 'events'
              })}>Events</div>

              <div onClick={(e)=> {switchToClick({tab:'experts'}); that.setState({currentElement:"experts"}) }}  className= {classNames({
                'swiper-slide': true,
                'active': that.state.currentElement== 'experts'
              })}>Experts</div>

              <div onClick={(e)=> {switchToClick({tab:'regulations'}); that.setState({currentElement:"regulations"}) }} className= {classNames({
                'swiper-slide': true,
                'active': that.state.currentElement== 'regulations'
              })}>Regulations</div>

              <div onClick={(e)=> {switchToClick({tab:'solutions'}); that.setState({currentElement:"solutions"}) }} className= {classNames({
                'swiper-slide': true,
                'active': that.state.currentElement== 'solutions'
              })}>Solutions</div>
              <div onClick={(e)=> {switchToClick({tab:'whitepapers'}); that.setState({currentElement:"whitepapers"})}} className= {classNames({
                'swiper-slide': true,
                'active': that.state.currentElement== 'whitepapers'
              })}>White Papers</div>
              <div onClick={(e)=> {switchToClick({tab:'news'}); that.setState({currentElement:"news"})}} className= {classNames({
                'swiper-slide': true,
                'active': that.state.currentElement== 'news'
              })}>News</div>
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
  TReducer : PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
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
