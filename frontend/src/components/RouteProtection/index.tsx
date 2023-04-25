import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userData } from "./services/userData";

export default function RouteProtection({ tipoUsuario, children }: { tipoUsuario: string, children: React.ReactNode | React.PropsWithChildren }) {
    const navigate = useNavigate();

    const [ success, setSuccess ] = useState(false);
    const verificaUsuario = async (header:any) => {
        await userData(header)
        .then((response) => {
            console.log('TIPO DE USER RESP', response.usuario.tipoUsuario, "tipo de usuario", tipoUsuario); 
            if (tipoUsuario != "any" && response.usuario.tipoUsuario != tipoUsuario ){
                navigate("*");
            }
            else{
                console.log('ME DEIXARAM ENTRAR'); 
                setSuccess(true);
            }
        })
        .catch(() => {
            console.log("CATCH DO USER");
        })
    }

    useEffect(() => {
        const toquinho = localStorage.getItem("token");
        console.log("Protetor de ROTAS:", localStorage.getItem("token"));
        if (!toquinho) {
            console.log('n tinha toquinho ');
            localStorage.clear();
            navigate("/");
            return;
        }else{
            console.log('tinha toquinho ?', localStorage.getItem("token"));
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