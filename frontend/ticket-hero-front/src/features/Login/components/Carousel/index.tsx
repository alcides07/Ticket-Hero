import Img from '../../assets/vista-traseira-de-um-grande-grupo-de-fas-de-musica-em-frente-ao-palco-durante-o-concerto-de-musica-a-noite-copiar-espaco.jpg'
import {ContainerCarousel} from './styles';
export default function CarouselEvent() {
  return (
    <>
    <ContainerCarousel>
      <img src={Img} alt="Imagem ilustratuva de evento de música." />
    </ContainerCarousel>
    </>
  );
}
