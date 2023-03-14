import { FormRegister, ContainerInputs } from "./styled";
import Logo from "../../../../assets/horizontal-logo.png";
import { Register } from "../../services/auth";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


interface IUser {
    usuario: string;
    senha: string;
};

export default function RegisterForm() {
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const body: IUser = {
            usuario: event.target[0].value,
            senha: event.target[1].value,
        };
        Register(body);
    };
    return (
        <FormRegister onSubmit={handleSubmit}>
            <img src={Logo} alt="Logo do sistema" />
            <ContainerInputs>
                <Container>
                    <Row>
                        <Col><input type="text" placeholder="Email" /></Col>
                        <Col><input type="text" placeholder="Usuário" /></Col>
                    </Row>
                    <Row>
                        <Col><input type="text" placeholder="Nome completo" /></Col>
                        <Col><input type="date" placeholder="Nascimento" /></Col>
                    </Row>
                    <Row>
                        <Col><input type="text" placeholder="RG" /></Col>
                        <Col><input type="text" placeholder="CPF" /></Col>
                    </Row>
                    <Row>
                        <Col><input type="text" placeholder="Instagram" /></Col>
                        <Col>
                            <select name="Tipo">
                                <option value="Selecione">Selecione</option>
                                <option value="0">Comum</option>
                                <option value="1">Organizador</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col><input type="password" placeholder="Senha" /></Col>
                        <Col><input type="password" placeholder="Confirme a senha" /></Col>
                    </Row>
                </Container>








                
                

                <button className="green">REGISTRE-SE</button>
            </ContainerInputs>
        </FormRegister>
    );
}
