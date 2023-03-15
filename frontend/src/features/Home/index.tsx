import HeaderCliente from "../../components/HeaderCliente";
import HeaderOrganizador from "../../components/HeaderOrganizador";
import Navbar from "../../components/Navbar";

export default function Home(){
    return (
        <>
            <Navbar/>

            {/* Se for organizador...Header organizador */}
            {/* <HeaderOrganizador/> */}

            {/* Se for cliente...Header cliente. */}
            <HeaderCliente/>
        </>
    )
}