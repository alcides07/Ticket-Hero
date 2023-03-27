import EventoForm from "../../components/EventoForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { compraIngresso } from "./services/compra";

export default function CompraIngresso(){
    return (
        <>
            <Navbar/>
            <Header/>
            <EventoForm handle = {compraIngresso} readOnly = {true} buy = {true} textoBotao = {"Finalizar compra"}/>
            <Footer/>
        </>
    )
}