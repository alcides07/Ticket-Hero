import api from "../../../services/api";

export const userData = (Headers: {}) => {
    return api.get(`/auth/user/`, { headers: Headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};