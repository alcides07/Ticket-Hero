import api from "../../../services/api";

interface IUser {
    usuario: string;
    senha: string;
};

export const Login = (body:IUser) => {
    return api
    .post("/auth/login/", body)
    .then((response) => {
        console.log("logou");
        localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
        console.log('sos', error);
    });
};