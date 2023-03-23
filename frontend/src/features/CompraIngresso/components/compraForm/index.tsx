import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventoId } from "../../services/eventoId";
import { IEvento } from "../../../../types/IEvento";
import { ContainerEvento, ContainerItem, ItemTitulo, ItemValor, BotaoVoltar, Input } from "./styles"
import { compraIngresso } from "../../services/compra";
import { ToastContainer } from 'react-toastify';
import BotaoForm from "../../../../components/BotaoSubmitForm";
import { IBotaoSubmitForm } from "../../../../types/IBotaoSubmitForm";

export default function CompraForm({ textoBotao }: IBotaoSubmitForm){
    const navigate = useNavigate();
    const { id } = useParams();
    const [quantidade, setQuantidade] = useState(1);
    const [evento, setEvento] = useState<IEvento>();
    const headers = {
        'Authorization': 'Token ' + localStorage.getItem("token")
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault(); 
        compraIngresso(headers, quantidade, localStorage.getItem("userId") ?? "", id ?? "");
        setTimeout(() => {
            navigate("/home");
        }, 1500); 
    };

    useEffect(() => {
        getEventoId(headers, id ?? "")
        .then((data) => {
            setEvento(data);
        })
        .catch((error) => {
            console.log("erro: ", error)
        });
    }, [id]);
    
    return (
        <>
            { evento && (
                <ContainerEvento onSubmit = {handleSubmit}>
                    <BotaoVoltar onClick = {() => navigate(-1)}/>
                    <ContainerItem>
                        <ItemTitulo> Evento: </ItemTitulo>
                        <ItemValor> { evento.nome } </ItemValor>
                    </ContainerItem>

                    <ContainerItem>
                        <ItemTitulo> Organizador: </ItemTitulo>
                        <ItemValor> { evento.nomeOrganizador } </ItemValor>
                    </ContainerItem>

                    <ContainerItem>
                        <ItemTitulo> Categoria: </ItemTitulo>
                        <ItemValor> { evento.categoria } </ItemValor>
                    </ContainerItem>

                    <ContainerItem>
                        <ItemTitulo> Data: </ItemTitulo>
                        <ItemValor> <> { evento.data } </> </ItemValor>
                    </ContainerItem>

                    <ContainerItem>
                        <ItemTitulo> Valor do ingresso: </ItemTitulo>
                        <ItemValor> R$ { evento.valorIngresso } </ItemValor>
                    </ContainerItem>

                    <ContainerItem>
                        <ItemTitulo> Disponível: </ItemTitulo>
                        <ItemValor> { evento.ingressoDisponivel } ingresso(s) </ItemValor>
                    </ContainerItem>

                    <ContainerItem>
                        <ItemTitulo> Descrição: </ItemTitulo>
                        <ItemValor> { evento.descricao } </ItemValor>
                    </ContainerItem>

                    <ContainerItem>
                        <ItemTitulo> Total: </ItemTitulo>
                        <ItemValor> {quantidade} X R$  {evento.valorIngresso} = <span style={{color: "#FF914D", fontWeight:"bold"}}>R$ {evento.valorIngresso * quantidade}</span> </ItemValor>
                        <Input type = "number" defaultValue="1" min = "1" max={evento.ingressoDisponivel} onChange = {(e) => setQuantidade(parseInt(e.target.value))}></Input>
                    </ContainerItem>
                    <BotaoForm textoBotao={textoBotao} ml="auto" mr="14.5vw" mt="3em" mb="1em"/>
                    <ToastContainer/>
                </ContainerEvento>
            )}
        </>
    )
}