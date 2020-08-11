import {createStore,combineReducers, applyMiddleware} from 'redux';
import CountReducer from '../components/CountReducer';
import thunk from 'redux-thunk'

const Store=createStore(combineReducers({
    count:CountReducer,
}),applyMiddleware(thunk))
export default Store;