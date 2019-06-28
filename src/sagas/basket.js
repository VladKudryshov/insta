import {call, put, takeEvery} from 'redux-saga/effects';
import {productService} from "../services/productService";
import {delay} from "redux-saga";


function* loadProductsBag(action) {
    try {
        const {ids} = action;
        const data = yield call(productService.getProductsByIds, ids);
        yield delay(400);
        yield put({type: 'SAVE_DATA', data});
    } catch (err) {
        console.log(err)
    }
}

function* catalog() {
    yield takeEvery('LOAD_PRODUCTS_BAG', loadProductsBag);
}

export default catalog;
