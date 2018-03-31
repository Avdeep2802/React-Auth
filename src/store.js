import {createStore, combineReducers, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import  thunk from 'redux-thunk';






var store = createStore((state ={}) => state,{},applyMiddleware(thunk,createLogger()));


export default store;
