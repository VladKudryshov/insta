import {CHANGE_PRODUCT_CATALOG, CLEAR_DATA, SAVE_CATALOG_PRODUCTS, SAVE_PRODUCT} from "../actions/action";

const catalog = (state = {
    products: [],
    product: {
        discount: 0,
        price: 0,
        priceWithDiscount: 0,
        unitName: "КГ",
        unitNumber: 1
    }
}, action) => {
    switch (action.type) {
        case SAVE_CATALOG_PRODUCTS: {
            return {
                ...state,
                products: action.data
            }
        }
        case SAVE_PRODUCT: {
            return {
                ...state,
                product: action.data
            }
        }
        case CHANGE_PRODUCT_CATALOG: {

            const {name, value} = action;
            return {
                ...state,
                product: {...state.product, [name]: value}
            }
        }
        case CLEAR_DATA: {
            return {
                products: [],
                product: {
                    discount: 0,
                    price: 0,
                    priceWithDiscount: 0,
                    unitName: "КГ",
                    unitNumber: 1
                }
            }
        }

        default:
            return state
    }
};


export default catalog