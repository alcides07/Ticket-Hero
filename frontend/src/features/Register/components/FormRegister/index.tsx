import { FormRegister, ContainerInputs } from "./styled";
import Logo from "../../../../assets/horizontal-logo.png";
import { Register } from "../../services/auth";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

interface IUser {
    usuario: string,
    tipoUsuario: string,
    senha: string,
    confirmacaoSenha: string,
    email: string,
    nomeCompleto: string,
    cpf: string,
    rg: string,
    nascimento: Date,
    instagram: string
};

export default function RegisterForm() {
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const body: IUser = {
            email: event.target[0].value,
            usuario: event.target[1].value,
            nomeCompleto: event.target[2].value,
            nascimento: event.target[3].value,
            rg: event.target[4].value,
            cpf: event.target[5].value,
            instagram: event.target[6].value,
            tipoUsuario: event.target[7].value,
            senha: event.target[8].value,
            confirmacaoSenha: event.target[9].value,
        };
        
        Register(body);
    };
    const navigate = useNavigate();
    function goToLogin() {
        navigate("/");
    }
    return (
        <FormRegister onSubmit={handleSubmit}>
            <img src={Logo} alt="Logo do sistema" />
            <ContainerInputs>
                <Container>
                    <Row>
                        <Col><input type="text" placeholder="Email" required/></Col>
                        <Col><input type="text" placeholder="Usuário" required/></Col>
                    </Row>
                    <Row>
                        <Col><input type="text" placeholder="Nome completo" required/></Col>
                        <Col><input type="date" placeholder="Nascimento" required/></Col>
                    </Row>
                    <Row>
                        <Col><input type="text" placeholder="RG" /></Col>
                        <Col><input type="text" placeholder="CPF" /></Col>
                    </Row>
                    <Row>
                        <Col><input type="text" placeholder="Instagram" /></Col>
                        <Col>
                            <select name="Tipo" required>
                                <option value="Selecione">Selecione</option>
                                <option value="C">Cliente</option>
                                <option value="O">Organizador</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col><input type="password" placeholder="Senha" required/></Col>
                        <Col><input type="password" placeholder="Confirme a senha" required/></Col>
                    </Row>
                </Container>                

                <button className="button-form green">REGISTRE-SE</button>
                <button className="button-form blue" onClick={goToLogin}>Já possui registro?</button>
            </ContainerInputs>
            <ToastContainer />
        </FormRegister>
    );
}
