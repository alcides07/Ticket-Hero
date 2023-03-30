import {ContainerGeral} from './styled';
import { IEvento } from '../../types/IEvento';
import { useEffect, useState } from 'react';
import { getEventosPopulares } from './services/api';
import { ICard } from '../../types/IComponents';
import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar";
import CustomCard from "../../components/Card";

function EventosPopulares() {
    const [eventos, setEventos] = useState<IEvento[]>([]);
    const cards: JSX.Element[] = [];
    const headers = {
        'Authorization': 'Token ' + localStorage.getItem("token")
    };
    useEffect(() => {
        getEventosPopulares(headers)
        .then((data) => {
          setEventos(data);
        })
        .catch((error) => {
          console.log('erro: ', error);
      });
    }, []);
    eventos.map((evento)=>{
        let dados: ICard = {
            title: evento.nome,
            description: evento.descricao,
            pathImg: 'https://img.freepik.com/psd-gratuitas/modelo-de-banner-horizontal-de-neon-para-musica-eletronica-com-dj-feminina_23-2148979684.jpg?w=900&t=st=1679342315~exp=1679342915~hmac=664278eca29bfcbda4f23c171f99897a3a90ec386c3dd4a8f92fd34d6141b644'
        }
        let item = <CustomCard infos={dados} />;
        cards.push(item);
    });
  return (
    <>
        <Navbar2 />
        <ContainerGeral>
            {cards.map(evento => (
                evento
            ))
            }
        </ContainerGeral>
        <Footer/>
    </>

  )
}

export default EventosPopulares;
