import {api, headers} from "../../../services/api";

export const buscarMeusEventos = (texto:string) => {
    return api.get(`/evento?search=${texto}&modo=meusEventos`, { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};