import {api, headers} from "../../../services/api";
import { IEvento } from "../../../types/IEvento";

export const getEventsCliente = () => {
    return api
        .get("/compra/minhasCompras", { headers: headers })
        .then((response) => {
            console.log('Objeto esquisito:', response.data);
            let eventos:IEvento[];
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