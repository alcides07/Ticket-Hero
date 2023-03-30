import styled from "styled-components";

export const Nav = styled.nav`
    height: 10vh;
    background-color: #EEEEEE;
    width: 100%;
    align-items: center;
    display: flex;
`;

export const Header = styled.header`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-right: 0.8em;
    a{
        color: #000000;
        text-decoration: none;
        font-weight: 400;
    }
    ul{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    li{
        font-size: 1em;
        margin-left: 1.5vw; 
        transition: 0.5s;
    }

    a:hover {
        color: #FF914D;
        cursor: pointer;
    }

    .border{
        position: relative;
    }

    .border::after{
        content: "";
        position: absolute;
        cursor: none;
        width: 1px;
        height: 24px;
        background: #B4B4B4;
    }
`;

export const Logo = styled.img`
    margin-left: 3em;
    width: 10em;
    height: 3em;
`;

export const Perfil = styled.div`
    margin-right: 2.5em;
    padding-left: 1em;

    span{
        font-size: 1em;
        padding-left: 0.3em;
    }

    .iconePerfil{
        color: #FF914D;
    }
`;