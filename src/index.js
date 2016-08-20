import React from 'react';
import { combineReducers } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import Settings from './containers/Settings';
import {fetchJson} from './actions/FetchJson';
import Alerts from './containers/Alerts';
import Body from './containers/Body';

const store = configureStore();
/*store.dispatch(fetchJson("landingPage")).then(() =>
  console.log("after promise",store.getState()));*/
render(
    <Provider store={store}>
  		<Router history={browserHistory}>
  			<Route path='/' component={App}>
  				<IndexRoute component={Body}/>
  				<Route path="config" component={Settings} />
  				<Route path="alerts" component={Alerts} />
  			</Route>
  		</Router>
  	</Provider>,
  document.getElementById('app')
);
