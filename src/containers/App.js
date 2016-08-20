/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { fetchJson } from '../actions/FetchJson';
import { connect } from 'react-redux';
import Main from '../components/MainComponent';
require('styles//App.scss');
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    debugger;
    const { dispatch, FDataReducer } = this.props
    dispatch(fetchJson(FDataReducer.currentSelection));
  }
  render() {
    const {actions, BMReducer, HReducer, FDataReducer} = this.props;
    const transferProps = {
      actions,
      BMReducer,
      HReducer,
      FDataReducer
    };
    console.error('actions appjs class ', actions);
    return (
      <Main {...transferProps}>
        {this.props.children}  
      </Main>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  BMReducer: PropTypes.object.isRequired,
  HReducer: PropTypes.object.isRequired,
  FDataReducer: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  console.error('state of reducer here is appjs ', state);
  const props = {
    BMReducer: state.BMReducer,
    HReducer: state.HReducer,
    HReducer: state.HReducer,
    FDataReducer : state.FDataReducer

  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    BrMenu: require('../actions/BrMenu.js'),
    HeaderActions: require('../actions/Header.js'),
    FetchJson: require('../actions/FetchJson.js')
  };
  console.error('app actions ', actions);
  const actionMap = { actions: bindActionCreators(actions, dispatch),dispatch };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
