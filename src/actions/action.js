export const DELETE_DATA_BY_ID = 'DELETE_DATA_BY_ID';
export const SAVE_DATA = 'SAVE_DATA';
export const SAVE_DATA_WITH_IMAGE = 'SAVE_DATA_WITH_IMAGE';
export const UPDATE_DATA_BY_ID = 'UPDATE_DATA_BY_ID';


export const LOAD_ALL_ORDERS = 'LOAD_ALL_ORDERS';


export const FILTER = 'FILTER';

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const CLEAR_DATA = 'CLEAR_DATA';
export const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
export const CHANGE_QUANTITY_PRODUCT_IN_BASKET = 'CHANGE_QUANTITY_PRODUCT_IN_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const LOGIN = 'LOGIN';
export const CREATE_ORDER = 'CREATE_ORDER';
export const EDIT_CONTACT_ORDER = 'EDIT_CONTACT_ORDER';
export const CHOOSED_ADDRESS = 'CHOOSED_ADDRESS';

export const SAVE_ADDRESS = 'SAVE_ADDRESS';
export const SAVE_ORDER_INFO = 'SAVE_ORDER_INFO';
export const SAVE_PRODUCTS_BAG = 'SAVE_PRODUCTS_BAG';
export const SAVE_ORDERS = 'SAVE_ORDERS';
export const SAVE_USERS = 'SAVE_USERS';
export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DATA_BY_ID = 'LOAD_DATA_BY_ID';
export const REMOVE_DATA_BY_ID = 'REMOVE_DATA_BY_ID';


export const ADD_PRODUCT_CATALOG = 'ADD_PRODUCT_CATALOG';

export const CHANGE_DATA_OBJECT = 'CHANGE_DATA_OBJECT';


export const REMOVE_CATALOG_PRODUCTS = 'REMOVE_CATALOG_PRODUCTS';
export const REMOVE_POST = 'REMOVE_POST';
export const REMOVE_ORDER_BY_ID = 'REMOVE_ORDER_BY_ID';


export const LOAD_PRODUCT_BY_ID = 'LOAD_PRODUCT_BY_ID';
export const LOAD_PRODUCTS_BAG = 'LOAD_PRODUCTS_BAG';
export const LOAD_ADDRESSES = 'LOAD_ADDRESSES';
export const LOAD_POSTS_DATA = 'LOAD_POSTS_DATA';
export const LOAD_POST = 'LOAD_POST';
export const LOAD_USERS = 'LOAD_USERS';
export const ERROR = 'ERROR';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';


export const showNotification = (notificationType, title, message) => ({
    type: SHOW_NOTIFICATION,
    notificationType,
    title,
    message,
});

export const login = (login, password) => ({
    type: LOGIN,
    login,
    password
});


export const loadData = (app, filter) => ({
    type: LOAD_DATA,
    app,
    filter
});


export const saveData = (app, data) => ({
    type: SAVE_DATA,
    app,
    data
});

export const saveDataWithImage = (app, data) => ({
    type: SAVE_DATA_WITH_IMAGE,
    app,
    data
});

export const loadDataById = (app, id) => ({
    type: LOAD_DATA_BY_ID,
    app,
    id
});


export const removeDataById = (app, id) => ({
    type: REMOVE_DATA_BY_ID,
    app,
    id
});


export const loadAllOrders = (app) => ({
    type: LOAD_ALL_ORDERS,
    app
});

export const filter = filter => ({
    type: FILTER,
    filter,
});
export const clearData = app => ({
    type: CLEAR_DATA,
    app,
});

export const addProductToBasket = (id, quantity) => ({
    type: ADD_PRODUCT_TO_BASKET,
    id: id,
    quantity: quantity
});

export const changeQuantityProductInBasket = (id, quantity) => ({
    type: CHANGE_QUANTITY_PRODUCT_IN_BASKET,
    id: id,
    quantity: quantity
});


export const clearBasket = () => ({
    type: CLEAR_BASKET
});


export const deleteProductFromBasket = (id) => ({
    type: DELETE_PRODUCT,
    id: id,
});

export const loadProductsBag = (ids) => ({
    type: LOAD_PRODUCTS_BAG,
    ids,
});


export const createOrder = (basket, contact) => ({
    type: CREATE_ORDER,
    basket,
    contact
});

export const removeOrder = (id) => ({
    type: REMOVE_ORDER_BY_ID,
    id
});


export const editContactOrder = (contact) => ({
    type: EDIT_CONTACT_ORDER,
    contact
});

export const saveAddresses = (data) => ({
    type: SAVE_ADDRESS,
    data
});

export const getAddresses = () => ({
    type: LOAD_ADDRESSES
});


export const chooseAddress = (address) => ({
    type: CHOOSED_ADDRESS,
    address
});

export const saveOrderInfo = (data) => ({
    type: SAVE_ORDER_INFO,
    data,
});

export const removeCatalogProduct = (id) => ({
    type: REMOVE_CATALOG_PRODUCTS,
    id,
});


export const removePost = (id) => ({
    type: REMOVE_POST,
    id,
});

export const saveProudctsBAG = (data) => ({
    type: SAVE_PRODUCTS_BAG,
    data,
});


export const addProductToCatalog = (product) => ({
    type: ADD_PRODUCT_CATALOG,
    product,
});


export const changeDataObject = (app, name, value) => ({
    type: CHANGE_DATA_OBJECT,
    app,
    name,
    value
});

export const saveOrders = (data) => ({
    type: SAVE_ORDERS,
    data,
});


export const loadPosts = () => ({
    type: LOAD_POSTS_DATA
});

export const loadPost = (id) => ({
    type: LOAD_POST,
    id
});

export const error = () => ({
    type: ERROR
});


export const saveUsers = (data) => ({
    type: SAVE_USERS,
    data
});


export const loadUsers = () => ({
    type: LOAD_USERS
});
