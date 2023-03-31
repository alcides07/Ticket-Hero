import { Nav, Perfil, Logo, Header, Sair } from "./styles"
import {Link} from 'react-router-dom' 
import logo from "../../assets/horizontal-logo.svg"
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Navbar2(){
    const navigate = useNavigate();
    function Logout() {
        localStorage.clear();
        navigate("/");
    }

    return (
        <>
            <Nav>
                <Link to = "/home" > <Logo src = { logo } alt = "Ticket-Hero"></Logo> </Link>
                <Header>
                    <ul>
                        {localStorage.getItem("typeUser") == "organizador" && (
                            <>
                                <li> <Link to = "/evento/criar"> Criar evento </Link></li>
                                <li> <Link to = "/meusEventos"> Meus eventos </Link></li>
                                <li> <Link to = "/eventosPopulares"> Para inspirar </Link></li>
                                <li className = "border"></li>
                            </>
                        )}

                        {localStorage.getItem("typeUser") == "cliente" && (
                            <>
                                <li> <Link to = "/eventosPopulares">Em alta</Link></li>
                                <li> <Link to = "#">Todos os eventos</Link></li>
                                <li> <Link to = "/meusIngressos">Meus ingressos</Link></li>
                                <li className = "border"></li>
                            </>
                        )}
                    </ul>

                    <Perfil>
                        <BsFillPersonFill size={"25"} className = "iconePerfil" />
                        <span>
                            {localStorage.getItem("username")}
                        </span>
                        <ul>
                            <li className = "border"></li>
                        </ul>
                    </Perfil>
                    <Sair onClick = {Logout}> Sair </Sair>
                </Header>

            </Nav>
        </>
    )
}