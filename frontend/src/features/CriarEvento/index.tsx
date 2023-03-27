import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { criarEvento } from "./services/criarEvento";
import EventoForm from "../../components/EventoForm";

export default function CriarEvento(){
    return (
        <>
            <Navbar/>
            <Header/>
            <EventoForm readOnly = {false} textoBotao = "Criar evento" handle={criarEvento} />
            <Footer/>
        </>
    );
}