import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import { ContainerConteudo, ContainerIngressos, LabelTitulos, LabelValores } from "./styles" 
import { meusIngressos } from '../../services/meusIngressos';
import { useEffect, useState } from "react";
import { ICompra } from '../../../../types/ICompra';

export default function CardIngresso(){
    let i = 1;
    const [compras, setCompras] = useState<Record<string, ICompra>>({});
    const headers = {
        'Authorization': 'Token ' + localStorage.getItem("token")
      };

    useEffect(() => {
        meusIngressos(headers)
        .then((data) => {
            setCompras(data);
        })
        .catch((erro) => {
            console.log("Erro: ", erro);
        }) 
    }, []);

    return (
        <ContainerIngressos>
            <Row xs = {1} md = {3} className = "g-4">
            { compras && Object.keys(compras).length > 0 ? Object.keys(compras).map((compra: string) => (
                <CardGroup key = {compra}>
                    <Card>
                        <Card.Body>
                            <Card.Title> Compra de ingressos {i++} </Card.Title>
                            <Card.Text>
                                <ContainerConteudo>
                                    <LabelTitulos> Quantia: </LabelTitulos>
                                    <LabelValores> { compras[compra].ingresso.qtdIngresso } unidade(s) </LabelValores>
                                </ContainerConteudo>

                                <ContainerConteudo>
                                    <LabelTitulos> Evento: </LabelTitulos>
                                    <LabelValores> { compras[compra].evento.nome } </LabelValores>
                                </ContainerConteudo>

                                <ContainerConteudo>
                                    <LabelTitulos> Descrição: </LabelTitulos>
                                    <LabelValores> { compras[compra].evento.descricao } </LabelValores>
                                </ContainerConteudo>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"> Data da compra: {compras[compra].ingresso.data} </small>
                        </Card.Footer>
                    </Card>
              </CardGroup>
            ))
            :
                <p> Você não possui compras realizadas! </p>
            }

        </Row>
    </ContainerIngressos>
    )
}