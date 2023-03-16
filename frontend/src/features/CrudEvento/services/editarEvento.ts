import api from "../../../services/api";

export const editarEvento = (id:string, Headers: {}) => {
    return api.patch(`/evento/${id}`, { headers: Headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};