import {call, put, takeEvery} from 'redux-saga/effects';
import {productService} from "../services/productService";
import {delay} from "redux-saga";
import {LOAD_PRODUCTS_BAG, SAVE_ORDER_INFO} from "../actions/action";


function* loadProductsBag(action) {
    try {
        const {ids} = action;
        const data = yield call(productService.getProductsByIds, ids);

        yield put({type: SAVE_ORDER_INFO, data});
    } catch (err) {

    }
}

function* catalog() {
    yield takeEvery(LOAD_PRODUCTS_BAG, loadProductsBag);
}

export default catalog;
