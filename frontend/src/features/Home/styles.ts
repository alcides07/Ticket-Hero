import styled from "styled-components";

export const ContainerCards = styled.div`
    padding: 3em;
    display: flex;
    flex-wrap: wrap; 
    min-height: 70vh;
    min-width: 99vw;
    .card{
        margin: 1em;
        height: 310px;
        width: 400px; 
    }
`;
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    .input-group{
        display: flex;
        width: 30%;
        margin-left: 1em;
        margin-top: 2em;
    }    
    .btn-outline-dark{
        height: 40px;
        margin-top: 2em;
        margin-left: 4em;
    }
`;
