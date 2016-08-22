/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {SWIPER_CLICK} from '../actions/const';
const initialState = {tab:"landingPage"};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    
    case SWIPER_CLICK: {
      // Modify next state depending on the action and return it
      return {click:action.data.tab};
    } break;
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
