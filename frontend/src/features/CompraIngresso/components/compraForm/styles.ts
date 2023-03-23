import styled from "styled-components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const ContainerEvento = styled.form`
    margin: auto;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
`

export const ContainerItem = styled.div`
    border: 0.1em solid #BCBCBC;
    width: 70vw;
    border-radius: 0.3em;
    display: flex;
    align-items: center;
    margin: 1.5em auto;
`

export const ItemTitulo = styled.div`
    padding: 1em 0 1em 1em;
    display: inline-block;
    font-weight: bold;
`

export const ItemValor = styled.span`
    padding: 1em 0 1em 0;
    margin-left: 0.5em;
`

export const Input = styled.input`
    width: 5em;
    margin-right: 3em;
    margin-left: auto;
    border: 0.1em solid #FFCEB0;
    outline: none;
    border-radius: 0.2em;  

    &:focus  {
        border: 0.1em solid #FF914D;
    }
`

export const BotaoSubmit = styled.button`
    margin-left: auto;
    margin-right: 15.5vw;
    margin-top: 3em;
    margin-bottom: 1em;
    width: 10em;
    padding: 0.5em;
    display: flex;
    border: 0.1em solid black;
    border-radius: 0.5em;
    background-color: #FFCEB0;
    justify-content: center;

    &:hover{
        background-color: #FCB88E;
    }
`

export const BotaoVoltar = styled(BsFillArrowLeftCircleFill)`
    color: #FF914D;
    margin-left: 5vw;
    width: 3em;
    height: 3em;

    &:hover{
        cursor: pointer;
    }
`