import {api, } from "../../../services/api";

export const getEventoId = (id: string) => {
    return api.get(`/evento/${id}`, { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};