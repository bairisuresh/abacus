import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Element from '../components/SumDetailPodComponent';

class DataPod extends Component {
  constructor(props,context){
    super(props,context);
    let { fields } = this.props;

    this.state = Object.assign({},this.state,{fields:fields});
  }
  btnClass(feedType){
    let that = this;
    console.error("DataPod state ",this.state);
    return that.getRegButtonClassName(feedType,that.state.fields.selected);
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
  getPodImage(feedtype,selected){
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
  changeSelection(){
    let fields = Object.assign({},this.state.fields,{selected:!this.state.fields.selected});
    this.setState(Object.assign({},this.state,{fields:fields}));
  };
  render() {
    const {actions, fields} = this.props;
    let that = this;
    const tranferProps = {actions, fields:that.state.fields, getPodImage: that.getPodImage.bind(that),btnClass : that.btnClass.bind(that), changeSelection : that.changeSelection.bind(that)};
    return <Element {...tranferProps}/>;
  }
}

DataPod.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPod);
