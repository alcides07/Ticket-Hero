import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #EEEEEE;
    padding: 1em 0 1em 0;
    width: 100%;
    display: flex;
`;

export const Logo = styled.img`
    margin-left: 3em;
    padding-top: 0.5em;
    width: 14em;
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
