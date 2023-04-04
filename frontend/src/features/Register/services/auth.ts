import api from "../../../services/api";
import { notify } from "../../../components/Toastify";
import { IToast } from "../../../types/IToast";
import { IUserRegistro } from "../../../types/IUserRegistro";

export const Register = (body:IUserRegistro) => {
    return api
    .post("/auth/cadastro/", body)
    .then(() => {
        const toast: IToast = {
            message: "Cadastro efetuado com sucesso.",
            variant: 'success',
        }; 
        notify(toast);
    })
    .catch(() => {
        const toast: IToast = {
            message: "Erro ao cadastrar usuário.",
            variant: 'error',
        }; 
        notify(toast);
    });
};