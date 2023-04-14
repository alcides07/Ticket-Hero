import {api, headers} from "../../../services/api";

export const deletarEvento = (id:string, onSuccess: (id: string) => void) => {
    return api.delete(`/evento/${id}`, { headers: headers })
    .then((response) => {
        onSuccess(id);
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};