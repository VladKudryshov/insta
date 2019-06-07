import {storageUtils} from "../utils/StorageUtils";

const basket = (state = {
    basket: storageUtils.getOrderStorage(),
    products: []
}, action) => {

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

            localStorage.setItem("order", JSON.stringify(newState.basket))

            return newState;
        case 'CHANGE_QUANTITY_PRODUCT_IN_BASKET':
            if (action.quantity < 1) {
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
                basket: newState ? newState : [],
                products: state.products
            };
        case 'CLEAR_BASKET':
            localStorage.removeItem("order")
            return {
                basket: [],
                products: []
            };
        case 'SYNC_BASKET':

            return [];
        case 'PRODUCTS':
            return {
                ...state,
                products: action.products
            };
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