import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Home from './containers/Home';
 import Members from './containers/Members'

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="members" component={Members}/>
		</Route>	
	</Router>, document.getElementById('root')
);