import {api, headers} from "../../../services/api";


export const meusIngressos = () => {
    return api.get("/compra/minhasCompras", { headers: headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};