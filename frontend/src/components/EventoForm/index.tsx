import { ContainerForm, ContainerItem, DescricaoItem, InputItem, Labelitem, BotaoVoltar } from "./styles";
import BotaoForm from "../BotaoSubmitForm";
import { useEffect, useState } from "react";
import { IEvento } from "../../types/IEvento";
import moment from 'moment';
import { ToastContainer } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { getEventoId } from "../../features/CompraIngresso/services/eventoId";
import { EventoFormProps } from "../../types/IEventoFormProps";

export default function EventoForm({ textoBotao, handle, disable }: EventoFormProps) {
    let { id } = useParams();
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [data, setData] = useState("");
    const [valor, setValor] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [descricao, setDescricao] = useState("");
    const headers = {
        'Authorization': 'Token ' + localStorage.getItem("token")
    };

    useEffect(() => {
        if (id){
            getEventoId(headers, id ?? "")
            .then((data) => {
                setNome(data.nome);
                setCategoria(data.categoria);
                setValor(data.valorIngresso);
                setQuantidade(data.ingressoTotal);
                setDescricao(data.descricao);
                setData(moment(data.data, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DDTHH:mm:ss'));
            })
            .catch((error) => {
                console.log("erro: ", error)
            });
    }}, [id]);

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        const dadosEvento: IEvento = {
            id:"",
            nomeOrganizador:"",
            imagem:"",
            ingressoDisponivel:0,
            organizador:"",
            nome: nome,
            categoria:categoria,
            data:data,
            valorIngresso: valor,
            ingressoTotal: quantidade,
            descricao: descricao,
        };
        id ? handle(headers, id, dadosEvento) : handle(headers, dadosEvento); // Criando ou atualizando evento
    };

    return (
        <>
        <BotaoVoltar onClick = {() => navigate(-1)}/>
        <ContainerForm onSubmit={handleSubmit}>
            <ContainerItem>
                <Labelitem> Nome do evento </Labelitem>
                <InputItem
                    type = "text"
                    placeholder = "Ex: Aniversário de 15 anos de Fernanda"
                    onChange = {(e) => setNome(e.target.value)}
                    name = "nome" required
                    value={nome}
                    disabled = {disable}
                />
            </ContainerItem>

            <ContainerItem>
                <Labelitem> Categoria do evento </Labelitem>
                <InputItem 
                    type = "text"
                    placeholder = "Ex: Festa"
                    name = "categoria" required 
                    onChange = {(e) => setCategoria(e.target.value)}
                    value = {categoria}
                    disabled = {disable}
                />
            </ContainerItem>

            <ContainerItem>
                <Labelitem> Data e horário do evento </Labelitem>
                <InputItem 
                    type = "datetime-local" required
                    onChange = {(e) => setData(e.target.value)}
                    name = "data"
                    value = {data}
                    disabled = {disable}
                />
            </ContainerItem>

            <ContainerItem>
                <Labelitem> Valor do ingresso </Labelitem>
                <InputItem
                    type = "number"
                    placeholder = "0"
                    name = "valorIngresso"
                    min = "0" required
                    onChange = {(e) => setValor(parseFloat(e.target.value))}
                    value = {valor}
                    disabled = {disable}
                />
            </ContainerItem>

            <ContainerItem>
                <Labelitem> Quantidade de ingressos </Labelitem>
                <InputItem
                    type = "number"
                    placeholder = "0"
                    name = "ingressoTotal"
                    min = "1" required
                    onChange = {(e) => setQuantidade(parseInt(e.target.value))}
                    value = {quantidade}
                    disabled = {disable}
                />
            </ContainerItem>

            <ContainerItem>
                <Labelitem> Descrição do evento </Labelitem>
                <DescricaoItem
                    placeholder = "Ex: O evento é repleto de música, dança, comida e momentos memoráveis ​​para a debutante e seus convidados." 
                    onChange = {(e) => setDescricao(e.target.value)}
                    required name = "descricao"
                    value = {descricao}
                    disabled = {disable}
                />
            </ContainerItem>

            { handle && (
                <BotaoForm textoBotao = {textoBotao} mt="1.5em" ml = "auto" mr="20vw"/>
            )}
            <ToastContainer />
        </ContainerForm>
        </>
    )
}