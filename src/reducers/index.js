import { combineReducers } from 'redux'
import basket from './basket'
import order from "./order";
import loader from "./loader";
import catalog from "./catalog";
import address from "./address";
import blog from "./blog";
import user from "./user";
import filter from "./filter";
import data from "./data";


export default combineReducers({
    basket,
    order,
    catalog,
    loader,
    address,
    blog,
    user,
    filter,
    data
})
