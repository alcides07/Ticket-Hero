import ListGroup from 'react-bootstrap/ListGroup';
import { Titulo, ContainerEventos, ContainerGeral, ContainerBotao, ContainerItem, ContainerTexto, Botao, ImagemBotao, ListGroupItem } from "./styles"
import { IEvento } from '../../types/IEvento';
import { useEffect, useState } from 'react';
import { getMeusEventos } from './services/meusEventos';
import { deletarEvento } from '../DeletarEvento/services/deletarEvento';
import IconeEditar from "./assets/editar.svg";
import IconeDeletar from "./assets/deletar.svg";

export default function MeusEventos(){
  const [eventos, setEventos] = useState<IEvento[]>([]);
  const headers = {
    'Authorization': 'Token ' + localStorage.getItem("token")
  };
  
  useEffect(() => {
    getMeusEventos(headers)
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
            <ListGroupItem>
              <ContainerItem>
                <ContainerTexto> {evento.nome} </ContainerTexto>
                    <ContainerBotao>
                      <Botao onClick={() =>
                        deletarEvento(evento.id, headers, (idDeletado) =>  
                        {
                          setEventos(estadoAnterior => estadoAnterior.filter(evento => evento.id !== idDeletado))
                        }
                      )}> 
                      <ImagemBotao src={IconeDeletar} alt="Botao de exclusão de evento" />
                      </Botao>
                    </ContainerBotao>

                    <ContainerBotao>
                      <Botao>
                        <ImagemBotao src={IconeEditar} alt="Botao de edição de evento"/>
                      </Botao>
                    </ContainerBotao>
              </ContainerItem>
            </ListGroupItem>
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