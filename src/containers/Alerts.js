import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tabs from '../components/AlertTabsComponent';

class Alerts extends Component {
  render() {
    const {actions} = this.props;
    return <Tabs actions={actions} />;
  }
}

Alerts.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps() {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
