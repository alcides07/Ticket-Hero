import {api, headers} from "../../../services/api";

export const getMeusEventos = (eventosPorPagina:number, paginaAtual:number) => {
    return api.get(`/evento/meusEventos/?limit=${eventosPorPagina}&offset=${paginaAtual}`, { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};
export const buscarEventoPublico = (texto:string, eventosPorPagina:number, paginaAtual:number) => {
    return api.get(`/evento?limit=${eventosPorPagina}&offset=${paginaAtual}&search=${texto}&modo=publicos`, { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};