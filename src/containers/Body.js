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
    console.log("bodyjs props*****************&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",this.props.TReducer);    
    this.setState({currentElement:this.props.TReducer.tab});
    $('.swiper-button-prev').insertAfter('.swiper-container');
    $('.swiper-button-next').insertAfter('.swiper-container');
  }
  componentDidMount(){
    const { dispatch, actions,TReducer} = this.props;
    dispatch(actions.switchToClick({tab : this.props.TReducer.tab}));
    $('.swiper-button-prev').insertAfter('.swiper-container');
    $('.swiper-button-next').insertAfter('.swiper-container');
  }
  isActive(path){
    return path == this.props.TReducer.tab ? true : false;
  }
  onSlideNextEnd(e){
      debugger;
      }
onSlidePrevEnd(e){
    debugger;
      }      
  onClickB(w){
    debugger;
  }
  render() {
    const {actions,TReducer,sparams} = this.props;
    const {switchToClick} = actions;
    const {data} = TReducer, that = this;    
      let docArray = []
      if(data){
      let {documents} = data;
      if(documents && documents.length){
        docArray = documents;
      }
    }
    console.log("params,,,,,,,,,,,,,, ",this.props );
    const tHtabProps = {actions,docArray};

    return (
      <div className="home-tabs">
         <div className="top-tabs">
        <div className="swiper-hldr">
          <div className="swiper-container-outer">
            <Swiper {...sparams} onSlidePrevEnd={this.onSlidePrevEnd.bind(this)} 
            onSlideNextEnd={this.onSlideNextEnd.bind(this)}
            onClick={this.onClickB.bind(this)} >
            {
              that.props.swiperItems.map(obj=>
                <div onClick={()=> {
                  switchToClick({tab:Object.keys(obj)[0]});
                  }} 
                  className= {classNames({
                    'swiper-slide': true,
                    'swiper-slide-active': that.state.currentElement== Object.keys(obj)[0]
                  })}>
                    {obj[Object.keys(obj)[0]]}
                  </div>
                )
                            
            }
              
              
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
  TReducer : PropTypes.object.isRequired,
  swiperItems: PropTypes.array.isRequired,
  sparams: PropTypes.object.isRequired,
};

Body.defaultProps = {
  swiperItems: [{"landingPage":"Home"},
                {"events":"Events"},
                {"experts":"Experts"},
                {"regulations":"Regulations"},
                {"solutions":"Solutions"},
                {"whitepapers":"Whitepapers"},
                {"news":"News"}],
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
}
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
