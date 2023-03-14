import CarouselEvent from '../Login/components/Carousel';
import RegisterForm from './components/FormRegister';
import {GeralContainer} from './styled';
export default function Login() {
    return (
        <GeralContainer>
            <CarouselEvent />
            <RegisterForm/>
        </GeralContainer>
        
    )
}
