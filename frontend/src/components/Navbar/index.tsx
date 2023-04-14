import { Nav, Perfil, Logo, Header, Sair } from "./styles"
import {Link} from 'react-router-dom' 
import logo from "../../assets/horizontal-logo.svg"
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { logout } from "./services/logout";

export default function Navbar(){
    const navigate = useNavigate();
    const headers = {
        'Authorization': 'Token ' + localStorage.getItem("token")
    };

    function Logout() {
        logout(headers)
        .then((response) => {
            localStorage.clear();
            navigate("/");
        })
        .catch((erro) => {
            console.log("erro: ", erro);
        })
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
                    </Perfil>
                    <Sair onClick = {Logout}> Sair </Sair>
                </Header>

            </Nav>
        </>
    )
}