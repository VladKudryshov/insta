import axios from 'axios';
import {browserHistory} from "react-router";
import {setAuth} from "../utils/auth";

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
    window.location.reload()
}

function getUserInfo() {

    return axios.get(`http://165.22.89.115:8080/api/users/info`, )
        .then(handleResponse);
}

function getUserContacts() {

    return axios.get(`http://165.22.89.115:8080/api/users/contacts`, {headers: {
            Authorization: localStorage.getItem('token')
        }})
        .then(handleResponse);
}


function getUserList() {

    return axios.get(`http://165.22.89.115:8080/api/users`, {headers: {
            Authorization: localStorage.getItem('token')
        }})
        .then(handleResponse);
}


function handleResponse(response) {
    return response.data;
}


export const userService = {
    createUser,
    getUserInfo,
    getUserContacts,
    logout,
    getUserList
};