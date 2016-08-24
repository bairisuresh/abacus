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
		//data is {detailName:"",id:"",docArray:[]}
		return (dispatch,state) => {
			dispatch(fetchDetailJson(data));
			return dispatch(detailClick());
		}
	}
}

