import api from "../../../services/api";
import { IEvento } from "../../../types/IEvento";

export const getEventosParaHoje = (Headers: {}) => {
    return api
        .get("/evento/meusEventosHoje", { headers: Headers })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};
export const getIngressosParaHoje = (Headers: {}) => {
    return api
        .get("/compra/minhasComprasDeEventosDeHoje/", { headers: Headers })
        .then((response) => {
            const eventosDeHoje: Array<IEvento> = [];
            if(response.data != undefined || response.data != null){
                response.data.map((ingresso: any)=>{
                    eventosDeHoje.push(ingresso.evento);
                });
            }
            
            return eventosDeHoje;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};