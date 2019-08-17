import {
    ERROR,
    LOAD_ADDRESSES, LOAD_DATA, LOAD_DATA_BY_ID, LOAD_ORDERS, LOAD_POST,
    LOAD_POSTS_DATA, LOAD_PRODUCT_BY_ID, LOAD_PRODUCTS_BAG, LOAD_USERS, RECEIVE_DATA,
    SAVE_ADDRESS,
    SAVE_CATALOG_PRODUCTS,
    SAVE_ORDER_INFO, SAVE_ORDERS, SAVE_POST,
    SAVE_POSTS, SAVE_PRODUCT,
    SAVE_PRODUCTS_BAG, SAVE_USERS
} from "../actions/action";

const order = (state = false, action) => {

    switch (action.type) {
        case LOAD_DATA:
        case LOAD_DATA_BY_ID:
        case LOAD_PRODUCTS_BAG:
        case LOAD_ADDRESSES:
        case LOAD_POSTS_DATA:
        case LOAD_POST:
        case LOAD_ORDERS:
        case LOAD_PRODUCT_BY_ID:
        case LOAD_USERS:
            return true;

        case SAVE_ORDER_INFO:
        case SAVE_CATALOG_PRODUCTS:
        case SAVE_PRODUCTS_BAG:
        case SAVE_ADDRESS:
        case SAVE_POSTS:
        case SAVE_PRODUCT:
        case SAVE_POST:
        case SAVE_ORDERS:
        case SAVE_USERS:
        case RECEIVE_DATA:
        case ERROR:
            return false;

        default:
            return state
    }
};

export default order