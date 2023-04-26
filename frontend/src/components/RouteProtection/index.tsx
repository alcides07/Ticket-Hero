import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userData } from "./services/userData";

export default function RouteProtection({ tipoUsuario, children }: { tipoUsuario: string, children: React.ReactNode | React.PropsWithChildren }) {
    const navigate = useNavigate();

    const [ success, setSuccess ] = useState(false);
    const verificaUsuario = async (header:any) => {
        await userData(header)
        .then((response) => { 
            if (tipoUsuario != "any" && response.usuario.tipoUsuario != tipoUsuario ){
                navigate("*");
            }
            else{
                setSuccess(true);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        const toquinho = localStorage.getItem("token");
        if (!toquinho) {
            localStorage.clear();
            navigate("/");
            return;
        }else{
            const headers = {
                'Authorization': 'Token ' + localStorage.getItem("token")
            };
            verificaUsuario(headers);
        }
        
        
    }, [])
    return (
        <>
            { success && children }
        </>
    )
}