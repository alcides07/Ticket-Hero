import api from "../../../services/api";

export const GetMeusEventos = (Headers: {}) => {
    return api.get("/evento/meusEventos", { headers: Headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};