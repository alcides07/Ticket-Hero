import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ContainerPerfil, InputItemPerfil, LabelItemPerfil, ContainerInput, TituloPerfil } from "./styles";



export default function PerfilUsuario(){
    return (
        <> 
            <Navbar/>
            <ContainerPerfil>
                <TituloPerfil> Editar Perfil </TituloPerfil>
                <ContainerInput>
                    <LabelItemPerfil> a </LabelItemPerfil>
                    <InputItemPerfil/>
                </ContainerInput>
            </ContainerPerfil>
            <Footer/>
        </>
    )
}