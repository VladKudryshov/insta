export const RECEIVE_DATA = 'RECEIVE_DATA';
export const CLEAR_DATA = 'CLEAR_DATA';


export const clearData = app => ({
    type: CLEAR_DATA,
    app,
});

export const addProductToBasket = (id, quantity) => ({
    type: 'ADD_PRODUCT_TO_BASKET',
    id: id,
    quantity: quantity
});

export const changeQuantityProductInBasket = (id, quantity) => ({
    type: 'CHANGE_QUANTITY_PRODUCT_IN_BASKET',
    id: id,
    quantity: quantity
});


export const clearBasket = () => ({
    type: 'CLEAR_BASKET'
});


export const deleteProductFromBasket = (id) => ({
    type: 'DELETE_PRODUCT',
    id: id,
});


export const loadDataById = (id) => ({
    type: 'LOAD_DATA_BY_ID',
    id,
});

export const loadProductsBag = (ids) => ({
    type: 'LOAD_PRODUCTS_BAG',
    ids,
});




export const loadData = (filter) => ({
    type: 'LOAD_DATA',
    filter,
});


export const saveOrderInfo = (data) => ({
    type: 'SAVE_DATA',
    data,
});