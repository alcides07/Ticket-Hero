import {api} from "../../../services/api";


export const meusIngressos = () => {
    return api.get("/compra/minhasCompras")
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};