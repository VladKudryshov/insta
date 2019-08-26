import decode from "jwt-decode";
import {browserHistory} from 'react-router';

export const setAuth = (response) => {
    const {headers: {authorization}, data: {email}} = response;
    if (authorization) {
        localStorage.setItem("token", authorization);
        localStorage.setItem("user", email);
    }
    return response;
};


export const checkIsAdmin = () => {

    let token = localStorage.getItem("token");
    if (token) {
        let headers = decode(token.replace('Bearer ', ''), {header: true});
        if (headers.role && headers.role !== 'ADMIN') {
            return false;
        }
    } else {
        return false;
    }
    return true;
};

export const redirectAdmin = () => {
    if (!checkIsAdmin()) {
        browserHistory.push('/')
    }
}


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

