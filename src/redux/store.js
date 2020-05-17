import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import employeesReducer from './reducer';

const store = createStore(
    employeesReducer,
     applyMiddleware(thunk)
     );

export default store;