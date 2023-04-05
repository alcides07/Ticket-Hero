import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar";
import { editarEvento } from "./services/editarEvento";
import EventoForm from "../../components/EventoForm";
import Table from 'react-bootstrap/Table';
import { ContainerTabela, TituloTabela } from "./styles";
import { useEffect, useState } from "react";
import { vendasEvento } from "./services/vendasEvento";
import { useParams, useNavigate } from "react-router-dom";
import { IVenda } from "../../types/IVenda";
import formataEmReal from "../../services/FormatacaoEmReal"

export default function EditarEvento(){
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
        <>
            <Navbar2/>
            <EventoForm readOnly = {false} textoBotao = "Salvar evento" handle={editarEvento} />
            <ContainerTabela>      
                <TituloTabela> Ingresso Vendidos </TituloTabela>
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
            <Footer/>
        </>
    );
}