import {api} from "../../../services/api";

import { IEvento } from './../../../types/IEvento';
import {notify} from "../../../components/Toastify";
import { IToast } from "../../../types/IToast";

export const editarEvento = (id:string, dadosEvento:IEvento) => {
    return api.put(`/evento/${id}/`, 
    {
        id:id,
        nome:dadosEvento["nome"], 
        categoria:dadosEvento["categoria"],
        descricao:dadosEvento["descricao"],
        valorIngresso:dadosEvento["valorIngresso"],
        ingressoTotal:dadosEvento["ingressoTotal"],
        data:dadosEvento["data"],
        local: dadosEvento["local"],
        publico: dadosEvento["publico"],
        idadeMinima: dadosEvento["idadeMinima"],
        pathImg: dadosEvento["pathImg"]
    }
    )
    .then((response) => {
        const toast: IToast = {
            message: "Evento atualizado com sucesso!",
            variant: 'success',
        }; 
        notify(toast);
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};