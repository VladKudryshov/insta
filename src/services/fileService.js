import axios from 'axios';

export const upload = (file) => {
    const data = new FormData();
    data.append('file', file);
    return axios.post(`/api/file/upload`, data).then(f => f.data)
};

