import EventoForm from "../../components/EventoForm";
import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar";
import { compraIngresso } from "./services/compra";

export default function CompraIngresso(){
    return (
        <>
            <Navbar2/>
            <EventoForm handle = {compraIngresso} readOnly = {true} buy = {true} textoBotao = {"Finalizar compra"}/>
            <Footer/>
        </>
    )
}