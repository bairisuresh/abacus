/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {NAVIGATE_SETTINGS, NAVIGATE_ALERTS, HOME, SETTINGS, ALERTS} from '../actions/const';
const initialState = {heading:"Regulatory Resource Center",data:{state:HOME}};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    
    case NAVIGATE_SETTINGS: {
      // Modify next state depending on the action and return it
      return {heading:"Configuration",data :Object.assign({},action.data,{state:SETTINGS})};
    } break;

    case NAVIGATE_ALERTS: {
      return {heading:"ALERTS",data :Object.assign({},action.data,{state:ALERTS})};
    } break;
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
