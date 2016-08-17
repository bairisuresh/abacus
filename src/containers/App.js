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
import { connect } from 'react-redux';
import Menu from './BMenu';
import Header from './Header';
import { Router, IndexRoute, Route, browserHistory, IndexRedirect } from 'react-router';
require('styles//App.scss');

/* Populated by react-webpack-redux:reducer */
class App extends Component {
  constructor(props,context) {
    super(props,context);
  }
  render() {
    const { actions } = this.props;
    var that = this;
    return (<div className='app-container'>
              <Header/>
              <div id="outer-container" >
                <Menu pageWrapId={ "wrapper-page" } outerContainerId={ "outer-container" }/>
                <div id ="wrapper-page" >
                  { this.props.children }
                </div>
              </div>
            </div>
            );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
 const props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
