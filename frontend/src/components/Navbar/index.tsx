import { Nav, Perfil, Logo } from "./styles"
import {Link} from 'react-router-dom' 
import logo from "../../assets/horizontal-logo.svg"
import { IoPersonCircle } from "react-icons/io5";

export default function Navbar(){
    return (
        <>
            <Nav>
                <Link to = "/home" > <Logo src = { logo } alt = "Ticket-Hero"></Logo> </Link>
                <Perfil>
                    <span>
                        {localStorage.getItem("username")}
                    </span>
                    <IoPersonCircle size={"55"} className = "iconePerfil" />
                </Perfil>
            </Nav>
        </>
    )
}