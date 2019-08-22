import decode from "jwt-decode";
import {browserHistory} from 'react-router';

export const setAuth = (response) => {
    const {headers: {authorization}} = response;
    if (authorization) {
        localStorage.setItem("token", authorization);
    }
    return response;
};


export const checkIsAdmin = () => {

    let token = localStorage.getItem("token");
    if (token && token !== null) {
        console.log(token)
        let headers = decode(token.replace('Bearer ', ''), {header: true});
        if (headers.role && headers.role !== 'ADMIN') {
            browserHistory.push('/')
        }
    } else {
        browserHistory.push('/')
    }
};


export const notAuth = () => {

    let token = localStorage.getItem("token");
    if (!token) {
        browserHistory.push('/login')
    }
};


export const isAuth = () => {

    let token = localStorage.getItem("token");
    if (token) {
        browserHistory.push('/')
    }
};

