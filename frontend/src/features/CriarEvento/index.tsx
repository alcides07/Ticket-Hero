import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar";
import { criarEvento } from "./services/criarEvento";
import EventoForm from "../../components/EventoForm";

export default function CriarEvento(){
    return (
        <>
            <Navbar2/>
            <EventoForm readOnly = {false} textoBotao = "Criar evento" handle={criarEvento} />
            <Footer/>
        </>
    );
}