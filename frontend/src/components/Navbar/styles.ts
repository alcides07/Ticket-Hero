import styled from "styled-components";

export const NavTop = styled.nav`
    background-color: #EEEEEE;
    padding: 1em 0 1em 0;
    width: 100%;
    display: flex;
`;

export const Logo = styled.img`
    margin-left: 3em;
    padding-top: 0.5em;
    width: 13em;
    height: 4em;
`;

export const Perfil = styled.div`
    margin-left: auto;
    margin-right: 3em;
    margin-top: auto;

    span{
        font-size: 1em;
        padding-right: 0.5em;
    }

    img{
        width: 3.5em;
        height: 3.5em;
    }
`;

export const NavBottom = styled.nav`
    display: flex;
    justify-content:center;
    background-color: #D9D9D9;
    height: 10vh;
    width: 100%;
    
    ul{
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    li{
        font-weight: 400;
        font-size: 1.2em;
        margin: 6vw; 
        color: #000;
        transition: 0.5s;
    }

    li:hover {
        color: #FF914D;
        cursor: pointer;
    }
`;