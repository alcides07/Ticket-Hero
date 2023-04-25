import {api, headers} from "../../../services/api";


export const userData = (header: any) => {
    console.log("ME MANDARAM ISSO ", header);
    return api.get(`/auth/user/`, { headers: header }) 
    .then((response) => {
        console.log("DEU BOM");
        return response.data;
    })
    .catch(() => {
        console.log('DEU RUIM');
    });
};