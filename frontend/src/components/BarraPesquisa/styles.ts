import styled from "styled-components";
import Form from 'react-bootstrap/Form';

export const ContainerPesquisa = styled(Form)`
    margin: auto;
    margin-top: 2em;
    display: flex;
    justify-content: center;

    .containerX{
      &:hover{
        cursor: pointer;
      }
    }

    .botaoX{
      width: 0.8em;
      height: 0.8em;
    }
`

export const InputBusca = styled(Form.Control)`
  caret-color: #FF914D;
  
  &:focus {
    box-shadow: none;
    border-color: #FF914D;
  }
`;