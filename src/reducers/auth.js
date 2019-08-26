import {storageUtils} from "../utils/StorageUtils";
import {LOGIN} from "../actions/action";

const auth = (state = storageUtils.isAuth(), action) => {

    switch (action.type) {
        case LOGIN: {
            return true
        }


        default:
            return false
    }
};


export default auth