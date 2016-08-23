import {SWIPER_CLICK} from './const';
import {fetchJson,fetchDetailJson} from './FetchJson';
let tabClick = function(data){
	return {type:SWIPER_CLICK,data};	
}
module.exports = {
	switchToClick : function(data){
		console.log("dat passed in Tabactions ",data)
		try{
			return dispatch => {
				dispatch(fetchJson(data.tab)); 
				console.log("before return ",data)
				return dispatch(tabClick(data));
			}
		}catch(e){
			console.log("error is ",e.message);
		}
	},
	fetchDetailJson : function(data){
		return (dispatch,state) => {
			return dispatch(fetchDetailJson(data));
		}
	}
}

