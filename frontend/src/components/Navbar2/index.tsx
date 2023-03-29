import { Nav, Perfil, Logo, Header} from "./styles"
import {Link} from 'react-router-dom' 
import logo from "../../assets/horizontal-logo.svg"
import { IoPersonCircle } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";

export default function Navbar2(){
    return (
        <>
            <Nav>
                <Link to = "/home" > <Logo src = { logo } alt = "Ticket-Hero"></Logo> </Link>
                <Header>
                    <ul>
                        {localStorage.getItem("typeUser") == "organizador" && (
                            <>
                                <li>Criar evento</li>
                                <li>Meus eventos</li>
                                <li>Para inspirar</li>
                                <li className = "border"></li>
                            </>
                        )}

                        {localStorage.getItem("typeUser") == "cliente" && (
                            <>
                                <li>Em alta</li>
                                <li>Todos os eventos</li>
                                <li>Meus ingressos</li>
                                <li className = "border"></li>
                            </>
                        )}
                    </ul>

                    <Perfil>
                        <BsFillPersonFill size={"25"} className = "iconePerfil" />
                        <span>
                            {localStorage.getItem("username")}
                        </span>
                    </Perfil>
                </Header>

            </Nav>
        </>
    )
}