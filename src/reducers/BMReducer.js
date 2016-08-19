/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
 import {ROUTE_CHANGED} from '../actions/const';
const initialState = {isOpen:false,route:"/"};

module.exports = function(state = initialState, action) {
  console.error("action in reducer is ",action)
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);
  const {route} = action;
  switch(action.type) {

    case ROUTE_CHANGED: {
      // Modify next state depending on the action and return it
      return {isOpen:false,route};
    } break;
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
