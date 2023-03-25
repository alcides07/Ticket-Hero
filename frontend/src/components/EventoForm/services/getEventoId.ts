import api from "../../../services/api";

export const getEventoId = (Headers: {}, id: string) => {
    return api.get(`/evento/${id}`, { headers: Headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};