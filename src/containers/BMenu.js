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
    const { actions, BMReducer } = this.props;
    const {isOpen} = BMReducer;
    console.error("Props here is ",this.props);
    //specifying animation type to get component
    return (
      <BrMenu actions={ actions } isOpen={isOpen}  BMReducer={BMReducer}/>
    );
  }
}
BMenu.propTypes = {
  actions: PropTypes.object.isRequired
};





function mapDispatchToProps(dispatch,props) {
  const actions = { actionRouteChange: require('../actions/BrMenu.js') };
  const actionMap = {actions:bindActionCreators(actions, dispatch)};
  console.error("mapDispatchToProps actions ",actionMap);
  return actionMap;
}

const mapStateToProps = (state) => {
  console.error("state of reducer here is bmenujs  ",state);
  const props = { BMReducer: state.BMReducer };
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(BMenu);


