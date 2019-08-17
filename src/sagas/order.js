import {call, put, takeEvery} from 'redux-saga/effects';
import {orderService} from "../services/orderService";
import {
    CLEAR_BASKET,
    CREATE_ORDER,
    LOAD_DATA_BY_ID,
    LOAD_ORDERS, REMOVE_ORDER_BY_ID,
    SAVE_ORDERS,
    SAVE_PRODUCTS_BAG
} from "../actions/action";


function* loadOrderInfo(action) {
    try {
        const {id} = action;
        const data = yield call(orderService.getOrderById, id);

        yield put({type: SAVE_PRODUCTS_BAG, data});
    } catch (err) {

    }
}

function* loadOrders() {
    try {
        const data = yield call(orderService.getOrders);
        yield put({type: SAVE_ORDERS, data});
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

function* removeOrder(action) {
    try {
        const {id} = action;
        yield call(orderService.removeOrderById, id);
        const data = yield call(orderService.getOrders);
        yield put({type: SAVE_ORDERS, data});
    } catch (err) {

    }
}


function* order() {
    yield takeEvery(LOAD_DATA_BY_ID, loadOrderInfo);
    yield takeEvery(CREATE_ORDER, createOrder);
    yield takeEvery(LOAD_ORDERS, loadOrders);
    yield takeEvery(REMOVE_ORDER_BY_ID, removeOrder);
}

export default order;
