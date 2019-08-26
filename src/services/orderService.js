import axios from 'axios';
import {storageUtils} from "../utils/StorageUtils";


async function createOrder(data) {

    let promise = axios.post(`http://localhost:8081/api/order`, data, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse)
        .then(basket => {
            return basket
        });

    return await promise;
}

async function getUserOrders() {

    let promise = axios.get(`http://165.22.89.115:8080/api/order`, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse)
        .then(basket => {
            return basket;
        });

    return await promise;
}

async function getOrders() {

    let promise = axios.get(`http://165.22.89.115:8080/api/order/table`, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse)
        .then(basket => {
            return basket;
        });

    return await promise;
}


async function removeOrderById(id) {

    let promise = axios.delete(`http://165.22.89.115:8080/api/order/`+id, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse);

    return await promise;
}



function handleResponse(response) {
    return response.data;
}



export const orderService = {
    createOrder,
    getOrders,
    getUserOrders,
    removeOrderById
};