import { FormLogin, Container } from "./styles";
import Logo from "../../../../assets/logo.png";
import {Login} from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
interface IUser {
    usuario: string;
    senha: string;
};

export default function LoginForm() {
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const body: IUser = {
            usuario: event.target[0].value,
            senha: event.target[1].value,
        };    
        Login(body);
    };
    const navigate = useNavigate();
    function goToRegister() {
        navigate("/register");
    }
    return (
        <FormLogin onSubmit={handleSubmit}>
            <img src={Logo} alt="Logo do sistema" />
            <Container>
                <input type="text" placeholder="Email" required/>
                <input type="password" placeholder="Senha" required/>
                <a href="#">Esqueceu a senha?</a>
                <button className="button-form orange">ENTRAR</button>
                <button className="button-form blue" onClick={goToRegister}>REGISTRE-SE</button>
            </Container>
            <ToastContainer />
        </FormLogin>
    );
}
