import {takeEvery, put, call} from 'redux-saga/effects';
import {orderService} from "../services/orderService";


function* loadOrderInfo(action) {
    try {
        const {id} = action;
        const data = yield call(orderService.getOrderById, id);
        yield put({type: 'SAVE_ORDER_INFO', data});
    } catch (err) {
        console.log(err)
    }
}

function* order() {
    yield takeEvery('LOAD_DATA_BY_ID', loadOrderInfo);
}

export default order;
