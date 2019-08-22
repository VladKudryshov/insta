import axios from 'axios';
import {storageUtils} from "../utils/StorageUtils";


export const getHistory = (id)=> {
    return axios.get(`http://165.22.89.115:8080/history/${id}`, {headers: {Authorization: storageUtils.getToken()}})
}



export const history = {
    getHistory
};