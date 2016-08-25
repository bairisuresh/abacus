/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {SWIPER_CLICK,
  FETCH_JSON, RECEIVE_JSON, FAILED_FETCH_JSON,CURRENT_JSON,
  DETAIL_CLICK,FAILED_FETCH_DETAIL_JSON, RECEIVE_DETAIL_JSON, FETCH_DETAIL_JSON,
  ROUTE_CHANGED
} from '../actions/const';
const initialState = {
    isFetching: false,
    data: "",
    tab : "landingPage",
    detailJson: "",

    isOpen:false,
    route:"/"
  }

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);
  const {route} = action;
  switch(action.type) {
    
    case SWIPER_CLICK: {
      return Object.assign({}, state, {tab:action.data.tab,detailJson:""});      

    } 
    case DETAIL_CLICK : {
      return state;      
    }
    case FAILED_FETCH_JSON:
      return Object.assign({}, state, {
        isFetching: false,
        data : {
          documents: []
        }
      });
      
    case FETCH_JSON:
      return Object.assign({}, state, {
        isFetching: true
      });
      
    case RECEIVE_JSON:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdated: action.timeStamp
      });
    case FAILED_FETCH_DETAIL_JSON:
      return Object.assign({}, state, {
        isFetching: false,
        data : action.data
      });
      
    case FETCH_DETAIL_JSON:
      return Object.assign({}, state, {
        isFetching: true
      });
      
    case RECEIVE_DETAIL_JSON:
      return Object.assign({}, state, {
        isFetching: false,
        detailJson: action.detailJson,        
        lastUpdated: action.timeStamp
      });      
    case CURRENT_JSON:
      return Object.assign({}, state, {
        currentSelection: action.selection
      });
      
    case ROUTE_CHANGED: {
      return Object.assign({}, state, {isOpen:false,route});
    }       

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
