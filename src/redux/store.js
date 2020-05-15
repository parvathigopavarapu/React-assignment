import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import employeesReducer from './reducer';

const store = createStore(employeesReducer , applyMiddleware(logger, thunk))

export default store;