import {api, headers} from "../../../services/api";


export const getMeusEventos = () => {
    console.log('toquinho dos MEUS EVENTOS', headers);
    return api.get("/evento/meusEventos", { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};
export const buscarEventoPublico = (texto:string) => {
    return api.get(`/evento?search=${texto}`, { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};