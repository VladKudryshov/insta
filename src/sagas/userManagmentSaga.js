import {call, put, takeEvery} from 'redux-saga/effects';
import {ERROR, LOGIN,} from '../actions/action';
import {fetchLogin} from "../api";

export function* logIn(action) {
    const {login, password} = action;
    try {
        yield call(fetchLogin, {login, password});
    } catch (err) {
        console.log("adsadasdasd")
        yield put({type: ERROR, err});
    }
}

function* data() {
    yield takeEvery(LOGIN, logIn);
}

export default data;