import ListGroup from 'react-bootstrap/ListGroup';
import { Titulo, ContainerEventos, ContainerGeral, ContainerBotao, ContainerItem, ContainerTexto, Botao, ImagemBotao, ListGroupItem, LinkEvento } from "./styles"
import { IEvento } from '../../types/IEvento';
import { useEffect, useState } from 'react';
import { getMeusEventos } from './services/meusEventos';
import { deletarEvento } from '../DeletarEvento/services/deletarEvento';
import IconeEditar from "./assets/editar.svg";
import IconeDeletar from "./assets/deletar.svg";
import Navbar2 from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BotaoVoltar } from '../../components/EventoForm/styles';
import { Link, useNavigate } from 'react-router-dom';

export default function MeusEventos(){
  const [eventos, setEventos] = useState<IEvento[]>([]);
  const navigate = useNavigate();
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
      <Navbar2/>
      <BotaoVoltar onClick = {() => navigate(-1)}/>
      <ContainerEventos>
        <Titulo> Meus eventos </Titulo>
        <ListGroup>
        {eventos && eventos.length > 0 ? eventos.map((evento: IEvento) => (
          <ContainerGeral key = {evento.id}>
            <ListGroupItem>
              <ContainerItem>
                <ContainerTexto> <LinkEvento to = {`/evento/${evento.id}` }> {evento.nome} </LinkEvento>  </ContainerTexto>
                    <ContainerBotao>
                      <Botao> 
                        <ImagemBotao onClick = {() =>
                          deletarEvento(evento.id, headers, (idDeletado) =>  
                          {
                            setEventos(estadoAnterior => estadoAnterior.filter(evento => evento.id !== idDeletado))
                          }
                        )} 
                        src = { IconeDeletar } alt = "Botao de exclusão de evento"/>
                      </Botao>
                    </ContainerBotao>

                    <ContainerBotao>
                      <Botao>
                        <ImagemBotao onClick={() => navigate(`/evento/${evento.id}/editar`)} src={IconeEditar} alt="Botao de edição de evento"/>
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
      <Footer/>
    </>
  );
}