import {api} from "../../../services/api";


export const getMeusEventos = () => {
    return api.get("/evento/meusEventos")
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};
export const buscarEventoPublico = (texto:string) => {
    return api.get(`/evento?search=${texto}`)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};