import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {ContainerGeral, ContainerTituloPagina, TituloPagina} from './styles';
import { IEvento } from '../../types/IEvento';
import { useEffect, useState } from 'react';
import {getEventosParaHoje, getIngressosParaHoje} from './services/api';
import CustomCard from "../../components/Card";
import { ICard } from '../../types/IComponents';
import { BotaoVoltar } from '../../components/EventoForm/styles';
import { useNavigate } from 'react-router-dom';

export default function EventosParaHoje() {
    const navigate = useNavigate();
    const headers = {
        'Authorization': 'Token ' + localStorage.getItem("token")
    };
    const [eventos, setEventos] = useState<IEvento[]>([]);
    const cards: JSX.Element[] = [];
    useEffect(() => {
        if(localStorage.getItem("typeUser") == "cliente"){
            getIngressosParaHoje(headers)
            .then((data: IEvento[]) => {
              
              setEventos(data);
            })
            .catch((error:any) => {
              console.log('erro: ', error);
            });
        }else{
            getEventosParaHoje(headers)
            .then((data: IEvento[]) => {
              setEventos(data);
            })
            .catch((error:any) => {
              console.log('erro: ', error);
            });
        }
        
    }, []);
    if(eventos != undefined || eventos != null){
        eventos.map((evento)=>{
            let dados: ICard = {
                id: evento.id,
                title: evento.nome,
                description: evento.descricao,
                data: evento.data,
                valorIngresso: evento.valorIngresso,
                pathImg: 'https://img.freepik.com/psd-gratuitas/modelo-de-banner-horizontal-de-neon-para-musica-eletronica-com-dj-feminina_23-2148979684.jpg?w=900&t=st=1679342315~exp=1679342915~hmac=664278eca29bfcbda4f23c171f99897a3a90ec386c3dd4a8f92fd34d6141b644'
            }
            let item = <CustomCard infos={dados} />;
            cards.push(item);
        });
    }
    
    return (
        <>
            <Navbar />
            <BotaoVoltar onClick = {() => navigate(-1)}/>
            <ContainerTituloPagina> 
                <TituloPagina> O que tem para hoje </TituloPagina>
            </ContainerTituloPagina>
            <ContainerGeral>
                { eventos ?
                    
                    cards.map(evento => (
                    
                        evento 
                    ))

                :
                    <p>Sem eventos para data atual.</p>
                }
            </ContainerGeral>
            <Footer/>
        </>
    )
}

