const address = (state = {
    addresses: [],
    address: {}
}, action) => {

    switch (action.type) {
        case 'SAVE_ADDRESS': {
            return {
                ...state,
                addresses: action.data
            }
        }

        default:
            return state
    }
};


export default address