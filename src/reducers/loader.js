const order = (state = false, action) => {

    switch (action.type) {
        case 'LOAD_DATA_BY_ID':
            return true;

        case 'SAVE_ORDER_INFO':
            return false;

        default:
            return state
    }
};


export default order