import { ContainerForm, ContainerItem, DescricaoItem, InputItem, InputCompra, Labelitem, CardCompra, BotaoVoltar, ValorVariavel, ContainerCompra, TituloCompra, TituloForm, NumeroIngressosVendidos, ContainerTituloForm } from "./styles";
import BotaoForm from "../BotaoSubmitForm";
import { useEffect, useState } from "react";
import { IEvento } from "../../types/IEvento";
import moment from 'moment';
import { ToastContainer } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { getEventoId } from "./services/getEventoId";
import { EventoFormProps } from "../../types/IEventoFormProps";
import formataEmReal from "../../utils/FormatacaoEmReal";
import Form from 'react-bootstrap/Form';

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
    const [local, setLocal] = useState("");
    const [publico, setPublico] = useState(false); //Referencia a privacidade
    const [idadeMinima, setIdadeMinima] = useState(0);
    const [pathImg, setPathImg] = useState("");

    useEffect(() => {
        if (id){
            getEventoId(id)
            .then((data) => {
                setEvento(data);
                setNome(data.nome);
                setCategoria(data.categoria);
                setValorIngresso(data.valorIngresso);
                setIngressoTotal(data.ingressoTotal);
                setDescricao(data.descricao);
                setData(moment(data.data, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DDTHH:mm:ss'));
                setLocal(data.local);
                setIdadeMinima(data.idadeMinima);
                setPublico(data.publico);
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
            local: local,
            idadeMinima: idadeMinima,
            publico: publico,
            pathImg: ''
        };
        if (id && buy){
            handle(quantidadeDesejada, localStorage.getItem("userId"), id); // Comprando ingresso
        }
        else if (id && !buy){
            handle(id, dadosEvento); // Editando evento
        }
        else{
            handle(dadosEvento); // Criando evento
        }
    };

    return (
        <>
        <BotaoVoltar onClick = {() => navigate(-1)}/>
        <ContainerForm onSubmit={handleSubmit}>
            { id ? (
                <ContainerTituloForm>
                    <TituloForm> Ingressos vendidos </TituloForm>
                    <NumeroIngressosVendidos> { evento? evento.vendidos : 0 } de { evento? evento.ingressoTotal : 0 } </NumeroIngressosVendidos>
                </ContainerTituloForm>
            )
            :
            <ContainerTituloForm>
                <TituloForm> Criação de Evento </TituloForm>
            </ContainerTituloForm>
            }
            <ContainerItem>
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Nome do evento </Labelitem>
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
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Data e horário do evento </Labelitem>
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
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Categoria do evento </Labelitem>
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
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Descrição do evento </Labelitem>
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
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Local do evento </Labelitem>
                <InputItem 
                    type = "text"
                    placeholder = "Ex: Rua Padre Joao Damasceno." 
                    name = "local" required 
                    onChange = {(e) => setLocal(e.target.value)}
                    value = {local}
                    disabled = {readOnly}
                />
            </ContainerItem>

            <ContainerItem>
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Valor do ingresso (R$) </Labelitem>
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
                        <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Ingressos disponíveis </Labelitem>
                        <InputItem
                            type = "number"
                            name = "ingressoDisponivel"
                            value = {evento?.ingressoDisponivel ? evento.ingressoDisponivel : 0}
                            disabled = {readOnly}
                        />
                    </>
                :
                    <>
                        <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Total de ingressos </Labelitem>
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
            <ContainerItem>
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Idade mínima necessária </Labelitem>
                <InputItem className = "required"
                    type = "number"
                    placeholder = "3"
                    name = "idadeMinima" required 
                    min = "0" 
                    onChange = {(e) => setIdadeMinima(parseInt(e.target.value))}
                    value = {idadeMinima ? idadeMinima : ""}
                    disabled = {readOnly}
                />
            </ContainerItem>
            <ContainerItem>
                <Form.Check 
                    type="switch"
                    label="Evento público"
                    onChange = {(e) => setPublico(e.target.checked)}    
                    checked={publico}        
                    disabled = {readOnly}        
                />
            </ContainerItem>
            
            { buy && (
                <> 
                <ContainerItem>
                    <Labelitem className = "requiredRed"> Ingressos desejados </Labelitem>
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
                <BotaoForm textoBotao = {textoBotao} mt="2em" ml = "auto" mr="20vw"/>
            ) }

            <ToastContainer />
        </ContainerForm>
        </>
    )
}