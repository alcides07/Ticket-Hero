import styled from "styled-components";

export const ContainerFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    justify-content: space-between;
    background-color: #E0E0E0;
    color: #FFF;
    padding: 0.1em;  

    ul{
        display: flex;
        list-style-type: none;
        justify-content: center;
        margin: 0;
        padding: 0;
        margin-bottom: -0.5em;
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

    .ticket{
        margin-right: 0.3em;
        color: #000;
    }

    .hero{
        margin-right: 0.3em;
        color: #FF914D;
        font-weight: bold;
    }

    span {
        color: #000;
    }
`;