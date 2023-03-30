import EventoForm from "../../components/EventoForm";
import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar";

export default function VisualizarEvento(){
    return (
        <>
            <Navbar2/>
            <EventoForm readOnly = {true}/>
            <Footer/>
        </>
    )
}