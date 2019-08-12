import {SAVE_ORDERS, SAVE_PRODUCTS_BAG} from "../actions/action";

const order = (state = {
        orders: [],
        order: {
            orderContact: {},
            productOrder: [],
            orderStatus: ''
        }
}, action) => {

    switch (action.type) {
        case SAVE_PRODUCTS_BAG: {
            return {...state, order: action.data}
        }

        case SAVE_ORDERS: {
            return {...state, orders: action.data}
        }


        default:
            return state
    }
};


export default order