import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { editarEvento } from "./services/editarEvento";
import EventoForm from "../../components/EventoForm";

export default function EditarEvento(){
    return (
        <>
            <Navbar/>
            <Header/>
            <EventoForm readOnly = {false} textoBotao = "Salvar evento" handle={editarEvento} />
            <Footer/>
        </>
    );
}