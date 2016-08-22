import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderRoom from '../components/HeaderComponent'
class Header extends Component {
  render() {
    console.log("headercontainer loaded");
    const {actions,HReducer,TReducer} = this.props;
    const hcProps = {actions,HReducer}
    console.log("header Props ",[this.props,HReducer]);
    return <HeaderRoom {...hcProps} />;
  }
}

function mapDispatchToProps(dispatch,props) {
  const actions = Object.assign({},
    {actionRouteChange: require('../actions/BrMenu.js')},
    require('../actions/Header.js'))
  const actionMap = {actions:bindActionCreators(actions, dispatch)};
  console.log("mapDispatchToProps actions ",actionMap);
  return actionMap;
}

const mapStateToProps = (state) => {
  console.log("state of reducer here is headerjs  ",state);
  const props = { HReducer: state.HReducer,TReducer :state.TReducer };
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
