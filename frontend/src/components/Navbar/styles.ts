import styled from "styled-components";
import logo from "../../assets/horizontal-logo.svg";
import logo2 from "../../assets/vertical-logo.svg";
import Dropdown from 'react-bootstrap/Dropdown';

export const Nav = styled.nav`
    height: 10vh;
    background-color: #EEEEEE;
    width: 100%;
    align-items: center;
    display: flex;
    @media (max-width: 1000px)
    {
        font-size: 12px;
    }
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
        @media (max-width: 1000px)
        {
            display: none;
        }
       
    }
    
    li{
        font-size: 1em;
        margin-left: 1.5vw; 
        transition: 0.5s;
        @media (max-width: 1000px)
        {
            margin-left: 0;
            width: 50px;
        }
    }

    a:hover {
        color: #FF914D;
        cursor: pointer;
    }

    .border{
        position: relative;
        @media (max-width: 1000px)
        {
            width: 2px;
        }
    }

    .border::after{
        content: "";
        position: absolute;
        cursor: none;
        width: 1px;
        height: 24px;
        background: #B4B4B4;
        @media (max-width: 1000px)
        {
            height: 34px;
        }
        
    }
`;

export const Logo = styled.div`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 160px auto;
    background-position: center;
    margin-left: 3vw;
    width: 10em;
    height: 3em;
    @media (max-width: 1000px)
    {
        background-image: url(${logo2});
        background-size: 60px;
        width: 6em;
    }
`;

export const Perfil = styled.div`
    padding-left: 1vw;
    display: flex;

    span{
        font-size: 1em;
        padding-left: 0.3vw;
    }
    
    .iconePerfil{
        color: #FF914D;
    }
`;

export const Sair = styled.span`
    margin-right: 2vw;
    padding: 0.1em;
    background-color: #D4D3D5;
    width: 3em;
    text-align: center;
    border-radius: 0.8em;
    
    &:hover{
        background-color: #FFAC79;
        cursor: pointer;
    }
`

export const DropdownPerfil = styled(Dropdown)`
    .dropdown-toggle{
        border: none;
    }

    .dropdown-item:active{
        background-color: transparent;
    }

`