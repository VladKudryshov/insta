import {takeEvery, put, call} from 'redux-saga/effects';
import {orderService} from "../services/orderService";
import {delay} from "redux-saga";


function* loadOrderInfo(action) {
    try {
        const {id} = action;
        const data = yield call(orderService.getOrderById, id);
        yield delay(400);
        yield put({type: 'SAVE_DATA', data});
    } catch (err) {
        console.log(err)
    }
}

function* order() {
    yield takeEvery('LOAD_DATA_BY_ID', loadOrderInfo);
}

export default order;
