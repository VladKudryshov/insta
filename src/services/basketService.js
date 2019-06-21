import axios from 'axios';
import {storageUtils} from "../utils/StorageUtils";


async function getBasket() {

    let promise = axios.get(`http://165.22.89.115:8080/api/basket`, {headers: {Authorization: storageUtils.getToken()}})
        .then(handleResponse)
        .then(basket => {
            // login successful if there's a user in the response
            localStorage.setItem("order", basket.products)
        });

    return await promise;
}

function handleResponse(response) {
    return response.data;
}



export const basketService = {
    getBasket
};