import {SWIPER_CLICK, HOME} from './const';
import {fetchJson} from './FetchJson';
import {navigateToHome} from './Header'
import actionRouteChange from './BrMenu';

module.exports = {
	switchToClick : function(data){
		console.log("dat passed in Tabactions ",data)
		try{
			return dispatch => {
				dispatch(fetchJson(data.tab)); 
				console.log("before return ",data)
				return {type:SWIPER_CLICK,data}};
		}catch(e){
			console.log("error is ",e.message);
		}
	}}

