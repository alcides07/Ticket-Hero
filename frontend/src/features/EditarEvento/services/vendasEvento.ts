import {api, headers} from "../../../services/api";

export const vendasEvento = (id:string) => {
    return api.get(`/evento/${id}/vendas/`, { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};