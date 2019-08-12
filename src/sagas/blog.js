import {call, put, takeEvery} from 'redux-saga/effects';
import {blogService} from "../services/blogService";
import {LOAD_POST, LOAD_POSTS_DATA, SAVE_POST, SAVE_POSTS} from "../actions/action";


function* loadPosts() {
    try {
        const data = yield call(blogService.getPosts);

        yield put({type: SAVE_POSTS, data});
    } catch (err) {

    }
}

function* loadPost(action) {
    try {
        const {id} = action;
        const data = yield call(blogService.getPost, id);

        yield put({type: SAVE_POST, data});
    } catch (err) {

    }
}


function* blog() {
    yield takeEvery(LOAD_POSTS_DATA, loadPosts);
    yield takeEvery(LOAD_POST, loadPost);
}

export default blog;
