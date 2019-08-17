import {createWrapperReducer} from "../utils/other";
import {combineReducers} from "redux";
import {BLOG, PRODUCTS} from "../consts/apps";
import {CLEAR_DATA, RECEIVE_DATA} from "../actions/action";

const data = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_DATA: {
            const {data} = action;
            return data;
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
});
