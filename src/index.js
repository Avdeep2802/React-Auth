import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './containers/App';
import SignupPage from './containers/SignupPage';
import SigninPage from './containers/SigninPage';
import {Provider} from 'react-redux';
import store from './store';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
  <Provider store ={store}>
    <Router history={hashHistory}>
        <Route path = "/" component = {App}>
        <Route path = "signup" component = {SignupPage} />
        <Route path = "signin" component = {SigninPage} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
