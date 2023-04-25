import {api} from "../../../services/api";
import { IEvento } from "../../../types/IEvento";

export const getEventsCliente = (headers:any) => {
    const eventos: Array<IEvento> = [];
    return api
        .get("/compra/minhasCompras", { headers: headers })
        .then((response) => {
            response.data.map((ingresso:any)=>{
                eventos.push(ingresso.evento);
            })
            return eventos;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const getEventsOrganizador = (headers:any) => {
    return api.get("/evento/meusEventos", { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro de eventos do organizador: ', error);
    });
};

export const buscarEventoPublico = (texto:string, headers:any) => {
    return api.get(`/evento?search=${texto}`, { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};