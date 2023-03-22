import api from "../../../services/api";
import {notify} from "../../../components/Toastify";
import { IToast } from "../../../types/IToast";

export const compraIngresso = (Headers: {}, quantidade: number, userid: string, eventoId: string) => {
    return api.post("/compra/", { qtdIngresso: quantidade, cliente: userid, evento: eventoId }, { headers: Headers })
    .then((response) => {
        const toast: IToast = {
            message: "Compra realizada com sucesso!",
            variant: 'success',
        }; 
        notify(toast);
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};