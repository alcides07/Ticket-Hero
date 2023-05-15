import { IEvento } from './../../../types/IEvento';
import {api} from "../../../services/api";

import {notify} from "../../../components/Toastify";
import { IToast } from "../../../types/IToast";

export const criarEvento = (dadosEvento:IEvento) => {
    console.log("aq", dadosEvento["imagem"])
    console.log("aq", dadosEvento["publico"])
    console.log(String(dadosEvento["publico"]).charAt(0).toUpperCase() + String(dadosEvento["publico"]).slice(1));

    let formData = new FormData();
    formData.append("nome", dadosEvento["nome"])
    formData.append("categoria", dadosEvento["categoria"])
    formData.append("descricao", dadosEvento["descricao"])
    formData.append("valorIngresso", String(dadosEvento["valorIngresso"]))
    formData.append("ingressoTotal", String(dadosEvento["ingressoTotal"]))
    formData.append("data", dadosEvento["data"])
    formData.append("imagem", dadosEvento["imagem"])
    formData.append("local", dadosEvento["local"])
    formData.append("publico", String(dadosEvento["publico"]).charAt(0).toUpperCase() + String(dadosEvento["publico"]).slice(1))
    formData.append("idadeMinima", String(dadosEvento["idadeMinima"]))
    formData.append("pathImg", dadosEvento["pathImg"])

    return api.post("/evento/", 
    formData, {headers:{"Content-Type": 'multipart/form-data'}})
    .then((response) => {
        const toast: IToast = {
            message: "Evento criado com sucesso!",
            variant: 'success',
        }; 
        notify(toast);
        return response.data;
    })
    .catch((error) => {
        console.log('erro', error);
    });
};