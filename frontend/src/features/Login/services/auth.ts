import api from "../../../services/api";
import {notify} from "../../../components/Toastify";
import { IToast } from "../../../types/IToast";
import { IUserLogin } from "../../../types/IUserLogin";

export const Login = (body:IUserLogin) => {
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
        console.log("erro: ", error);
        const toast: IToast = {
            message: "Erro ao realizar login.",
            variant: 'error',
        }; 
        notify(toast);
        throw new Error("Erro!");
    });
};