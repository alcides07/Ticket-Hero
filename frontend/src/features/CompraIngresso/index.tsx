import EventoForm from "../../components/EventoForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { compraIngresso } from "./services/compra";

export default function CompraIngresso(){
    return (
        <>
            <Navbar/>
            <EventoForm handle = {compraIngresso} readOnly = {true} buy = {true} textoBotao = {"Finalizar compra"}/>
            <Footer/>
        </>
    )
}