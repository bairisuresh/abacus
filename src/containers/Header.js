import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderRoom from '../components/HeaderComponent'
class Header extends Component {
  render() {
    const {actions,BMReducer} = this.props;
    console.error("header Props ",[this.props,BMReducer]);
    return <HeaderRoom headState={BMReducer}/>;
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps) {
  console.error("state in Headerjs ",[state,ownProps]);
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
