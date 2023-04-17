import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userData } from "./services/userData";

export default function RouteProtection({ tipoUsuario, children }: { tipoUsuario: string, children: React.ReactNode | React.PropsWithChildren }) {
    const navigate = useNavigate();

    const [ success, setSuccess ] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token") == null) {
            localStorage.clear();
            navigate("/");
            return;
        }

        userData()
        .then((response) => {
            if (tipoUsuario != "any" && response.usuario.tipoUsuario != tipoUsuario){
                navigate("*");
            }
            else{
                setSuccess(true);
            }
        })
        .catch((erro) => {
            console.log("erro: ", erro);
        })
    }, [])


    return (
        <>
            { success && children }
        </>
    )
}