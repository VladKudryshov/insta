import {call, put, takeEvery} from 'redux-saga/effects';
import {productService} from "../services/productService";
import {
    ADD_PRODUCT_CATALOG,
    CLEAR_DATA,
    ERROR,
    LOAD_DATA,
    LOAD_PRODUCT_BY_ID,
    REMOVE_CATALOG_PRODUCTS,
    SAVE_CATALOG_PRODUCTS,
    SAVE_PRODUCT
} from "../actions/action";
import {userService as fileService} from "../services/fileService";


function* loadProductPage(action) {
    try {
        const {filter} = action;
        const data = yield call(productService.getProducts, filter);

        yield put({type: SAVE_CATALOG_PRODUCTS, data});
    } catch (err) {

    }
}

function* getProductById(action) {
    try {
        const {id} = action;
        yield put({type: CLEAR_DATA});
        const data = yield call(productService.getProductById, id);
        yield put({type: SAVE_PRODUCT, data});
    } catch (err) {
        yield put({type: ERROR});
    }

}

function* removeProduct(action) {
    try {
        const {id} = action;
        yield call(productService.deleteProductById, id);
        const data = yield call(productService.getProducts, '');
        yield put({type: SAVE_CATALOG_PRODUCTS, data});
    } catch (err) {

    }
}


function* addProductCatalog(action) {
    try {
        const {product} = action;

        const urlFile = yield call(fileService.upload, product.file);
        yield call(productService.addProduct, {...product, image: urlFile});
        const data = yield call(productService.getProducts, '');
        yield put({type: SAVE_CATALOG_PRODUCTS, data});
    } catch (err) {
        console.log(err)
    }
}


function* catalog() {
    yield takeEvery(LOAD_DATA, loadProductPage);
    yield takeEvery(REMOVE_CATALOG_PRODUCTS, removeProduct);
    yield takeEvery(ADD_PRODUCT_CATALOG, addProductCatalog);
    yield takeEvery(LOAD_PRODUCT_BY_ID, getProductById);
}

export default catalog;
