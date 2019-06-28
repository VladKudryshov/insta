const order = (state = {
        orderContact: {},
        productOrder: [],
        orderStatus: ''
}, action) => {

    switch (action.type) {
        case 'SAVE_PRODUCTS_BAG': {
            return action.data
        }

        default:
            return state
    }
};


export default order