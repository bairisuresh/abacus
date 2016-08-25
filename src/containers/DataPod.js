import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pod from '../components/SumDetailPodComponent';

class DataPod extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {item :this.props.fields};
    this.showDetailView = this.showDetailView.bind(this);
  }
  btnClass(feedType){
    let that = this;
    return that.getRegButtonClassName(feedType,that.state.item.selected);
  }
  getRegButtonClassName(feedtype,selected){
    let image ="";

    switch(feedtype){
      case "Events":
        image = !selected ? "register_icon.png": "register_active_icon.png" ;
      break;

      case "Experts":
        image = !selected ? "register_icon.png": "register_active_icon.png" ;
      break;
      case "Solutions":
        image = !selected ? "solutions_inactive.png" : "solutions_active.png";
      break;
      case "Regulations":
        image = !selected ? "regulations_tick.png" : "regulations_tick_active.png";
      break;
      case "News":
        image = !selected ? "news_plus.png": "news_plus_active.png" ;       
      break;
      case "Whitepapers":
        image = !selected ? "wp_plus.png": "wp_plus_active.png" ;
      break;
      default : 
        image = !selected ? "register_icon.png": "register_active_icon.png" ;
    }
    return {backgroundImage :'url('+"../images/"+image+')'}
  }
  getId(fields){
    let detailName = fields.feed[0];
    switch(detailName){
        case "Events":
          return fields.eventId[0];
        case "Experts":
          return fields[".id"][0];
        case "Solutions":
          return fields.documentId[0];
        case "Regulations":
          return fields[".id"][0];
        case "News":
          return fields[".id"][0];
        case "Whitepapers":
          return fields.documentId[0];
        default:
          return "";
    }    
  }
  getPodImage(feedtype){
    let image ="";

    switch(feedtype){
      case "Events":
        image = "calendar_icon.png";      
      break;
      case "Experts":
        image = "expert_icon.png";
      break;
      case "Solutions":
        image = "solutions.png";
      break;
      case "Regulations":
        image = "regulations_icon.png";
      break;
      case "News":
        image = "news.png";
      break;
      case "Whitepapers":
        image = "whitepapers.png";
      break;
      default : 
        image = "calendar_icon.png";

    }
    return {backgroundImage :'url('+"../images/"+image+')'}
  }
  getJsonName(feedtype){
    let json ="";

    switch(feedtype){
      case "Events":
        json = "eventDetail";      
      break;
      case "Experts":
        json = "ExpertDetails";
      break;
      case "Solutions":
        json = "solutionsDetail";
      break;
      case "Rules":
        json = "regulationDetail";
      break;
      case "News":
        json = "eventDetail";
      break;
      case "Whitepapers":
        json = "whitepaperDetail"
      break;
      default : 
        json = "eventDetail";

    }
    return json;
  }
  componentWillReceiveProps(nextProps) {
    let { fields } = nextProps;
    this.setState({item:fields});
  }
  changeSelection(){
    let fields = Object.assign({},this.state.item,{selected:!this.state.item.selected});
    this.setState({item:fields});
  }
  showDetailView(){
    //data is {detailName:"",id:""}
    let {actions} = this.props;
    actions.fetchDetailJson({detailName:this.getJsonName(this.state.item.feed[0]),id:this.getId(this.state.item)});
  }
  render() {
    const {actions} = this.props;
    let that = this;
    var state = Object.assign({},this.state,{});
    const tranferProps = {actions, fields:state.item , getPodImage: that.getPodImage.bind(that),btnClass : that.btnClass.bind(that), changeSelection : that.changeSelection.bind(that)};
    return <Pod {...tranferProps} showDetailView={this.showDetailView}/>;
  }
}

DataPod.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps() {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = require('../actions/TabActions');
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPod);
