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

// function receiveDetailJson(finalData,detailJson) {
function receiveDetailJson(detailJson) {
	detailJson.type = 'detail';
	// let data = parseDocArray(finalData,detailJson);
	return {
		type: RECEIVE_DETAIL_JSON,
		detailJson,
		timeStamp : Date.now()
	}	
};

function parseDocArray(finalData,detailJson){
	let {data,docObject} = finalData;
	let {detailName,id} = data;
	let idDN = id;
	let {documents} = docObject;
	debugger;
	return documents.map(function(data){
		let fields = "";
		fields = data.fields;
		switch(detailName){
			case "eventDetail":
	      	//for events and news
	      	if((fields.eventId && fields.eventId[0] == idDN) || 
	      		(fields[".id"] && fields[".id"][0] == idDN)){
	      		debugger;
	      		fields.type = 'detail';
	      	fields = detailJson.documents[0].fields
	      }
	      break;
	      case "ExpertDetails":
	      if(fields[".id"][0] == idDN){
	      	debugger;
	      	fields.type = 'detail';
	      	fields = detailJson.documents[0].fields
	      }
	      break;
	      case "solutionsDetail":
	      if(fields.documentId[0] == idDN){
	      	debugger;
	      	fields.type = 'detail';
	      	fields = detailJson.documents[0].fields
	      }	        
	      break;
	      case "regulationDetail":
	      if(fields[".id"][0] == idDN){
	  		debugger;
	      	fields.type = 'detail';
	      	fields = detailJson.documents[0].fields
	      }
	      break;
	      case "whitepaperDetail":
	      if(fields.documentId[0] == idDN){
	      	debugger;
	      	fields.type = 'detail';
	      	fields = detailJson.documents[0].fields
	      }
	      break;	      
	  }
	  return {fields:fields};		
	})
}

function failedToFetchDetailJson(selection) {
	return { type: FAILED_FETCH_DETAIL_JSON, selection };
};

module.exports.fetchDetailJson = function(data) {
	let {detailName} = data;
	let selection = detailName;
	console.log("*****fetchDetailJson ",data);
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
				/*let docObject = state().TReducer.data;
				let pasdata = Object.assign({},{data:data},{docObject:docObject})*/
				// dispatch(receiveDetailJson(pasdata, json));
				dispatch(receiveDetailJson(json));
			}else{
				dispatch(failedToFetchDetailJson(selection));		  		
			}
		});
	}
};


