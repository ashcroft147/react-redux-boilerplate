import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './components/App';
import Home from './containers/Home';
import Members from './containers/Members';

import allReducers from './reducers/index.js';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

const logger = createLogger();
const store = createStore(
	allReducers,
	applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="members" component={Members}/>
			</Route>	
		</Router>
	</Provider>
	, document.getElementById('root')
);