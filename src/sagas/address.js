import {call, put, takeEvery} from 'redux-saga/effects';
import {userService} from "../services/userService";
import {delay} from "redux-saga";
import {LOAD_ADDRESSES, SAVE_ADDRESS} from "../actions/action";

function* loadAddresses() {
    try {
        const data = yield call(userService.getUserContacts);

        yield put({type: SAVE_ADDRESS, data});
    } catch (err) {

    }
}


function* address() {
    yield takeEvery(LOAD_ADDRESSES, loadAddresses);
}

export default address;
