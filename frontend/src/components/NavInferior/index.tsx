import { NavInferior } from "./styles";
import { Link } from 'react-router-dom';
import iconAdd from "./assets/add.png";
import iconEvent from "./assets/event.png";
import iconIdeia from "./assets/ideia.png";

export default function Navbar() {
    return (
        <NavInferior>
            <ul>
                {localStorage.getItem("typeUser") == "organizador" && (
                    <>
                        
                        <li> <img src={iconEvent} alt="Ícone de evento" /> <Link to="/meusEventos"> Meus eventos </Link></li>
                        <li> <img src={iconAdd} alt="Ícone de adição" /> <Link to="/evento/criar"> Criar evento </Link></li>
                        <li> <img src={iconIdeia} alt="Ícone de adição" /> <Link to="/eventosPopulares"> Para inspirar </Link></li>
                    </>
                )}

                {localStorage.getItem("typeUser") == "cliente" && (
                    <> 
                        <li> <Link to="/eventosPopulares">Em alta</Link></li>
                        <li> <Link to="#">Todos os eventos</Link></li>
                        <li> <Link to="/meusIngressos">Meus ingressos</Link></li>
                        <li className="border"></li>
                    </> 
                )}
            </ul>
        </NavInferior>
    );
}