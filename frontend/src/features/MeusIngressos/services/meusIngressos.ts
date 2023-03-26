import api from "../../../services/api";

export const meusIngressos = (Headers: {}) => {
    return api.get("/compra/minhasCompras", { headers: Headers })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};