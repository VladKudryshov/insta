import {storageUtils} from "../utils/StorageUtils";

const basket = (state = storageUtils.getOrderStorage(), action) => {

    let newState;
    switch (action.type) {
        case 'ADD_PRODUCT_TO_BASKET':
            newState = [
                ...state,
                {
                    id: action.id,
                    quantity: action.quantity
                }
            ];
            localStorage.setItem("order", JSON.stringify(newState))

            return newState;
        case 'CHANGE_QUANTITY_PRODUCT_IN_BASKET':
            if (action.quantity < 1) {
                newState = state.filter(f => f.id !== action.id);
            }else{
                newState = state.map(product => {
                    if (product.id === action.id) {
                        return {...product, quantity: action.quantity}
                    }
                    return product
                });
            }
            localStorage.setItem("order", JSON.stringify(newState))
            return newState;
        case 'CLEAR_BASKET':
            localStorage.removeItem("order");
            return [];
        case 'SYNC_BASKET':
            return [
                ...state,
                {
                    basketSize: basket
                }
            ];

        default:
            return state
    }
};



export default basket