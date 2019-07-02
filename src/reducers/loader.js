const order = (state = false, action) => {

    switch (action.type) {
        case 'LOAD_DATA':
        case 'LOAD_DATA_BY_ID':
        case 'LOAD_PRODUCTS_BAG':
        case 'LOAD_ADDRESSES':
            return true;

        case 'SAVE_ORDER_INFO':
        case 'SAVE_ADDRESSES':
        case 'SAVE_CATALOG_PRODUCTS':
        case 'SAVE_ADDRESS':
        case 'SAVE_PRODUCTS_BAG':
            return false;

        default:
            return state
    }
};

export default order