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
export const SAVE_CATALOG_PRODUCTS = 'SAVE_CATALOG_PRODUCTS';
export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const SAVE_PRODUCTS_BAG = 'SAVE_PRODUCTS_BAG';
export const SAVE_ORDERS = 'SAVE_ORDERS';
export const SAVE_POSTS = 'SAVE_POSTS';
export const SAVE_POST = 'SAVE_POST';


export const ADD_PRODUCT_CATALOG = 'ADD_PRODUCT_CATALOG';

export const CHANGE_PRODUCT_CATALOG = 'CHANGE_PRODUCT_CATALOG';


export const REMOVE_CATALOG_PRODUCTS = 'REMOVE_CATALOG_PRODUCTS';


export const LOAD_DATA_BY_ID = 'LOAD_DATA_BY_ID';
export const LOAD_PRODUCT_BY_ID = 'LOAD_PRODUCT_BY_ID';
export const LOAD_PRODUCTS_BAG = 'LOAD_PRODUCTS_BAG';
export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_ADDRESSES = 'LOAD_ADDRESSES';
export const LOAD_POSTS_DATA = 'LOAD_POSTS_DATA';
export const LOAD_POST = 'LOAD_POST';
export const LOAD_ORDERS = 'LOAD_ORDERS';
export const ERROR = 'ERROR';



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


export const loadDataById = (id) => ({
    type: LOAD_DATA_BY_ID,
    id,
});

export const loadProductsBag = (ids) => ({
    type: LOAD_PRODUCTS_BAG,
    ids,
});



export const loadData = (filter) => ({
    type: LOAD_DATA,
    filter,
});


export const login = () => ({
    type: LOGIN
});


export const createOrder = (basket, contact) => ({
    type: CREATE_ORDER,
    basket,
    contact
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

export const saveCatalogProducts = (data) => ({
    type: SAVE_CATALOG_PRODUCTS,
    data,
});

export const removeCatalogProduct = (id) => ({
    type: REMOVE_CATALOG_PRODUCTS,
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

export const changeCatalogProduct = (name, value) => ({
    type: CHANGE_PRODUCT_CATALOG,
    name,
    value
});


export const saveProduct = (product) => ({
    type: SAVE_PRODUCT,
    product,
});


export const getProductById = (id) => ({
    type: LOAD_PRODUCT_BY_ID,
    id,
});


export const saveOrders = (data) => ({
    type: SAVE_ORDERS,
    data,
});


export const loadOrders = () => ({
    type: LOAD_ORDERS
});

export const savePosts = (data) => ({
    type: SAVE_POSTS,
    data
});

export const savePost = (data) => ({
    type: SAVE_POST,
    data
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