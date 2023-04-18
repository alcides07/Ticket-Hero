import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ContainerPerfil, InputItemPerfil, LabelItemPerfil, ContainerInput, TituloPerfil, MensagemValidacao, FormPerfil } from "./styles";
import { userData } from "../../components/RouteProtection/services/userData";
import { IDataUser } from "../../types/IDataUser";
import { Formik } from "formik";
import * as Yup from "yup";
import BotaoSubmitForm from "../../components/BotaoSubmitForm";

export default function PerfilUsuario(){
    const [ getDataUser, setDataUser ] = useState<IDataUser>();
    const valoresIniciais = {
        "rg": "",
        "cpf": "",
        "username": "",
        "nomeCompleto": "",
        "nascimento": "",
        "email": ""
    };
    const validationSchema = Yup.object({
        username: Yup.string()
        .min(3, "É necessário no mínimo 3 caracteres")
        .required("Campo obrigatório!")

    });
    
    useEffect(() => {
        userData()
        .then((response) => {
            setDataUser(response.usuario);
            valoresIniciais["username"] = response.usuario.username
            valoresIniciais["nomeCompleto"] = response.usuario.nomeCompleto
            valoresIniciais["nascimento"] = response.usuario.nascimento
            valoresIniciais["email"] = response.usuario.email
            valoresIniciais["cpf"] = response.usuario.cpf
            valoresIniciais["rg"] = response.usuario.rg
        })
        .catch((erro) => {
            console.log("erro: ", erro);
        })
    }, [])
    
    function handleSubmit(e:any){
        e.preventDefault();
    }

    return (
        <> 
            <Navbar/>
            <ContainerPerfil>
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={valoresIniciais}
                    validationSchema={validationSchema}
                    >
                    <FormPerfil>
                        <TituloPerfil> Editar Perfil </TituloPerfil>
                        <ContainerInput>
                            <LabelItemPerfil> Nome completo </LabelItemPerfil>
                            <InputItemPerfil name = "nomeCompleto" required placeholder="Nome Completo"/>
                            <MensagemValidacao component = "label" name = "nomeCompleto"/>
                        </ContainerInput>

                        <ContainerInput>
                            <LabelItemPerfil> Nome de usuário </LabelItemPerfil>
                            <InputItemPerfil name = "username" required placeholder="Nome de usuário"/>
                            <MensagemValidacao component = "label" name = "username"/>
                        </ContainerInput>
                        
                        <ContainerInput>
                            <LabelItemPerfil> Email </LabelItemPerfil>
                            <InputItemPerfil name = "email" required placeholder="Email"/>
                            <MensagemValidacao component = "label" name = "email"/>
                        </ContainerInput>

                        <ContainerInput>
                            <LabelItemPerfil> Data de nascimento </LabelItemPerfil>
                            <InputItemPerfil type = "Date" name = "nascimento" required placeholder="Email"/>
                            <MensagemValidacao component = "label" name = "nascimento"/>
                        </ContainerInput>

                        { getDataUser && getDataUser.cpf && (
                            <ContainerInput>
                                <LabelItemPerfil> CPF </LabelItemPerfil>
                                <InputItemPerfil name = "cpf" required placeholder="000.000.000-00"/>
                                <MensagemValidacao component = "label" name = "cpf"/>
                            </ContainerInput>
                        )}

                        { getDataUser && getDataUser.rg && (
                            <ContainerInput>
                                <LabelItemPerfil> RG </LabelItemPerfil>
                                <InputItemPerfil name = "rg" required placeholder="000.000.000"/>
                                <MensagemValidacao component = "label" name = "rg"/>
                            </ContainerInput>
                        )}
                        <BotaoSubmitForm mr="31.5vw" ml = "auto" textoBotao = "Salvar Dados"/>
                    </FormPerfil>
                    
                </Formik>
            </ContainerPerfil>
            <Footer/>
        </>
    )
}