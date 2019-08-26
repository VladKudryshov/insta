import { combineReducers } from 'redux'
import basket from './basket'
import order from "./order";
import loader from "./loader";
import address from "./address";
import user from "./user";
import filter from "./filter";
import data from "./data";


export default combineReducers({
    basket,
    order,
    loader,
    address,
    user,
    filter,
    data
})
