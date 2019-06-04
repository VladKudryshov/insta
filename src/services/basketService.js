import axios from 'axios';


function getBasket() {

    return axios.get(`http://84.201.156.96:8080/api/basket`, {headers: {Authorization: localStorage.getItem('token')}})
        .then(handleResponse)
        .then(basket => {
            // login successful if there's a user in the response
            localStorage.setItem("order", basket.products)
        });
}

function handleResponse(response) {
    return response.data;
}



export const basketService = {
    getBasket
};