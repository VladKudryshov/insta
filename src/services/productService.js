import axios from 'axios';


function getProducts(filter) {

    return axios.get(`http://84.201.156.96:8080/api/products?size=8&category=`+filter, {headers: {Authorization: localStorage.getItem('token')}})
        .then(handleResponse)
        .then(products => {
            // login successful if there's a user in the response

            return products
        });
}

function handleResponse(response) {
    return response.data;
}


export const productService = {
    getProducts
};