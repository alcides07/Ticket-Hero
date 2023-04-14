import {api, headers} from "../../../services/api";

export const getEventsCliente = () => {
    return api
        .get("/compra/minhasCompras", { headers: headers })
        .then((response) => {
            return response.data;
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