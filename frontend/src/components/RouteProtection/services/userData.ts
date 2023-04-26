import {api, headers} from "../../../services/api";


export const userData = (header: any) => {
    return api.get(`/auth/user/`, { headers: header }) 
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });
};