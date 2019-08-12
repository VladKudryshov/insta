import axios from 'axios';
import {browserHistory} from "react-router";


function login(login, password) {
    const params = { login, password }


    return axios.post(`http://165.22.89.115:8080/api/users/login`, params)
        .then(setAccessToken)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            localStorage.setItem("user", user.email);
            localStorage.setItem("role", user.role);
            browserHistory.push("/")
        });
}


function createUser(login, password) {
    const params = { email: login, password, role: 'USER' }


    return axios.post(`http://165.22.89.115:8080/api/users/registration`, params)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            this.login(login,password)
        });
}


function logout() {
    localStorage.removeItem('token');
    browserHistory.push("/login");
    window.location.reload()
}

function getUserInfo() {

    return axios.get(`http://165.22.89.115:8080/api/users/info`, {headers: {
            Authorization: localStorage.getItem('token')
        }})
        .then(handleResponse);
}

function getUserContacts() {

    return axios.get(`http://165.22.89.115:8080/api/users/contacts`, {headers: {
            Authorization: localStorage.getItem('token')
        }})
        .then(handleResponse);
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
    createUser,
    getUserInfo,
    getUserContacts,
    logout
};