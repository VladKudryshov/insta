import axios from 'axios';
import {storageUtils} from "../utils/StorageUtils";


async function createOrder(basketProducts, orderContact) {

    let promise = axios.post(`http://84.201.156.96:8080/api/order`, {basketProducts, orderContact}, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse)
        .then(basket => {
            return basket
        });

    return await promise;
}

async function getUserOrders() {

    let promise = axios.get(`http://84.201.156.96:8080/api/order`, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse)
        .then(basket => {
            return basket;
        });

    return await promise;
}

async function getOrderById(id) {

    let promise = axios.get(`http://84.201.156.96:8080/api/order/`+id, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse)
        .then(basket => {
            return basket;
        });

    return await promise;
}


function handleResponse(response) {
    return response.data;
}



export const orderService = {
    createOrder,
    getUserOrders,
    getOrderById
};