import axios from 'axios';
import {storageUtils} from "../utils/StorageUtils";



function getPosts() {

    return axios.get(`http://165.22.89.115:8080/api/blog`, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse)
}

function getPost(id) {
    return axios.get(`http://165.22.89.115:8080/api/blog/${id}`, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse);
}

function handleResponse(response) {
    return response.data;
}




export const blogService = {
    getPosts,
    getPost
};