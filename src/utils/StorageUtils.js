
function getOrderStorage(){
    return JSON.parse(localStorage.getItem("order")) ? JSON.parse(localStorage.getItem("order")) : [];
}

function getToken() {

    return  localStorage.getItem('token')
        ? localStorage.getItem('token')
        : ''
}

export const storageUtils = {
    getToken,
    getOrderStorage
};