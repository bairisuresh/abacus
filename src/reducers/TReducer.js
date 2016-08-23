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

    isOpen:false,
    route:"/"
  }

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);
  console.log("action and state data TRRRRRRRRRRr ",[state, action])
  const {route} = action;
  switch(action.type) {
    
    case SWIPER_CLICK: {
      console.log("befoer assigning state ",action.data.tab);
      return Object.assign({}, state, {tab:action.data.tab});      

    } break;
    case DETAIL_CLICK : {
      const {data} = action;//{detailName:"",id:"",docArray:[]}

    }break;
    case FAILED_FETCH_JSON:
      return Object.assign({}, state, {
        isFetching: false,
        data : {
          documents: []
        }
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
    case FAILED_FETCH_DETAIL_JSON:
      return Object.assign({}, state, {
        isFetching: false,
        data : action.data
      });
      break;
    case FETCH_DETAIL_JSON:
      return Object.assign({}, state, {
        isFetching: true,
      });
      break;
    case RECEIVE_DETAIL_JSON:
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
    case ROUTE_CHANGED: {
      return Object.assign({}, state, {isOpen:false,route});
    } break;      

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
