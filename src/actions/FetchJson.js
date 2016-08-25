import {FETCH_JSON, RECEIVE_JSON, FAILED_FETCH_JSON, FAILED_FETCH_DETAIL_JSON, RECEIVE_DETAIL_JSON, FETCH_DETAIL_JSON} from './const';

import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();

function requestJson(){
	return {
		type: FETCH_JSON
	}	
}

function receiveJson(selection,data) {
	return {
		type: RECEIVE_JSON,
		data,
		timeStamp : Date.now()
	}	
}



function failedToFetchJson(selection) {
	return { type: FAILED_FETCH_JSON, selection };
}


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

module.exports.fetchJson = function(selection) {
	return dispatch => {
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


function requestDetailJson(){
	return {
		type: FETCH_DETAIL_JSON
	}	
}

function receiveDetailJson(detailJson) {
	detailJson.type = 'detail';
	return {
		type: RECEIVE_DETAIL_JSON,
		detailJson,
		timeStamp : Date.now()
	}	
}

function failedToFetchDetailJson(selection) {
	return { type: FAILED_FETCH_DETAIL_JSON, selection };
}

module.exports.fetchDetailJson = function(data) {
	let {detailName} = data;
	let selection = detailName;
	return (dispatch) => {
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
				dispatch(receiveDetailJson(json));
			}else{
				dispatch(failedToFetchDetailJson(selection));		  		
			}
		});
	}
}