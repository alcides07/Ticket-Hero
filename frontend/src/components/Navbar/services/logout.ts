import api from "../../../services/api";

export const logout = (Headers: {}) => {
    return api.delete(`/auth/logout/`, { headers: Headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};