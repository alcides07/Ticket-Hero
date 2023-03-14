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
    .then((response) => {
        console.log("logou");
        localStorage.setItem("token", response.data.token);
        const toast: IToast = {
            message: "Login efetuado com sucesso",
            variant: 'success',
        }; 
        notify(toast);
    })
    .catch((error) => {
        console.log('sos', error);
    });
};