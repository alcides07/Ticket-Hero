import styled from "styled-components";

export const FormRegister = styled.form`
    height: 100vh;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        width: 40%;
    }
    input{
        border: none;
        border-bottom: 1px #000 solid;
        outline: none;
        font-size: 1em;
        display: flex;
        padding: 2em 0.3em 0.5em;
        background-color: initial;
        color: #000;
        width: inherit;
    }
    select{
        border: none;
        border-bottom: 1px #000 solid;
        outline: none;
        font-size: 1em;
        display: flex;
        padding: 2em 0.3em 0.5em;
        background-color: initial;
        color: #000;
        width: inherit;
    }
    .button-form{
        border: none;
        padding: 0.5em;
        margin-top: 1em;
        border-radius: 20px;
        width: 100%;
        color: white;
    }
    .orange{
        margin-top: 2em;
        background-color: #FA9C62;
    }
    .orange:hover{
        background-color: #ff914d;
    }
    .grey{
        background-color: #A9A9A9;
    }
    .grey:hover{
        background-color: #959595
    }
`;
export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    .row{
        flex-wrap: inherit;
    }
`;

export const InputCadastro = styled.input`
    &:focus{
        caret-color: #FF914D;
        border-bottom: 0.1em solid #FF914D;
    }
`