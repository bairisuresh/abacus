import React, {
  Component
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderRoom from '../components/HeaderComponent'
class Header extends Component {
  render() {
    const {actions,HReducer} = this.props;
    const hcProps = {actions,HReducer}
    return <HeaderRoom {...hcProps} />;
  }
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({},
    {actionRouteChange: require('../actions/BrMenu.js')},
    require('../actions/Header.js'))
  const actionMap = {actions:bindActionCreators(actions, dispatch)};
  return actionMap;
}

const mapStateToProps = (state) => {
  const props = { HReducer: state.HReducer };
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
