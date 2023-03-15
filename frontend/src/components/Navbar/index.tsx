import { NavTop, Perfil, Logo, NavBottom } from "./styles"
import {Link} from 'react-router-dom' 
import logoImagem from "../../assets/horizontal-logo.png"
import fotoPerfil from "../../assets/perfil.png"

export default function Navbar(){
    return (
        <>
            <NavTop>
                <Link to = "/home" > <Logo src = { logoImagem } alt = "Ticket-Hero"></Logo> </Link>
                <Perfil>
                    <span>
                        Fulano de tal
                    </span>
                    <img src = { fotoPerfil } alt = "Imagem perfil"></img>
                </Perfil>
            </NavTop>
            <NavBottom>
                <ul>
                    <li> Item1 </li>
                    <li> Item2 </li>
                    <li> Item3 </li>
                    <li> Item4 </li>
                </ul>
            </NavBottom>
        </>
    )
}