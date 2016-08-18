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
  const props = {

    
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
      routeChanged : function(route){
        console.log("Route is ",route);
      }
    }
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

const mapStateToProps = (state) => {
  return {
    isOpen: isMenuOpen(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BMenu);
