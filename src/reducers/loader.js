const order = (state = false, action) => {

    switch (action.type) {
        case 'LOAD_DATA':
        case 'LOAD_DATA_BY_ID':
        case 'LOAD_PRODUCTS_BAG':
            return true;

        case 'SAVE_ORDER_INFO':
        case 'SAVE_CATALOG_PRODUCTS':
        case 'SAVE_PRODUCTS_BAG':
            return false;

        default:
            return state
    }
};

export default order