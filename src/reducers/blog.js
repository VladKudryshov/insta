import {SAVE_POST, SAVE_POSTS} from "../actions/action";

let defaultState = {
    posts: [{
        statistic: {
            viewers: 1,
            comments: 1
        }}, {
        statistic: {
            viewers: 1,
            comments: 1
        }}, {
        statistic: {
            viewers: 1,
            comments: 1
        }}],
    post: {statistic: {
            viewers: 1,
            comments: 1
        }}

};
const blog = (state = defaultState, action) => {

    switch (action.type) {
        case SAVE_POSTS: {
            return {...state, posts: action.data}
        }

        case SAVE_POST: {
            return {...state, post: action.data}
        }

        default:
            return state
    }
};


export default blog