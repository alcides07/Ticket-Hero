import api from "../../../services/api";
import {notify} from "../../../components/Toastify";
import { TypeOptions } from "react-toastify";
interface IToast {
    message: string;
    variant: TypeOptions;
};

interface IUser {
    usuario: string,
    tipoUsuario: string,
    senha: string,
    confirmacaoSenha: string,
    email: string,
    nomeCompleto: string,
    cpf: string,
    rg: string,
    nascimento: Date,
    instagram: string
};

export const Register = (body:IUser) => {
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