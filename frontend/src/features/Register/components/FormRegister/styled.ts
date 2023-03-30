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
        background-color: #ff914d;
    }
    .green{
        background-color: #34b985;
    }
    .orange{
        background-color: #ff914d;
    }
`;
export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    .row{
        flex-wrap: inherit;
    }
`;