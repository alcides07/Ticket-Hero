import { IEvento } from "../../../../types/IEvento"
import ListGroup from 'react-bootstrap/ListGroup';
import { Botao, ContainerBotao, ContainerGeral, ContainerItem, ContainerTexto, ImagemBotao, LinkEvento, ListGroupItem } from "./styles";
import IconeEditar from "../../assets/editar.svg";
import IconeDeletar from "../../assets/deletar.svg";
import { deletarEvento } from "../../../DeletarEvento/services/deletarEvento";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getMeusEventos, buscarEventoPublico } from "../../services/meusEventos";
import {InputGroup, Form} from "react-bootstrap";

export default function ContainerEventos(){
    const navigate = useNavigate();
    const [eventos, setEventos] = useState<IEvento[]>([]);
    const [eventosPorPagina, setEventosPorPagina] = useState(2);
    const [paginaAtual, setPaginaAtual] = useState(0);

    const inicioEventos = paginaAtual * eventosPorPagina;
    const fimEventos = inicioEventos + eventosPorPagina;
    const eventosAtuais = eventos.slice(inicioEventos, fimEventos);
    const quantidadePaginas = Math.ceil(eventos.length / eventosPorPagina);  
  
    useEffect(() => {
      getMeusEventos()
      .then((data) => {
        setEventos(data);
      })
      .catch((error) => {
        console.log('erro: ', error);
    });
    }, []);
    function busca(texto:string){
      setTimeout(() => {
          buscarEventoPublico(texto)
          .then((response) => {
              setEventos(response);
          })
      }, 1000)
    }

    return (
        <ListGroup>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange = {(e:any) => busca(e.target.value)}
            />
              <InputGroup.Text id="basic-addon2">Buscar</InputGroup.Text>
            </InputGroup>
        {eventos && eventos.length > 0 ? eventos.map((evento: IEvento) => (
          <ContainerGeral key = {evento.id}>
            <ListGroupItem>
              <ContainerItem>
                <ContainerTexto> <LinkEvento to = {`/evento/${evento.id}` }> {evento.nome} </LinkEvento>  </ContainerTexto>
                    <ContainerBotao>
                      <Botao> 
                        <ImagemBotao onClick = {() =>
                          deletarEvento(evento.id, (idDeletado) =>  
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
      <nav className="br-pagination" aria-label="Paginação de resultados" data-total="4" data-current="1">
        <ul>
            <li>
            <button onClick={() => setPaginaAtual(paginaAtual != 0 ? paginaAtual - 1 : paginaAtual)} className="br-button circle" type="button" data-previous-page="data-previous-page" aria-label="Página anterior"><i className="fas fa-angle-left" aria-hidden="true"></i></button>
            </li>
            { Array.from(Array(quantidadePaginas), (_, index:number) => {
                return <li key = {index}><a onClick={(e) => setPaginaAtual(index)} className={index == paginaAtual ? "page active" : "page"} href="#">{index + 1}</a></li>
            })}
            <li>
            <button onClick={() => setPaginaAtual(paginaAtual + 1 < quantidadePaginas ? paginaAtual + 1 : paginaAtual)} className="br-button circle" type="button" data-next-page="data-next-page" aria-label="Página seguinte"><i className="fas fa-angle-right" aria-hidden="true"></i></button>
            </li>
        </ul>
      </nav>
      </ListGroup>
    )
}