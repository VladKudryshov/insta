import axios from 'axios';


function getMedia(userId) {

    return axios.get(`http://84.201.155.169:8080/api/intagram/media?userId=` + userId, {headers: {Authorization: localStorage.getItem('token')}})
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                console.log(user);
            }

            return user;
        });
}

function getReports() {

    return axios.get(`http://84.201.155.169:8080/api/intagram/reports`, {headers: {Authorization: localStorage.getItem('token')}})
        .then(handleResponse)
        .then(data => {
            // login successful if there's a user in the response
            if (data) {

                // to keep user logged in between page refreshes
                console.log(data);
            }

            return data;
        });
}


function prepareReport(mediaId, userId) {

    return axios.get(`http://84.201.155.169:8080/api/intagram/report?userId=`+userId+`&mediaId=`+mediaId, {headers: {Authorization: localStorage.getItem('token')}})
        .then(handleResponse)
        .then(data => {
            // login successful if there's a user in the response
            if (data) {

                // to keep user logged in between page refreshes
                console.log(data);
            }

            return data;
        });
}


function getUser(userName) {

    return axios.get(`http://84.201.141.255:8080/api/users/info`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then(handleResponse)
        .then(user => {
            return user;
        });
}


function handleResponse(response) {
    return response.data;
}

const setAccessToken = (response) => {
    const {authorization} = response.headers;
    if (authorization) {
        localStorage.setItem("token", authorization);
    }
    return response;
};

export const instaService = {
    getMedia,
    getUser,
    getReports,
    prepareReport
};