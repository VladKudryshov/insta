import { combineReducers } from 'redux'
import basket from './basket'
import order from "./order";
import loader from "./loader";


export default combineReducers({
    basket,
    order,
    loader
})
