import {FETCH_JSON, RECEIVE_JSON, FAILED_FETCH_JSON, CURRENT_JSON, FAILED_FETCH_DETAIL_JSON, RECEIVE_DETAIL_JSON, FETCH_DETAIL_JSON} from './const';

import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();

function requestJson(selection){
	return {
		type: FETCH_JSON,
	}	
}

function receiveJson(selection,data) {
	return {
		type: RECEIVE_JSON,
		data,
		timeStamp : Date.now()
	}	
};



function failedToFetchJson(selection) {
	return { type: FAILED_FETCH_JSON, selection };
};


function shouldFetchPosts(state, selection) {
  const posts = state.postsBySubreddit[selection]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

module.exports.fetchPostsIfNeeded = function(selection) {

  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), selection)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchJson(selection))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

module.exports.fetchJson = function(selection) {
	return dispatch => {
		console.log("fetchJson dispatch");
		dispatch(requestJson(selection));
		return fetch(`../sources/${selection}.json`)
			.then((response) => {
				if(response.status == 200){
					return response.json();
				}else{
					return "";
				}
			})
			.then((json) => {
				if(json){
					dispatch(receiveJson(selection, json));
				}else{
					dispatch(failedToFetchJson(selection));		  		
				}
			});
	}
};

function requestDetailJson(selection){
	return {
		type: FETCH_DETAIL_JSON,
	}	
}

function receiveDetailJson(finalData,detailJson) {

	let data = parseDocArray(finalData,detailJson);
	return {
		type: RECEIVE_DETAIL_JSON,
		data,
		timeStamp : Date.now()
	}	
};

function parseDocArray(finalData,detailJson){
	let {data,docObject} = finalData;
	let {detailName,idDN} = data;
	let {documents} = docObject;
	return documents.map(function(data){
		let {fields} = data
		switch(detailName){
	      case "Events":
	        if(fields.eventId[0] == idDN){
	        	detailJson.documents[0].fields.type = 'detail';
	        	fields = detailJson.documents[0].fields
	        }
	      break;
	      case "Experts":
	        if(fields[".id"][0] == idDN){
	        	detailJson.documents[0].fields.type = 'detail';
	        	fields = detailJson.documents[0].fields
	        }
	      break;
	      case "Solutions":
	        if(fields.documentId[0] == idDN){
	        	detailJson.documents[0].fields.type = 'detail';
	        	fields = detailJson.documents[0].fields
	        }	        
	      break;
	      case "Regulations":
	        if(fields[".id"][0] == idDN){
	        	detailJson.documents[0].fields.type = 'detail';
	        	fields = detailJson.documents[0].fields
	        }
	      break;
	      case "News":
	        if(fields.eventId[0] == idDN){
	        	detailJson.documents[0].fields.type = 'detail';
	        	fields = detailJson.documents[0].fields
	        }
	      break;
	      case "Whitepapers":
	        if(fields.documentId[0] == idDN){
	        	detailJson.documents[0].fields.type = 'detail';
	        	fields = detailJson.documents[0].fields
	        }
	      break;	      
		}
	    return detailJson		
	})
}

function failedToFetchDetailJson(selection) {
	return { type: FAILED_FETCH_DETAIL_JSON, selection };
};

module.exports.fetchDetailJson = function(data) {
	let {detailName} = data;
	let selection = detailName;
	return (dispatch,state) => {
		console.log("fetchDetailJson dispatch");
		dispatch(requestDetailJson(selection));
		return fetch(`../sources/${selection}.json`)
			.then((response) => {
				if(response.status == 200){
					return response.json();
				}else{
					return "";
				}
			})
			.then((json) => {
				if(json){
					let docObject = state().TReducer.data;
					let pasdata = Object.assign({},data,docObject)
					dispatch(receiveDetailJson(pasdata, json,));
				}else{
					dispatch(failedToFetchDetailJson(selection));		  		
				}
			});
	}
};

	
