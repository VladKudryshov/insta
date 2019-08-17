import {call, put, takeEvery} from 'redux-saga/effects';
import {userService} from "../services/userService";
import {LOAD_USERS, SAVE_USERS,} from "../actions/action";


function* loadUsers() {
    try {
        const data = yield call(userService.getUserList);
        yield put({type: SAVE_USERS, data});
    } catch (err) {

    }
}


function* order() {
    yield takeEvery(LOAD_USERS, loadUsers);
}

export default order;
