import {api, headers} from "../../../services/api";


export const logout = () => {
    return api.delete(`/auth/logout/`, { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};