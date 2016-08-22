import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MenuObject from 'react-burger-menu';
import { Link } from 'react-router';
import BrMenu from '../components/BrMenuComponent';
require('styles//BrMenu.scss');

class BMenu extends Component {
  render() {
    const { actions, HReducer,TReducer } = this.props;
    const {isOpen} = TReducer;
    let custIcon = (TReducer.route =="/"?"":false);
    const tbmProps = {isOpen,custIcon:custIcon,HReducer,actions,TReducer};
    console.log("Props here is ",this.props);
    //specifying animation type to get component
    return (
      <BrMenu {...tbmProps}/>
    );
  }
}
BMenu.propTypes = {
  actions: PropTypes.object.isRequired
};





function mapDispatchToProps(dispatch,props) {
  const actions = Object.assign({},
    {actionRouteChange: require('../actions/BrMenu.js')},
    require('../actions/Header.js'),
    require('../actions/TabActions.js'))
  const actionMap = {actions:bindActionCreators(actions, dispatch)};
  return actionMap;
}

const mapStateToProps = (state) => {
  console.log("state of reducer here is bmenujs  ",state);
  const props = { 
                  HReducer  : state.HReducer,
                  TReducer  : state.TReducer
                };
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(BMenu);


