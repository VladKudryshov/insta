import {call, put, takeEvery} from 'redux-saga/effects';
import {orderService} from "../services/orderService";
import {
    CLEAR_BASKET,
    CREATE_ORDER,
    LOAD_ALL_ORDERS,
    REMOVE_ORDER_BY_ID,
    SAVE_ORDERS, RECEIVE_DATA
} from "../actions/action";


function* loadOrders(action) {
    try {
        const {app} = action;
        const data = yield call(orderService.getOrders);
        yield put({type: RECEIVE_DATA, data, app});
    } catch (err) {

    }
}

function* createOrder(action) {
    try {
        const {basket, contact} = action;
        yield call(orderService.createOrder, {basket, contact});
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
    yield takeEvery(CREATE_ORDER, createOrder);
    yield takeEvery(LOAD_ALL_ORDERS, loadOrders);
    yield takeEvery(REMOVE_ORDER_BY_ID, removeOrder);
}

export default order;
