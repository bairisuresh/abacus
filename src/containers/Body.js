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
    let arrayMenu = this.props.arrayMenu;
    this.state = {currentElement:this.props.TReducer.tab,arrayMenu};
    this.getArray.bind(this);
    this.getDisplayName.bind(this);
  }
  componentWillReceiveProps(){
    console.log("bodyjs props*****************&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",this.state);    
    let arrayMenu = this.getArray();
    this.setState({currentElement:this.props.TReducer.tab,arrayMenu});
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
  /*onSlideNextEnd(e){
    const { actions} = this.props;
    console.log("e.activeindex next end ",e.activeIndex);
    actions.switchToClick({tab:this.state.arrayMenu[e.activeIndex]});
  }
  onSlidePrevEnd(e){
    const { actions} = this.props;
    console.log("e.activeindex prev end ",e.activeIndex);
    actions.switchToClick({tab:this.state.arrayMenu[e.activeIndex]});
  }*/

  getArray(){
    let {TReducer} = this.props;
    let {arrayMenu} = this.state;
    console.log("indexis ",arrayMenu.indexOf(TReducer.tab));
    var indexEle = arrayMenu.indexOf(TReducer.tab);
    arrayMenu = arrayMenu.splice(indexEle, 1).concat(arrayMenu);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%arrayMenu ",arrayMenu);
    return arrayMenu;
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
    const {actions,TReducer,sparams} = this.props;
    const {switchToClick} = actions;
    const {data, detailJson} = TReducer, that = this;    
      let docObject = []
      if(detailJson){
        //for detailview
        docObject = detailJson;
      }else if(data){
        //for summaryview
        let {documents} = data;
        if(documents && documents.length){
          docObject = documents;
        }
      }
    console.log("params,,,,,,,,,,,,,, ",this.props );
    const tHtabProps = {actions,docObject};
    return (
      <div className="home-tabs">
         <div className="top-tabs">
        <div className="swiper-hldr">
          <div className="swiper-container-outer">
            <Swiper {...sparams} >
            {
              that.state.arrayMenu.map((obj,index)=>
                <div onClick={()=> {
                  switchToClick({tab:obj});
                  }} 
                  className= {classNames({
                    'swiper-slide': true,
                    'active': that.state.currentElement== obj
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
