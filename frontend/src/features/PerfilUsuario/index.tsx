import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ContainerPerfil, InputItemPerfil, LabelItemPerfil, ContainerInput, TituloPerfil, MensagemValidacao, FormPerfil } from "./styles";
import { userData } from "../../components/RouteProtection/services/userData";
import { IDataUser } from "../../types/IDataUser";
import { Formik } from "formik";
import * as Yup from "yup";
import BotaoSubmitForm from "../../components/BotaoSubmitForm";
import { userUpdate } from "./services/userUpdate";
import { notify } from "../../components/Toastify";
import { IToast } from "../../types/IToast";
import { ToastContainer } from "react-toastify";

export default function PerfilUsuario(){
    const today = new Date(); 
    const dataMaxima = `${today.getFullYear()}-${('0' + (today.getMonth()+1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`;
    const [ getDataUser, setDataUser ] = useState<IDataUser>();
    const valoresIniciais = {
        "id": "",
        "rg": "",
        "cpf": "",
        "username": "",
        "nomeCompleto": "",
        "nascimento": "",
        "email": "",
        "instagram": "",
        "tipoUsuario": ""
    };
    const validationSchema = Yup.object({
        username: Yup.string()
            .required("Campo obrigatório!"),

        nomeCompleto: Yup.string()
            .required("Campo obrigatório!"),
        
        email: Yup.string()
            .email("Formato inválido!")
            .required("Campo obrigatório!"),

        nascimento: Yup.date()
        .required("Campo obrigatório!")
        .max(new Date(), "Data inválida!"),

        cpf: Yup.string()
            .required("Campo obrigatório!"),
            
        rg: Yup.string()
        .required("Campo obrigatório!"),

        instagram: Yup.string()
        .required("Campo obrigatório!")
    });
    
    useEffect(() => {
        userData()
        .then((response) => {
            setDataUser(response.usuario);
            valoresIniciais["id"] = response.usuario.id
            valoresIniciais["username"] = response.usuario.username
            valoresIniciais["nomeCompleto"] = response.usuario.nomeCompleto
            valoresIniciais["nascimento"] = response.usuario.nascimento
            valoresIniciais["email"] = response.usuario.email
            valoresIniciais["cpf"] = response.usuario.cpf
            valoresIniciais["rg"] = response.usuario.rg
            valoresIniciais["instagram"] = response.usuario.instagram
            valoresIniciais["tipoUsuario"] = response.usuario.tipoUsuario
        })
        .catch((erro) => {
            console.log("erro: ", erro);
        })
    }, [])
    
    function handleSubmit(values:IDataUser){
        userUpdate(values)
        .then((response) => {
            console.log(response)
            const toast: IToast = {
                message: "Usuário atualizado com sucesso!",
                variant: 'success',
            }; 
            notify(toast);
        })
        .catch(() => {
            const toast: IToast = {
                message: "Erro ao atualizar usuário!",
                variant: 'error',
            }; 
            notify(toast);
        })
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
                            <LabelItemPerfil className = "required">Nome completo</LabelItemPerfil>
                            <InputItemPerfil id = "nomeCompleto" name = "nomeCompleto" required placeholder="Nome Completo"/>
                            <MensagemValidacao component = "label" name = "nomeCompleto"/>
                        </ContainerInput>

                        <ContainerInput>
                            <LabelItemPerfil className = "required">Nome de usuário</LabelItemPerfil>
                            <InputItemPerfil id = "username" name = "username" required placeholder="Nome de usuário"/>
                            <MensagemValidacao component = "label" name = "username"/>
                        </ContainerInput>
                        
                        <ContainerInput>
                            <LabelItemPerfil className = "required">Email</LabelItemPerfil>
                            <InputItemPerfil id = "email" name = "email" required placeholder="Email"/>
                            <MensagemValidacao component = "label" name = "email"/>
                        </ContainerInput>

                        <ContainerInput>
                            <LabelItemPerfil className = "required">Data de nascimento</LabelItemPerfil>
                            <InputItemPerfil max = {dataMaxima} id = "nascimento" type = "Date" name = "nascimento" required placeholder="Email"/>
                            <MensagemValidacao component = "label" name = "nascimento"/>
                        </ContainerInput>

                        { getDataUser && getDataUser.tipoUsuario == "organizador" && (
                            <>
                            <ContainerInput>
                                <LabelItemPerfil className = "required">CPF</LabelItemPerfil>
                                <InputItemPerfil id = "cpf" name = "cpf" required placeholder="000.000.000-00"/>
                                <MensagemValidacao component = "label" name = "cpf"/>
                                </ContainerInput>

                                <ContainerInput>
                                    <LabelItemPerfil className = "required">RG</LabelItemPerfil>
                                    <InputItemPerfil id = "rg" name = "rg" required placeholder="000.000.000"/>
                                    <MensagemValidacao component = "label" name = "rg"/>
                                </ContainerInput>

                                <ContainerInput>
                                    <LabelItemPerfil className = "required">Instagram</LabelItemPerfil>
                                    <InputItemPerfil id = "instagram" name = "instagram" required placeholder="Instagram"/>
                                    <MensagemValidacao component = "label" name = "instagram"/>
                                </ContainerInput>
                            </>
                        )}
                        <BotaoSubmitForm mr="24.5vw" ml = "auto" textoBotao = "Salvar Dados"/>
                    </FormPerfil>
                </Formik>
            </ContainerPerfil>
            <ToastContainer/>
            <Footer/>
        </>
    )
}