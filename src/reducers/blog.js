import {SAVE_POST, SAVE_POSTS} from "../actions/action";

let defaultState = {
    posts: [],
    post: {
        statistic: {}
    }
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