import {call, put, takeEvery} from 'redux-saga/effects';

import {
    DELETE_DATA_BY_ID,
    ERROR,
    LOAD_DATA,
    LOAD_DATA_BY_ID,
    RECEIVE_DATA,
    SAVE_DATA,
    UPDATE_DATA_BY_ID,
} from '../actions/action';

import {
    fetchDeleteData,
    fetchGetData,
    fetchGetDataById,
    fetchPostData,
    fetchPutDataById,
} from '../api';

function* loadData(action) {
    try {
        const { app } = action;
        const data = yield call(fetchGetData, app);
        yield put({ type: RECEIVE_DATA, data, app });
    } catch (err) {
        yield put({ type: ERROR, err });
    }
}

function* loadDataById(action) {
    try {
        const { app, id } = action;
        const data = yield call(fetchGetDataById, id, app);
        yield put({ type: RECEIVE_DATA, data, app });
    } catch (err) {
        yield put({ type: ERROR, err });
    }
}

function* deleteDataById(action) {
    try {
        const { app, id } = action;
        yield call(fetchDeleteData, id, app);
        const data = yield call(fetchGetData, app);
        yield put({ type: RECEIVE_DATA, data, app });
    } catch (err) {
        yield put({ type: ERROR, err });
    }
}

function* saveData(action) {
    try {
        const { newData, app } = action;
        yield call(fetchPostData, newData, app);
        const data = yield call(fetchGetData, app);
        yield put({ type: RECEIVE_DATA, data, app });
    } catch (err) {
        yield put({ type: ERROR, err });
    }
}

function* updateDataById(action) {
    try {
        const { newData, app, id } = action;
        yield call(fetchPutDataById, newData, id, app);
        const data = yield call(fetchGetDataById, id, app);
        yield put({ type: RECEIVE_DATA, data, app });
    } catch (err) {
        yield put({ type: ERROR, err });
    }
}

function* data() {
    yield takeEvery(LOAD_DATA, loadData);
    yield takeEvery(LOAD_DATA_BY_ID, loadDataById);
    yield takeEvery(DELETE_DATA_BY_ID, deleteDataById);
    yield takeEvery(SAVE_DATA, saveData);
    yield takeEvery(UPDATE_DATA_BY_ID, updateDataById);
}

export default data;