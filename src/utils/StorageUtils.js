
import {browserHistory} from "react-router";

function getOrderStorage(){
    return localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
}

function getToken() {

    return  localStorage.getItem('token')
        ? localStorage.getItem('token')
        : ''
}

function isAuth() {
    return localStorage.getItem('token') !== null
}

function checkIsAuthenticated() {
    if (localStorage.getItem('token') === null) {

        browserHistory.push('/login');
    }
}



export const storageUtils = {
    getToken,
    getOrderStorage,
    isAuth,
    checkIsAuthenticated
};