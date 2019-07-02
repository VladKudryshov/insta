import {storageUtils} from "../utils/StorageUtils";

let defaultState = {
    basket: storageUtils.getOrderStorage(),
    products: [],
    contact: {}
};
const basket = (state = defaultState, action) => {

    let newState;
    switch (action.type) {
        case 'ADD_PRODUCT_TO_BASKET':


            newState = {
                basket: [
                    ...state.basket,
                    {
                        id: action.id,
                        quantity: action.quantity
                    }
                ]
            };

            let product = state.basket.find(f=>f.id === action.id);
            //
            if(product){
                newState = {
                    basket: state.basket.filter(f => f.id !== action.id)
                };
            }

            localStorage.setItem("order", JSON.stringify(newState.basket ? newState.basket : []));

            return {
                ...state,
                basket: state.basket ? newState.basket : [],
                products: state.products ? state.products : []
            };
        case 'CHANGE_QUANTITY_PRODUCT_IN_BASKET':
            if (action.quantity === 0) {
                newState = state.basket.filter(f => f.id !== action.id);
            } else {
                newState = state.basket.map(product => {
                    if (product.id === action.id) {
                        return {...product, quantity: action.quantity}
                    }
                    return product
                });
            }
            localStorage.setItem("order", JSON.stringify(newState))
            return {
                ...state,
                basket: newState ? newState : [],
                products: state.products
            };
        case 'CLEAR_BASKET':
            localStorage.removeItem("order")
            return {
                ...defaultState,
                basket: []
            };
        case 'SYNC_BASKET':

            return defaultState;

        case 'SAVE_ORDER_INFO':
            return {
                ...state,
                products: action.data
            };

        case 'EDIT_CONTACT_ORDER':
            return {
                ...state,
                contact: action.contact
            };

        case 'CHOOSED_ADDRESS': {
            return {
                ...state,
                contact: action.address
            }
        }

        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(f => f.id !== action.id)
            };

        default:
            return state
    }
};


export default basket