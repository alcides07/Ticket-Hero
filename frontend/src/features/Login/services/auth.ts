import api from "../../../services/api";
import {notify} from "../../../components/Toastify";
import { TypeOptions } from "react-toastify";

interface IUser {
    usuario: string;
    senha: string;
};
interface IToast {
    message: string;
    variant: TypeOptions;
};

export const Login = (body:IUser) => {
    return api
    .post("/auth/login/", body)
    .then((response:any) => {

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.usuario.username);
        localStorage.setItem("typeUser", response.data.usuario.tipoUsuario);
        localStorage.setItem("name", response.data.usuario.nomeCompleto);
        localStorage.setItem("userId", response.data.usuario.id);

        const toast: IToast = {
            message: "Login efetuado com sucesso",
            variant: 'success',
        };

        notify(toast);
    })
    .catch((error:any) => {
        console.log('sos', error);
    });
};