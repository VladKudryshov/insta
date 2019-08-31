import {call, put, takeEvery} from 'redux-saga/effects';
import {delay} from 'redux-saga'
import {
    ERROR,
    LOAD_DATA,
    LOAD_DATA_BY_ID,
    RECEIVE_DATA,
    REMOVE_DATA_BY_ID,
    SAVE_DATA, SAVE_DATA_WITH_IMAGE,
} from '../actions/action';

import {fetchDeleteData, fetchGetData, fetchGetDataById, fetchPostData, fetchPutDataById,} from '../api';
import {upload} from '../services/fileService';

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
        const { data, app } = action;
        yield call(fetchPostData, data, app);
        const newData = yield call(fetchGetData, data);
        yield put({ type: RECEIVE_DATA, newData, app });
    } catch (err) {
        yield put({ type: ERROR, err });
    }
}


function* saveDataWithImage(action) {
    try {
        const { data, app } = action;
        console.log(data.file)
        let fileUrl = yield call(upload, data.file);
        yield call(fetchPostData, {...data, image: fileUrl}, app);
        const newData = yield call(fetchGetData, app);
        yield put({ type: RECEIVE_DATA, newData, app });
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
    yield takeEvery(REMOVE_DATA_BY_ID, deleteDataById);
    yield takeEvery(SAVE_DATA, saveData);
    yield takeEvery(SAVE_DATA_WITH_IMAGE, saveDataWithImage);
    // yield takeEvery(UPDATE_DATA_BY_ID, updateDataById);
}

export default data;