import styled from "styled-components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const ContainerForm = styled.form`
    width: 80vw;
    margin: auto;
    margin-top: -3em;
    padding-bottom: 2em;
    .form-switch{
        text-align: start;
        margin: auto;
        width: 50%;
    }
    .form-check-input{
        height: 1.5em;
        margin-right: 6px;
        width: 2.5em;
    }
    .form-check-input:checked{
        background-color: rgb(255, 145, 77);
        border-color: rgb(255, 145, 77);
    }
    
`

export const ValorVariavel = styled.span`
    color: #FF914D;
    font-weight: 700;
`

export const ContainerItem = styled.div`
    margin: auto;
    text-align: center;
    margin-top: 2em;
`

export const ContainerCompra = styled.div`
    margin-top: 1.5em;   
`

export const CardCompra = styled.div`
    padding-left: 20vw;
    margin-top: 0.3em;
    font-size: large;
`

export const TituloCompra = styled.span`
    font-weight: 500;
`

export const InputCompra = styled.input`
    padding: 0.5em;
    border: 0.1em solid #FF914D;
    caret-color: #FF914D;
    border-radius: 0.3em;
    width: 50%;
    outline: none;

    &:focus{
        border: 0.1em solid #FF914D;
    }
`

export const InputItem = styled.input`
   padding: 0.5em;
   caret-color: #FF914D;
   border: 0.1em solid #BCBCBC;
   border-radius: 0.3em;
   width: 50%;
   outline: none;

   &:focus{
    border: 0.1em solid #FF914D;
   }
`

export const DescricaoItem = styled.textarea`
   width: 50%;
   padding: 0.5em;
   caret-color: #FF914D;
   height: 25vh;
   border: 0.1em solid #BCBCBC;
   border-radius: 0.3em;
   resize: none;
   outline: none;

    &:focus{
    border: 0.1em solid #FF914D;
    }
`

export const Labelitem = styled.span`
    display: flex;
    padding-bottom: 0.5em;
    margin: auto;
    font-weight: 500;
    width: 50%;
`

export const BotaoVoltar = styled(BsFillArrowLeftCircleFill)`
    color: #FF914D;
    margin-top: 2em;
    margin-left: 4vw;
    opacity: 0.8;
    width: 3em;
    height: 3em;

    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`

export const ContainerTituloForm = styled.section`
    text-align: center;
    align-items: center;
`

export const TituloForm = styled.span`
    font-size: 1.1em;
    font-weight: 500;
    display: block;
`

export const NumeroIngressosVendidos = styled.span`
    font-size: 1.5em;
    font-weight: 500;
    color: #FF914D;
`