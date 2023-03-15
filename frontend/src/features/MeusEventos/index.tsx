import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Titulo, ContainerEventos, ContainerGeral, ContainerBotao, ContainerItem, ContainerTexto } from "./styles"
import { IEvento } from '../../types/Ievento';
import { useEffect, useState } from 'react';
import { GetMeusEventos } from './services/evento';

export default function MeusEventos(){
  const [eventos, setEventos] = useState<IEvento[]>([]);
  
  useEffect(() => {
    const headers = {
      'Authorization': 'Token ' + localStorage.getItem("access_token")
    };
    GetMeusEventos(headers)
    .then((data) => {
      setEventos(data);
    });
  }, []);

  return (
    <>
      <ContainerEventos>
        <Titulo> Meus eventos </Titulo>
        <ListGroup>
        {eventos && eventos.length > 0 && eventos.map(( evento: IEvento ) => (
          <ContainerGeral key = {evento.id}>
            <ListGroup.Item>
              <ContainerItem>
                <ContainerTexto> {evento.nome} </ContainerTexto>
                    <ContainerBotao>
                      <Button variant = "danger">Deletar</Button>
                    </ContainerBotao>
                    <ContainerBotao>
                      <Button variant = "secondary">Editar</Button>
                    </ContainerBotao>
              </ContainerItem>
            </ListGroup.Item>
          </ContainerGeral>
      ))}
      </ListGroup>
      </ContainerEventos>
    </>
  );
}