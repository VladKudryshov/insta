import {FILTER} from "../actions/action";

const filter = (state = '', action) => {

    switch (action.type) {
        case FILTER: {
            return action.filter
        }
        default:
            return state
    }
};


export default filter