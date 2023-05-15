import styled from "styled-components";

export const NavInferior = styled.div`
    width: 100vw;
    height: 7vh;
    background: rgb(238 238 238);
    position: fixed;
    left: 0;
    bottom: 0;
    color: black;
    display: flex;
    @media (min-width: 1000px)
    {
        display: none;
    }
    a{
        color: #000000;
        text-decoration: none;
        font-weight: 400;
    }
    ul{
        display: flex;
        list-style: none;
        margin: auto 0;
        text-align: center;
        padding: 0;
        width: 100%;
    }
    
    li{
        font-size: 0.8em;
        margin-left: 1.5vw; 
        transition: 0.5s;
        display: flex;
        width: 40%;
        justify-content: center;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        img{
            width: 1.6em;
        }
        @media (max-width: 1000px)
        {
            margin-left: 0;
            width: 40%;
        }
    }
`;
