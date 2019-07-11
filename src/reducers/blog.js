import {SAVE_POSTS} from "../actions/action";

let defaultState = [];
const blog = (state = defaultState, action) => {

    switch (action.type) {
        case SAVE_POSTS: {
            return action.data
        }

        default:
            return state
    }
};


export default blog