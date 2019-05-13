import axios from 'axios';


function login(login, password) {
    const params = { login, password }


    return axios.post(`http://84.201.155.169:8080/api/users/login`, params)
        .then(setAccessToken)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            window.location.reload();
        });
}

function logout() {

    localStorage.removeItem('token');
    window.location.reload();
}

function getUserInfo() {

    return axios.get(`http://84.201.141.255:8080/api/users/info`, {headers: {
            Authorization: localStorage.getItem('token')
        }})
        .then(handleResponse)
        .then(user => {
            return user;
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

export const userService = {
    login,
    getUserInfo,
    logout
};