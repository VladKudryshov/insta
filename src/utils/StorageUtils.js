
function getOrderStorage(){
    return localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
}

function getToken() {

    return  localStorage.getItem('token')
        ? localStorage.getItem('token')
        : ''
}

function isAuth() {
    return localStorage.getItem('token') === null
}


export const storageUtils = {
    getToken,
    getOrderStorage,
    isAuth
};