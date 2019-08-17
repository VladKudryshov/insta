export const setAuth = (response) => {
    const {headers: {authorization}, data: {email, role,}} = response;

    if (authorization) {
        localStorage.setItem("token", authorization);
        localStorage.setItem("user", email);
        localStorage.setItem("role", role);
    }
    return response;
};
