import {createWrapperReducer} from "../utils/other";
import {combineReducers} from "redux";
import {BLOG, ORDERS, PRODUCTS, USERS} from "../consts/apps";
import {CHANGE_DATA_OBJECT, CLEAR_DATA, RECEIVE_DATA} from "../actions/action";

const data = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_DATA: {
            const {data} = action;
            return data;
        }
        case CHANGE_DATA_OBJECT: {
            const {name, value} = action;
            return {...state, [name]: value}
        }
        case CLEAR_DATA: {
            return [];
        }

        default:
            return state;
    }
};

export default combineReducers({
    post: createWrapperReducer(data, BLOG),
    products: createWrapperReducer(data, PRODUCTS),
    orders: createWrapperReducer(data, ORDERS),
    users: createWrapperReducer(data, USERS),
});
