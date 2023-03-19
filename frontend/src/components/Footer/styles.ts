import styled from "styled-components";

export const ContainerFooter = styled.footer`
    bottom: 0;
    width: 100%;
    justify-content: space-between;
    color: #FFF;
    padding: 0.1em;  

    ul{
        display: flex;
        list-style-type: none;
        justify-content: center;
        margin: 0;
        padding-top: 0.5em;
        margin-bottom: -0.2em;
    }

    li{
        color: #000;
        margin: 0.5em;
    }

    p{
        display: flex;
        justify-content: center;
        margin-bottom: 0.5em;
    }

    img{
        width: 12em;
        height: 3.5em;
    }

    span {
        line-height: 3.6em;
        color: #000;
        padding-left: 0.5em;
    }
    
    .icones{
        opacity: 1;
        color: #5A5A5A;
    }

    .icones:hover{
        color: #FF914D;
        cursor: pointer;
        opacity: 0.9;
    }

`;