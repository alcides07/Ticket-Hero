import { FormLogin, Container, InputLogin } from "./styles";
import Logo from "../../../../assets/logo.png";
import {Login} from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { IUserLogin } from "../../../../types/IUserLogin";

export default function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const body: IUserLogin = {
            usuario: event.target[0].value,
            senha: event.target[1].value,
        };    
       await
       Login(body)
       .then(() => {
           navigate("/home");
       });
    };
    
    function goToRegister() {
        navigate("/registro");
    }
    
    return (
        <FormLogin onSubmit={handleSubmit}>
            <img src={Logo} alt="Logo do sistema" />
            <Container>
                <InputLogin type="text" placeholder="Email" required/>
                <InputLogin type="password" placeholder="Senha" required/>
                <a href="#">Esqueceu a senha?</a>
                <button className="button-form orange">ENTRAR</button>
                <button className="button-form grey" onClick={goToRegister}>REGISTRE-SE</button>
            </Container>
            <ToastContainer />
        </FormLogin>
    );
}
