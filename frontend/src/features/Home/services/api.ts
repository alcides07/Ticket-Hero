import api from "../../../services/api";

export const getEventsCliente = () => {
    return api
        .get("/evento/meusEventos")
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const getEventsOrganizador = (Headers: {}) => {
    
    return api.get("/compra/minhasCompras", { headers: Headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};