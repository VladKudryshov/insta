import {
    LOAD_ADDRESSES, LOAD_DATA, LOAD_DATA_BY_ID,
    LOAD_POSTS_DATA, LOAD_PRODUCTS_BAG,
    SAVE_ADDRESS,
    SAVE_CATALOG_PRODUCTS,
    SAVE_ORDER_INFO,
    SAVE_POSTS,
    SAVE_PRODUCTS_BAG
} from "../actions/action";

const order = (state = false, action) => {

    switch (action.type) {
        case LOAD_DATA:
        case LOAD_DATA_BY_ID:
        case LOAD_PRODUCTS_BAG:
        case LOAD_ADDRESSES:
        case LOAD_POSTS_DATA:
            return true;

        case SAVE_ORDER_INFO:
        case SAVE_CATALOG_PRODUCTS:
        case SAVE_PRODUCTS_BAG:
        case SAVE_ADDRESS:
        case SAVE_POSTS:
            return false;

        default:
            return state
    }
};

export default order