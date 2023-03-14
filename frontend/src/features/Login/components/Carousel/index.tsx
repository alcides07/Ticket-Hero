import Img1 from '../../assets/imgs-carousel/img1.jpg';
import Img2 from '../../assets/imgs-carousel/img2.jpg';
import Img3 from '../../assets/imgs-carousel/img3.jpg';
import { ContainerCarousel } from './styles';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselEvent() {
  return (
    <>
      <ContainerCarousel>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </ContainerCarousel>
    </>
  );
}
