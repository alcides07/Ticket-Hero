import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CompraForm from "./components/compraForm"

export default function CompraIngresso(){
    return (
        <>
            <Navbar/>
            <Header/>
            <CompraForm textoBotao = "Finalizar Compra"/>
            <Footer/>
        </>
    )
}