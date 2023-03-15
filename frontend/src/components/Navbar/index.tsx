import { Nav, Perfil, Logo } from "./styles"
import {Link} from 'react-router-dom' 
import logoImagem from "../../assets/horizontal-logo.png"
import fotoPerfil from "../../assets/perfil.png"

export default function Navbar(){
    return (
        <>
            <Nav>
                <Link to = "/home" > <Logo src = { logoImagem } alt = "Ticket-Hero"></Logo> </Link>
                <Perfil>
                    <span>
                        Fulano de tal
                        {/* Coleta nome do usuário do local storage. */}
                    </span>
                    <img src = { fotoPerfil } alt = "Imagem perfil"></img>
                </Perfil>
            </Nav>
        </>
    )
}