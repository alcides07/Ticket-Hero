import Navbar from "../../components/Navbar";
import { ContainerCards, Container } from "./styles";
import Button from 'react-bootstrap/Button';
import 'react-alice-carousel/lib/alice-carousel.css';
import CustomCard from "../../components/Card";
import { IEvento } from '../../types/IEvento';
import { useEffect, useState } from 'react';
import {getEventsOrganizador, getEventsCliente, buscarEventoPublico} from "./services/api";
import { useNavigate } from 'react-router-dom';
import { ICard } from '../../types/IComponents';
import Footer from "../../components/Footer";
import {InputGroup, Form} from "react-bootstrap";
import { NavInferior } from "../../components/NavInferior/styles";

export default function Home() {
    const navigate = useNavigate();
    const [eventos, setEventos] = useState<IEvento[]>([]);
    //const [tipoUrl, setTipoUrl] = useState<string >('');
    const cards: JSX.Element[] = [];
    const tipoUsuario = localStorage.getItem("typeUser");
    let funcaoCard = "";
    function busca(texto:string){
        setTimeout(() => {
            buscarEventoPublico(texto)
            .then((response) => {
                setEventos(response);
            })
        }, 1000)
    } 
    
    if(localStorage.getItem("typeUser") === "organizador" && localStorage.getItem("token") != null){
        funcaoCard = 'visualizar';
        useEffect(() => {
            getEventsOrganizador()
            .then((data) => {
              setEventos(data);
            })
            .catch((error) => {
              console.log('erro: ', error);
          });
          }, []);
    }else{
        funcaoCard = 'comprar';
        useEffect(() => {
            getEventsCliente()
            .then((data) => {
                setEventos(data);               
            })
            .catch((error) => {
              console.log('erro: ', error);
          });
          }, []);
    }
    
    eventos.map((evento)=>{
        let dados: ICard = {
            id: evento.id,
            title: evento.nome,
            description: evento.descricao,
            data: evento.data,
            valorIngresso: evento.valorIngresso,
            tipo_url: funcaoCard,
            pathImg: 'https://img.freepik.com/psd-gratuitas/modelo-de-banner-horizontal-de-neon-para-musica-eletronica-com-dj-feminina_23-2148979684.jpg?w=900&t=st=1679342315~exp=1679342915~hmac=664278eca29bfcbda4f23c171f99897a3a90ec386c3dd4a8f92fd34d6141b644'
        }
        let item = <CustomCard infos={dados} />;
        cards.push(item);
    });
    
    return (
        <>
            <Navbar />
            <Container>
                <Button variant="outline-dark" onClick={() => navigate('/eventosParaHoje')}>Meus eventos para hoje</Button>
                {
                    tipoUsuario != "cliente" ? 
                        <InputGroup className="mb-3">
                            <Form.Control
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange = {(e:any) => busca(e.target.value)}
                            />
                            <InputGroup.Text id="basic-addon2">Buscar</InputGroup.Text>
                        </InputGroup>
                    : <></>                        
                }
                
                {/* <BarraPesquisa /> */}
                <ContainerCards>
                    { cards ?
                        cards.map(evento => (
                            evento
                        ))
                    :
                    <p>Não há ingressos comprados.</p>
                    }
                </ContainerCards>
                <NavInferior/>  
            </Container>
            <Footer/>
        </>
    )
}