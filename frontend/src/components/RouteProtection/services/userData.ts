import {api} from "../../../services/api";


export const userData = () => {
    return api.get(`/auth/user/`) 
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });
};