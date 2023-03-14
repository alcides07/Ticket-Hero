import styled from "styled-components";

export const FormLogin = styled.form`
    height: 100vh;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    img{
        height: 20%;
    }
    input{
        border: none;
        border-bottom: 3px #000 solid;
        outline: none;
        font-size: 1em;
        padding: 2em 0.3em 0.5em;
        background-color: initial;
        color: #000;
    }
    a{
        margin-top: 0.5em;
        align-self: flex-start;
    }
    .button-form{
        margin-top: 1em;
        border-radius: 20px;
        width: 100%;
        color: white;
        background-color: #ff914d;
    }
    .blue{
        background-color: #646cff;
    }
    .orange{
        background-color: #ff914d;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
`;