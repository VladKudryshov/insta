import {call, put, takeEvery} from 'redux-saga/effects';
import {delay} from "redux-saga";
import {blogService} from "../services/blogService";
import {LOAD_POSTS_DATA, SAVE_POSTS} from "../actions/action";


function* loadOrderInfo() {
    try {
        const data = yield call(blogService.getPosts);

        yield put({type: SAVE_POSTS, data});
    } catch (err) {

    }
}



function* blog() {
    yield takeEvery(LOAD_POSTS_DATA, loadOrderInfo);
}

export default blog;
