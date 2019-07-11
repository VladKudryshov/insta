import {takeEvery, put, call} from 'redux-saga/effects';
import {orderService} from "../services/orderService";
import {delay} from "redux-saga";
import {CLEAR_BASKET, CREATE_ORDER, LOAD_DATA_BY_ID, SAVE_PRODUCTS_BAG} from "../actions/action";


function* loadOrderInfo(action) {
    try {
        const {id} = action;
        const data = yield call(orderService.getOrderById, id);

        yield put({type: SAVE_PRODUCTS_BAG, data});
    } catch (err) {

    }
}

function* createOrder(action) {
    try {
        const {basket, contact} = action;
        yield call(orderService.createOrder, basket, contact);
        yield put({type: CLEAR_BASKET});
    } catch (err) {

    }
}


function* order() {
    yield takeEvery(LOAD_DATA_BY_ID, loadOrderInfo);
    yield takeEvery(CREATE_ORDER, createOrder);
}

export default order;
