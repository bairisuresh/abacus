import {SWIPER_CLICK} from './const';
import {fetchJson} from './FetchJson';

module.exports = {
	switchToClick : function(data){
		console.error("dat passed in Tabactions ",data)
		try{
			return dispatch => {dispatch(fetchJson(data.tab)); return {type:SWIPER_CLICK,data}};
		}catch(e){
			console.error("error is ",e.message);
		}
	}}

