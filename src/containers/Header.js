import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderRoom from '../components/HeaderComponent'
class Header extends Component {
  render() {
    const {actions,Header} = this.props;
    console.error("header Props ",[this.props,Header]);
    return <HeaderRoom Header={Header}/>;
  }
}

function mapDispatchToProps(dispatch,props) {
  const actions = { actionRouteChange: require('../actions/Header.js') };
  const actionMap = {actions:bindActionCreators(actions, dispatch)};
  console.error("mapDispatchToProps actions ",actionMap);
  return actionMap;
}

const mapStateToProps = (state) => {
  console.error("state of reducer here is bmenujs  ",state);
  const props = { BMReducer: state.Header };
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
