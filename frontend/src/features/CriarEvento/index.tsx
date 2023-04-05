import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { criarEvento } from "./services/criarEvento";
import EventoForm from "../../components/EventoForm";

export default function CriarEvento(){
    return (
        <>
            <Navbar/>
            <EventoForm readOnly = {false} textoBotao = "Criar evento" handle={criarEvento} />
            <Footer/>
        </>
    );
}