import axios from 'axios';
import {setAuth} from './utils/auth';
import * as other from "./utils/other";
import {getResponse} from "./utils/other";
import {browserHistory} from "react-router";

const handleError = err => Promise.reject(err.response);

export const fetchGetData = app => axios.get(`/api/${app}`, other.getHeadersRequest)
    .then(setAuth)
    .then(getResponse)
    .catch(handleError);

export const fetchGetDataById = (id, app) => axios.get(`/api/${app}/${id}`, {})
    .then(setAuth)
    .then(getResponse)
    .catch(handleError);

export const fetchPostData = (data, app) => axios.post(`/api/${app}`, data, other.getHeadersRequest)
    .then(setAuth)
    .then(getResponse)
    .catch(handleError);

export const fetchDeleteData = (id, app) => axios.delete(`/api/${app}/${id}`, other.getHeadersRequest)
    .then(setAuth)
    .then(getResponse)
    .catch(handleError);

export const fetchPutDataById = (data, id, app) => axios.put(`/api/${app}/${id}`, data, other.getHeadersRequest)
    .then(setAuth)
    .then(getResponse)
    .catch(handleError);


export const fetchLogin = (payload) => axios.post(`/api/users/login`, payload)
    .then(setAuth)
    .then(() => browserHistory.push('/'))
    .catch(handleError);

