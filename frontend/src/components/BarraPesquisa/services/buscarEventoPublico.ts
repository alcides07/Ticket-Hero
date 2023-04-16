import {api, headers} from "../../../services/api";

export const buscarEventoPublico = (texto:string) => {
    return api.get(`/evento?search=${texto}`, { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};