import {SWIPER_CLICK,DETAIL_CLICK} from './const';
import {fetchJson,fetchDetailJson} from './FetchJson';
let tabClick = function(data){
	return {type:SWIPER_CLICK,data};	
}
let detailClick = function(){
	return {type:DETAIL_CLICK};
}
module.exports = {
	switchToClick : function(data){
		return dispatch => {
			dispatch(fetchJson(data.tab)); 
			return dispatch(tabClick(data));
		}
	},
	fetchDetailJson : function(data){
		return (dispatch) => {
			dispatch(fetchDetailJson(data));
			return dispatch(detailClick());
		}
	}
}

