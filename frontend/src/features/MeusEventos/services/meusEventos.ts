import api from "../../../services/api";

export const getMeusEventos = (Headers: {}) => {
    return api.get("/evento/meusEventos", { headers: Headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};