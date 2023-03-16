import api from "../../../services/api";

export const deletarEvento = (id:string, Headers: {}, onSuccess: (id: string) => void) => {
    return api.delete(`/evento/${id}`, { headers: Headers })
    .then((response) => {
        onSuccess(id);
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};