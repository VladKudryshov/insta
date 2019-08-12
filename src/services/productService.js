import axios from 'axios';
import {storageUtils} from "../utils/StorageUtils";

function getProducts(filter) {

    return axios.get(`http://165.22.89.115:8080/api/products?size=100&category=`+filter, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse)
        .then(products => {
            return products['content']
        });
}

function handleResponse(response) {
    return response.data;
}

function getProductsByIds(ids) {
    return axios.post(`http://165.22.89.115:8080/api/products/cart`, ids, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse);
}

function getProductById(id) {
    return axios.get(`http://165.22.89.115:8080/api/products/${id}`, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse);
}


function addProduct(product) {
    return axios.post(`http://165.22.89.115:8080/api/products`, product, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse);
}


function deleteProductById(id) {
    return axios.delete(`http://165.22.89.115:8080/api/products/${id}`, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse);
}

export const productService = {
    getProducts,
    getProductById,
    getProductsByIds,
    addProduct,
    deleteProductById,
};