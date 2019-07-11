import {call, put, takeEvery} from 'redux-saga/effects';
import {productService} from "../services/productService";
import {delay} from "redux-saga";
import {LOAD_DATA, SAVE_CATALOG_PRODUCTS} from "../actions/action";


function* loadProductPage(action) {
    try {
        const {filter} = action;
        const data = yield call(productService.getProducts, filter);

        yield put({type: SAVE_CATALOG_PRODUCTS, data});
    } catch (err) {

    }
}

function* catalog() {
    yield takeEvery(LOAD_DATA, loadProductPage);
}

export default catalog;
