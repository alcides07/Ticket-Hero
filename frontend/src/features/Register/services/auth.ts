import api from "../../../services/api";

interface IUser {
    usuario: string;
    senha: string;
};

export const Register = (body:IUser) => {
    return api
    .post("/auth/cadastro/", body)
    .then((response) => {
        console.log("cadastrou");
        localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
        console.log('sos', error);
    });
};