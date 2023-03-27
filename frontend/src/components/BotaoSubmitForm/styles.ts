import styled from "styled-components";
import { IBotaoSubmitForm } from "../../types/IBotaoSubmitForm";

export const BotaoForm = styled.button<IBotaoSubmitForm>`
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-bottom: ${props => props.mb};
    margin-top: ${props => props.mt};
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