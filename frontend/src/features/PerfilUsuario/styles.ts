import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const ContainerPerfil = styled.section`
    padding: 2em 0;
    margin: auto;
    width: 80%;
    text-align: center;
`

export const FormPerfil = styled(Form)`
    margin-left: auto;
    width: 75%;
`

export const TituloPerfil = styled.h1`
    color: #FF914D;
    padding: 0.5em 0;
    text-align: left;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5em 0;

    .required::after{
        content: "*";
        color: #D10000;
    }
`

export const LabelItemPerfil = styled.label`
    font-weight: 500;
    margin-right: auto;
`

export const InputItemPerfil = styled(Field)`
    margin-right: auto;
    padding: 0.5em;
    caret-color: #FF914D;
    border: 0.1em solid #BCBCBC;
    border-radius: 0.3em;
    width: 35vw;
    outline: none;

   &:focus{
    border: 0.1em solid #FF914D;
   }
`

export const MensagemValidacao = styled(ErrorMessage)`
    color: #D10000;
    margin-right: auto;
`