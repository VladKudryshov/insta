import { combineReducers } from 'redux'
import basket from './basket'
import order from "./order";
import loader from "./loader";
import catalog from "./catalog";


export default combineReducers({
    basket,
    order,
    catalog,
    loader
})
