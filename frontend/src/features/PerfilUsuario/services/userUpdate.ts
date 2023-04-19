import {api, headers} from "../../../services/api";
import { IDataUser } from "../../../types/IDataUser";

export const userUpdate = (dataUser:IDataUser) => {
    return api.put(`/auth/userUpdate/`, 
    {
        rg:dataUser["rg"], 
        cpf:dataUser["cpf"],
        username:dataUser["username"],
        nomeCompleto:dataUser["nomeCompleto"],
        nascimento:dataUser["nascimento"],
        email: dataUser["email"],
        instagram: dataUser["instagram"]
    },
    {headers: headers}
    )
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('erro: ', error);
    });
};