/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {FETCH_JSON, RECEIVE_JSON, FAILED_FETCH_JSON,CURRENT_JSON} from '../actions/const';

module.exports = function posts(state = {
    isFetching: false,
    data: "",
    currentSelection : "landingPage"
  }, action) {
  switch (action.type) {
    case FAILED_FETCH_JSON:
      return Object.assign({}, state, {
        isFetching: true
      });
      break;
    case FETCH_JSON:
      return Object.assign({}, state, {
        isFetching: true,
      });
      break;
    case RECEIVE_JSON:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdated: action.timeStamp
      });break;
    case CURRENT_JSON:
      return Object.assign({}, state, {
        currentSelection: action.selection,
      });
      break;
    default:
      return state
  }
}
