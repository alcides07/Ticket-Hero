import EventoForm from "../../components/EventoForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function VisualizarEvento(){
    return (
        <>
            <Navbar/>
            <EventoForm readOnly = {true}/>
            <Footer/>
        </>
    )
}