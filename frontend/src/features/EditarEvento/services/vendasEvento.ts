import api from "../../../services/api";

export const vendasEvento = (Headers: {}, id:string) => {
    return api.get(`/evento/${id}/vendas/`, { headers: Headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};