import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Titulo, ContainerEventos, ContainerGeral, ContainerBotao, ContainerItem, ContainerTexto } from "./styles"
import { IEvento } from '../../types/IEvento';
import { useEffect, useState } from 'react';
import { GetMeusEventos } from './services/evento';
import { deletarEvento } from '../CrudEvento/services/deletarEvento';

export default function MeusEventos(){
  const [eventos, setEventos] = useState<IEvento[]>([]);
  const headers = {
    'Authorization': 'Token ' + localStorage.getItem("access_token")
  };
  
  useEffect(() => {
    GetMeusEventos(headers)
    .then((data) => {
      setEventos(data);
    })
    .catch((error) => {
      console.log('erro: ', error);
  });
  }, []);

  return (
    <>
      <ContainerEventos>
        <Titulo> Meus eventos </Titulo>
        <ListGroup>
        {eventos && eventos.length > 0 ? eventos.map((evento: IEvento) => (
          <ContainerGeral key = {evento.id}>
            <ListGroup.Item>
              <ContainerItem>
                <ContainerTexto> {evento.nome} </ContainerTexto>
                    <ContainerBotao>
                      <Button onClick={() =>
                        deletarEvento(evento.id, headers, (idDeletado) =>  
                        {
                          setEventos(estadoAnterior => estadoAnterior.filter(evento => evento.id !== idDeletado))
                        }
                      )}
                      variant="danger"> Deletar
                      </Button>
                    </ContainerBotao>

                    <ContainerBotao>
                      <Button variant = "secondary">Editar</Button>
                    </ContainerBotao>
              </ContainerItem>
            </ListGroup.Item>
          </ContainerGeral>
      ))
        :
        <p> Você não possui eventos cadastrados!</p>
    }
      </ListGroup>
      </ContainerEventos>
    </>
  );
}