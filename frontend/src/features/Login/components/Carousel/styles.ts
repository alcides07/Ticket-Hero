import styled from 'styled-components';

export const ContainerCarousel = styled.div`
    height: 100vh;
    width: 60vw;
    overflow: hidden;
    display: flex;
    img{
        height: 100%;
        opacity: 0.7;
    }
    .carousel-item{
        width: initial;
        height: 100vh;
    }
    @media (max-width: 1000px)
    {
        display: none;
    }
    
`;