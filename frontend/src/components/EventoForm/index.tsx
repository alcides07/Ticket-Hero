import { ContainerForm, ContainerItem, DescricaoItem, InputItem, InputCompra, Labelitem, CardCompra, BotaoVoltar, ValorVariavel, ContainerCompra, TituloCompra, TituloIngressosVendidos, NumeroIngressosVendidos, ContainerIngressosVendidos } from "./styles";
import BotaoForm from "../BotaoSubmitForm";
import { useEffect, useState } from "react";
import { IEvento } from "../../types/IEvento";
import moment from 'moment';
import { ToastContainer } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { getEventoId } from "./services/getEventoId";
import { EventoFormProps } from "../../types/IEventoFormProps";
import formataEmReal from "../../services/FormatacaoEmReal"

export default function EventoForm({ textoBotao, handle, readOnly, buy }: EventoFormProps) {
    let { id } = useParams();
    const today = new Date(); 
    const dataMinima = `${today.getFullYear()}-${('0' + (today.getMonth()+1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}T${('0' + today.getHours()).slice(-2)}:${('0' + today.getMinutes()).slice(-2)}`;
    const navigate = useNavigate();
    const [evento, setEvento] = useState<IEvento>();
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [data, setData] = useState("");
    const [valorIngresso, setValorIngresso] = useState(0);
    const [ingressoTotal, setIngressoTotal] = useState(0);
    const [quantidadeDesejada, setQuantidadeDesejada] = useState(0);
    const [descricao, setDescricao] = useState("");
    const headers = {
        'Authorization': 'Token ' + localStorage.getItem("token")
    };

    useEffect(() => {
        if (id){
            getEventoId(headers, id)
            .then((data) => {
                setEvento(data);
                setNome(data.nome);
                setCategoria(data.categoria);
                setValorIngresso(data.valorIngresso);
                setIngressoTotal(data.ingressoTotal);
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
            vendidos:0,
            ingressoDisponivel:0,
            organizador:"",
            nome: nome,
            categoria:categoria,
            data:data,
            valorIngresso: valorIngresso,
            ingressoTotal: ingressoTotal,
            descricao: descricao,
        };
        if (id && buy){
            handle(headers, quantidadeDesejada, localStorage.getItem("userId"), id); // Comprando ingresso
        }
        else if (id && !buy){
            handle(headers, id, dadosEvento); // Editando evento
        }
        else{
            handle(headers, dadosEvento); // Criando evento
        }
    };

    return (
        <>
        <BotaoVoltar onClick = {() => navigate(-1)}/>
        <ContainerForm onSubmit={handleSubmit}>
            { id && (
                <ContainerIngressosVendidos>
                    <TituloIngressosVendidos> Ingressos vendidos </TituloIngressosVendidos>
                    <NumeroIngressosVendidos> { evento? evento.vendidos : 0 } de { evento? evento.ingressoTotal : 0 } </NumeroIngressosVendidos>
                </ContainerIngressosVendidos>
            )}
            <ContainerItem>
                <Labelitem> Nome do evento </Labelitem>
                <InputItem
                    type = "text"
                    placeholder = "Ex: Aniversário de 15 anos de Fernanda"
                    onChange = {(e) => setNome(e.target.value)}
                    name = "nome" required
                    value={nome}
                    disabled = {readOnly}
                />
            </ContainerItem>
            
            <ContainerItem>
                <Labelitem> Data e horário do evento </Labelitem>
                <InputItem 
                    type = "datetime-local" required
                    onChange = {(e) => setData(e.target.value)}
                    name = "data"
                    min = {dataMinima}
                    value = {data}
                    disabled = {readOnly}
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
                    disabled = {readOnly}
                />
            </ContainerItem>

            <ContainerItem>
                <Labelitem> Descrição do evento </Labelitem>
                <DescricaoItem
                    placeholder = "Ex: O evento é repleto de música, dança, comida e momentos memoráveis ​​para a debutante e seus convidados." 
                    onChange = {(e) => setDescricao(e.target.value)}
                    name = "descricao"
                    required 
                    value = {descricao}
                    disabled = {readOnly}
                />
            </ContainerItem>

            <ContainerItem>
                <Labelitem> Valor do ingresso (R$) </Labelitem>
                <InputItem
                    type = "number"
                    placeholder = "0.00"
                    step = "0.01"
                    name = "valorIngresso"
                    min = "0" required
                    onChange = {(e) => setValorIngresso(parseFloat(e.target.value))}
                    value = {valorIngresso ? valorIngresso : ""}
                    disabled = {readOnly}
                />
            </ContainerItem>

            <ContainerItem>
                { buy ? 
                    <>
                        <Labelitem> Ingressos disponíveis </Labelitem>
                        <InputItem
                            type = "number"
                            name = "ingressoDisponivel"
                            value = {evento?.ingressoDisponivel ? evento.ingressoDisponivel : 0}
                            disabled = {readOnly}
                        />
                    </>
                :
                    <>
                        <Labelitem> Total de ingressos </Labelitem>
                        <InputItem
                            type = "number"
                            placeholder = "0"
                            name = "ingressoTotal"
                            min = "1" required
                            onChange = {(e) => setIngressoTotal(parseInt(e.target.value))}
                            value = {ingressoTotal ? ingressoTotal : ""}
                            disabled = {readOnly}
                        />
                    </>
                }
            </ContainerItem>

            { buy && (
                <> 
                <ContainerItem>
                    <Labelitem> Ingressos desejados </Labelitem>
                    <InputCompra
                        type = "number"
                        required
                        onChange = {(e) => setQuantidadeDesejada(parseInt(e.target.value))}
                        name = "totalCompra"
                        min = "1" 
                        max={evento?.ingressoDisponivel ? evento.ingressoDisponivel : 1}
                        placeholder = "0"
                    />
                </ContainerItem>
                    <ContainerCompra>
                        <CardCompra>
                            <TituloCompra> Ingressos: </TituloCompra>
                            <ValorVariavel> {quantidadeDesejada? quantidadeDesejada : 0} </ValorVariavel> 
                        </CardCompra>
                        
                        <CardCompra>
                            <TituloCompra> Total a pagar: </TituloCompra>
                            <ValorVariavel> {quantidadeDesejada? formataEmReal((quantidadeDesejada * valorIngresso)) : 0} </ValorVariavel> 
                        </CardCompra>
                    </ContainerCompra>
                </>
            )}
            { handle && (
                <BotaoForm textoBotao = {textoBotao} mt="1.5em" ml = "auto" mr="20vw"/>
            ) }

            <ToastContainer />
        </ContainerForm>
        </>
    )
}