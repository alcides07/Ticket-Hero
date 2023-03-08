import { FormLogin, Container } from "./styles";
import Logo from "../../../../assets/logo.png";
import Button from 'react-bootstrap/Button';
export default function LoginForm() {
    return (
        <FormLogin>
            <img src={Logo} alt="Logo do sistema" />
            <Container>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <a href="#">Esqueceu a senha?</a>
                <button className="orange">ENTRAR</button>
                <button className="blue">REGISTRE-SE</button>
            </Container>
        </FormLogin>
    );
}
