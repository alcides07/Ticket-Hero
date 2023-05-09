import styled from "styled-components";

export const FormLogin = styled.form`
    height: 100vh;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    @media (max-width: 1000px)
    {
        width: 100vw;
    }
    img{
        height: 20%;
    }
    input{
        border: none;
        border-bottom: 0.1em #000 solid;
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
        border: none;
        margin-top: 1em;
        padding: 0.5em;
        border-radius: 20px;
        width: 100%;
        color: white;
    }
    .grey{
        background-color: #A9A9A9;
    }
    
    .grey:hover{
        background-color: #959595
    }

    .orange{
        margin-top: 2em;
        background-color: #FA9C62;
    }

    .orange:hover{
        background-color: #ff914d;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
`;

export const InputLogin = styled.input`
    &:focus{
        caret-color: #FF914D;
        border-bottom: 0.1em solid #FF914D;
    }
`