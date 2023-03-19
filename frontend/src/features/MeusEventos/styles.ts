import styled from "styled-components";
import { ListGroup } from 'react-bootstrap';

export const ContainerEventos = styled.section`
    padding: 2em;
    width: 100%;
`

export const Titulo = styled.p`
    font-weight: bold;
    font-size: 1.3em;
`

export const ContainerGeral = styled.div`
    padding-top: 1em;
`

export const ContainerItem = styled.div`
    padding: 0.5em;
    align-items: center;
`

export const ContainerTexto = styled.span`
    font-size: 1.2em;
`

export const ContainerBotao = styled.div`
    float: right;
    padding-right: 0.8em;
`

export const Botao = styled.button`
    border: none;
    background-color: transparent;
`

export const ImagemBotao = styled.img`
  opacity: 0.9;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const ListGroupItem = styled(ListGroup.Item)`
  border-radius: 0.8em !important;
`;