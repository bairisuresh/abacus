import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BrMenu from '../components/BrMenuComponent';

class BMenu extends Component {
  render() {
    const { actions } = this.props;
    //specifying animation type to get component
    return (
      <BrMenu actions={ actions }/>
    );
  }
}

BMenu.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BMenu);
