
function getToken() {

    return  localStorage.getItem('token')
        ? localStorage.getItem('token')
        : ''
}

export const tokenUtils = {
    getToken
};