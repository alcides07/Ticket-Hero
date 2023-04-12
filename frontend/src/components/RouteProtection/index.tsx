import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from 'react-router-dom';

interface IPropsProtecao {
  tipoUsuario: string;
  componente: React.FC;
}

export const withProtectedRoute = ({ tipoUsuario, componente: Component}: IPropsProtecao) => {
    const { getUsuario, getToken } = useContext(UsuarioContext);
  
    const isAuthorized = () => {
        if (tipoUsuario != 'any'){
            return localStorage.getItem("token") != null && localStorage.getItem("token") !== "";
        }
        return true; // Telas de registro e login que não preciso validar token.
    };
    
    const ProtectedRoute = () => {
        const navigate = useNavigate();
        if (!isAuthorized()) {
            console.log("FULANO ESTÁ SEM TOKEN! VOLTAR PARA LOGIN!");
            navigate("/");
        }
        if (tipoUsuario != 'any'){
            if (localStorage.getItem("typeUser") !== tipoUsuario){
                console.log("NÃO TENHO ACESSO A ESSA PÁGINA, DEVO FAZER ALGO!");
            }
        }
        return <Component />;
    };

    return <ProtectedRoute />;
};
