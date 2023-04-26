import {api} from "../../../services/api";
import { IEvento } from "../../../types/IEvento";

export const getEventsCliente = () => {
    const eventos: Array<IEvento> = [];
    return api
        .get("/compra/minhasCompras")
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

export const getEventsOrganizador = () => {
    return api.get("/evento/meusEventos")
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro de eventos do organizador: ', error);
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