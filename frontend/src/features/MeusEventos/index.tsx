import { Container } from "./styles"
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BotaoVoltar } from '../../components/EventoForm/styles';
import { ContainerTituloPagina, TituloPagina } from '../EventosPopulares/styled';
import { useNavigate } from 'react-router-dom';
import ContainerEventos from "./components/ContainerEventos";

export default function MeusEventos(){
  const navigate = useNavigate();

  return (
    <>
      <Navbar/>
      <BotaoVoltar onClick = {() => navigate(-1)}/>
        <ContainerTituloPagina> 
            <TituloPagina> Meus Eventos </TituloPagina>
        </ContainerTituloPagina>
      <Container>
        <ContainerEventos/>
      </Container>
      <Footer/>
    </>
  );
}