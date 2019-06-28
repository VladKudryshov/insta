const catalog = (state = {
    products: []
}, action) => {
    switch (action.type) {
        case 'SAVE_DATA': {
            return {
                products: action.data
            }
        }

        default:
            return state
    }
};


export default catalog