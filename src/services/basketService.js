import axios from 'axios';
import {tokenUtils} from "../utils/tokenUtils";


async function getBasket() {

    let promise = axios.get(`http://84.201.156.96:8080/api/basket`, {headers: {Authorization: tokenUtils.getToken()}})
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