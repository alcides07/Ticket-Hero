import styled from "styled-components";
import { IBotaoSubmitForm } from "../../types/IBotaoSubmitForm";

export const BotaoForm = styled.button<IBotaoSubmitForm>`
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-bottom: ${props => props.mb};
    margin-top: ${props => props.mt};
    display: flex;
    justify-content: center; 
    border: none;
    padding: 0.5em;
    border-radius: 2vw;
    width: 20%;
    color: white;
    background-color: #FA9C62;
    
    &:hover{
        background-color: #ff914d;
    }
`