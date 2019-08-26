import axios from 'axios';


function upload(file) {
    const data = new FormData()
    data.append('file', file)
    return axios.post(`http://165.22.89.115:8080/api/file/upload`, data).then(f=>f.data)
}

export const userService = {
    upload
};