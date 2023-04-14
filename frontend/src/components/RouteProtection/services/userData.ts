import {api, headers} from "../../../services/api";

export const userData = () => {
    return api.get(`/auth/user/`, { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};