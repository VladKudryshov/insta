import axios from 'axios';
import {tokenUtils} from "../utils/tokenUtils";


function getProducts(filter) {

    return axios.get(`http://84.201.156.96:8080/api/products?size=8&category=`+filter, {headers: {Authorization: tokenUtils.getToken()}})
        .then(handleResponse)
        .then(products => {
            // login successful if there's a user in the response

            return products
        });
}

function handleResponse(response) {
    return response.data;
}

function getProductsByIds(ids) {
    return axios.post(`http://84.201.156.96:8080/api/products/cart`, ids, {headers: {Authorization: tokenUtils.getToken()}})
        .then(handleResponse);
}


export const productService = {
    getProducts,
    getProductsByIds
};