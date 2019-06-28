import {call, put, takeEvery} from 'redux-saga/effects';
import {productService} from "../services/productService";
import {delay} from "redux-saga";


function* loadProductPage(action) {
    try {
        const {filter} = action;
        const data = yield call(productService.getProducts, filter);
        yield delay(400);
        yield put({type: 'SAVE_DATA', data});
    } catch (err) {
        console.log(err)
    }
}

function* catalog() {
    yield takeEvery('LOAD_DATA', loadProductPage);
}

export default catalog;
