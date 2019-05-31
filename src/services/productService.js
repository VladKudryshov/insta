import axios from 'axios';


function getProducts() {

    return axios.get(`http://84.201.156.96:8080/api/products?size=8`, {headers: {Authorization: localStorage.getItem('token')}})
        .then(handleResponse)
        .then(products => {
            // login successful if there's a user in the response

            return products
        });
}

function handleResponse(response) {
    return response.data;
}

const setAccessToken = (response) => {
    const { authorization } = response.headers;
    if (authorization) {
        localStorage.setItem("token", authorization);
    }
    return response;
};

export const productService = {
    getProducts
};