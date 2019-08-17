import {storageUtils} from "../utils/StorageUtils";

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