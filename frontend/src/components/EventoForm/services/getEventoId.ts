import {api } from "../../../services/api";

export const getEventoId = (id: string) => {
    return api.get(`/evento/${id}`)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};