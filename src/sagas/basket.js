import {call, put, takeEvery} from 'redux-saga/effects';
import {productService} from "../services/productService";
import {ERROR, LOAD_PRODUCTS_BAG, SAVE_ORDER_INFO} from "../actions/action";


function* loadProductsBag(action) {
    try {
        const {ids} = action;
        const data = yield call(productService.getProductsByIds, ids);

        yield put({type: SAVE_ORDER_INFO, data});
    } catch (err) {
        yield put({type: ERROR});
    }
}

function* catalog() {
    yield takeEvery(LOAD_PRODUCTS_BAG, loadProductsBag);
}

export default catalog;
