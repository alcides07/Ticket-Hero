import EventoForm from "../../components/EventoForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function VisualizarEvento(){
    return (
        <>
            <Navbar/>
            <Header/>
            <EventoForm disable = {true}/>
            <Footer/>
        </>
    )
}