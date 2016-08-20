import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderRoom from '../components/HeaderComponent'
class Header extends Component {
  render() {
    const {actions,HReducer} = this.props;
    const hcProps = {actions,HReducer}
    console.error("header Props ",[this.props,HReducer]);
    return <HeaderRoom {...hcProps} />;
  }
}

function mapDispatchToProps(dispatch,props) {
  const actions = require('../actions/Header.js');
  const actionMap = {actions:bindActionCreators(actions, dispatch)};
  console.error("mapDispatchToProps actions ",actionMap);
  return actionMap;
}

const mapStateToProps = (state) => {
  console.error("state of reducer here is bmenujs  ",state);
  const props = { HReducer: state.HReducer };
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
