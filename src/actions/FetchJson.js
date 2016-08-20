import {FETCH_JSON, RECEIVE_JSON, FAILED_FETCH_JSON} from './const';
import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();


function receiveJson(jsonName,data) {
	return {
		type: RECEIVE_JSON,
		jsonName,
		data,
		timeStamp : Date.now()
	}	
};

function failedToFetchJson(jsonName) {
	return { type: FAILED_FETCH_JSON, jsonName };
};

function shouldFetchPosts(state, jsonName) {
  const posts = state.postsBySubreddit[jsonName]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

module.exports.fetchPostsIfNeeded = function(jsonName) {

  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), jsonName)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchJson(jsonName))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

module.exports.fetchJson = function(jsonName) {
	return dispatch => {
		console.error("fetchJson dispatch");
		return fetch(`../sources/${jsonName}.json`)
			.then((response) => {
				if(response){
					return response.json();
				}else{
					return "";
				}
			})
			.then((json) => {
				if(json){
					dispatch(receiveJson(jsonName, json));
				}else{
					dispatch(failedToFetchJson(jsonName));		  		
				}
			});
	}
};
	
