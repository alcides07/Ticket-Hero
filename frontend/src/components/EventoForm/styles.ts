import styled from "styled-components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const ContainerForm = styled.form`
    width: 80vw;
    margin: auto;
    margin-top: -3em;
    padding-bottom: 1.5em;
`

export const ContainerItem = styled.div`
    margin: auto;
    text-align: center;
    margin-top: 2em;
`

export const InputItem = styled.input`
   padding: 0.5em;
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
    margin-left: 7vw;
    width: 3em;
    height: 3em;

    &:hover{
        cursor: pointer;
    }
`