import { useEffect, useState } from "react";
import { vendasEvento } from "../../services/vendasEvento"
import { useParams } from "react-router-dom";
import { IVenda } from "../../../../types/IVenda"
import formataEmReal from "../../../../services/FormatacaoEmReal";
import { ContainerTabela, TituloTabela } from "./styles";
import Table from 'react-bootstrap/Table';

export default function TabelaVendas(){
    const headers = {
        'Authorization': 'Token ' + localStorage.getItem("token")
    };
    let { id } = useParams();
    const [vendas, setVendas] = useState([]);

    useEffect(() => {
        if (id){
            vendasEvento(headers, id)
            .then((data) => {
                setVendas(data);
            })
            .catch((error) => {
                console.log("erro: ", error)
            });
    }}, [id]);
    
    return (
        <ContainerTabela>      
            <TituloTabela> Ingressos Vendidos </TituloTabela>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style = {{fontWeight: 500}}>Cliente</th>
                        <th style = {{fontWeight: 500}}>Quantidade</th>
                        <th style = {{fontWeight: 500}}>Valor (R$)</th>
                        <th style = {{fontWeight: 500}}>Data</th>
                    </tr>
                </thead>
                <tbody>
                    { vendas.map((venda:IVenda) => (
                        <tr key = {venda.id}>
                            <td className="align-middle">{venda.nomeCliente}</td>
                            <td className="align-middle">{venda.qtdIngresso}</td>
                            <td className="align-middle">{formataEmReal(venda.valorTotal)}</td>
                            <td className="align-middle">{venda.data}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </ContainerTabela>
    )
}