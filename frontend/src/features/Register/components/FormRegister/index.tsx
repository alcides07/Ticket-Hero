import { FormRegister, ContainerInputs, InputCadastro } from "./styled";
import Logo from "../../../../assets/horizontal-logo.png";
import { Register } from "../../services/auth";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { IUserRegistro } from "../../../../types/IUserRegistro";
import { IMaskInput } from "react-imask";

export default function RegisterForm() {
    const navigate = useNavigate();
    const today = new Date(); 
    const dataMaxima = `${today.getFullYear()}-${('0' + (today.getMonth()+1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`;

    const goToLogin = (time:number) => {
        setTimeout(() => {
            navigate("/");
        }, time)
    }
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const body: IUserRegistro = {
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
        Register(body)
        .then(() => {
            goToLogin(2000);
        })
    };
    
    return (
        <FormRegister onSubmit={handleSubmit}>
            <img src={Logo} alt="Logo do sistema" />
            <ContainerInputs>
                <Container>
                    <Row>
                        <Col><InputCadastro type="text" placeholder="Email" required/></Col>
                        <Col><InputCadastro type="text" placeholder="Nome de usuário" required/></Col>
                    </Row>
                    <Row>
                        <Col><InputCadastro type="text" placeholder="Nome completo" required/></Col>
                        <Col><InputCadastro max = {dataMaxima} type="date" placeholder="Nascimento" required/></Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputCadastro 
                            as={IMaskInput}
                            mask="000.000.000" 
                            type="text" 
                            placeholder="RG" />
                        </Col>
                        <Col>
                            <InputCadastro  
                                as={IMaskInput}
                                mask="000.000.000-00" 
                                type="text" 
                                placeholder="CPF" />
                        </Col>
                    </Row>
                    <Row>
                        <Col><InputCadastro type="text" placeholder="Instagram" /></Col>
                        <Col>
                            <select name="Tipo" required>
                                <option value="Selecione">Selecione</option>
                                <option value="C">Cliente</option>
                                <option value="O">Organizador</option>
                            </select>  
                        </Col>
                    </Row>
                    <Row>
                        <Col><InputCadastro type="password" placeholder="Senha" required/></Col>
                        <Col><InputCadastro type="password" placeholder="Confirme a senha" required/></Col>
                    </Row>
                </Container>                

                <button className="button-form orange">REGISTRAR</button>
                <button className="button-form grey" onClick={(e) => {goToLogin(0)}}>Já possui registro?</button>
            </ContainerInputs>
            <ToastContainer />
        </FormRegister>
    );
}
