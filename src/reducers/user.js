import {SAVE_USERS} from "../actions/action";

const user = (state = {
    users: []
}, action) => {

    switch (action.type) {
        case SAVE_USERS:{
            return {
                ...state, users: action.data
            };
        }



        default:
            return state
    }
};


export default user