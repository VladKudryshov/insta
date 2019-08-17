import axios from 'axios';
import {setAuth} from './utils/auth';
import {getResponse} from "./utils/other";

const handleError = err => Promise.reject(err.response);

export const fetchGetData = app => axios.get(`/api/${app}`, {
    headers: {
        Authorization: localStorage.getItem('token')
    }
})
    .then(setAuth)
    .then(getResponse)
    .catch(handleError);

export const fetchGetDataById = (id, app) => axios.get(`/api/${app}/${id}`, {
    headers: {
        Authorization: localStorage.getItem('token')
    }
})
    .then(setAuth)
    .then(getResponse)
    .catch(handleError);

export const fetchPostData = (data, app) => axios.post(`/api/${app}`, data, {
    headers: {
        Authorization: localStorage.getItem('token')
    }
})
    .then(setAuth)
    .then(getResponse)
    .catch(handleError);

export const fetchDeleteData = (id, app) => axios.delete(`/api/${app}/${id}`, {
    headers: {
        Authorization: localStorage.getItem('token')
    }
})
    .then(setAuth)
    .then(getResponse)
    .catch(handleError);

export const fetchPutDataById = (data, id, app) => axios.put(`/api/${app}/${id}`, data, {
    headers: {
        Authorization: localStorage.getItem('token')
    }
})
    .then(setAuth)
    .then(getResponse)
    .catch(handleError);
