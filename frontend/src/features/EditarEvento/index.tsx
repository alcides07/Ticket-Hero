import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { editarEvento } from "./services/editarEvento";
import EventoForm from "../../components/EventoForm";
import TabelaVendas from "./components/TabelaVendas";

export default function EditarEvento(){
    return (
        <>
            <Navbar/>
            <EventoForm readOnly = {false} textoBotao = "Salvar evento" handle={editarEvento} />
            <TabelaVendas/>
            <Footer/>
        </>
    );
}