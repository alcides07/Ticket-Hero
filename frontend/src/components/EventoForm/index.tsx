import { ContainerForm, ContainerItem, DescricaoItem, InputItem, InputCompra, Labelitem, CardCompra, BotaoVoltar, ValorVariavel, ContainerCompra, TituloCompra, TituloForm, NumeroIngressosVendidos, ContainerTituloForm, MensagemValidacao, FormEvento, ContainerItemMensagem } from "./styles";
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
import { Formik } from "formik";
import * as Yup from "yup";

export default function EventoForm({ textoBotao, handle, readOnly, buy }: EventoFormProps) {
    let { id } = useParams();
    const today = new Date(); 
    const dataMinima = `${today.getFullYear()}-${('0' + (today.getMonth()+1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}T${('0' + today.getHours()).slice(-2)}:${('0' + today.getMinutes()).slice(-2)}`;
    const navigate = useNavigate();
    const [evento, setEvento] = useState<IEvento>();
    // const [valorIngresso, setValorIngresso] = useState(0);
    // const [quantidadeDesejada, setQuantidadeDesejada] = useState(0);
    const [publico, setPublico] = useState(false); //Referencia a privacidade

    const valoresIniciais = {
        "id": "",
        "nome": "",
        "categoria": "",
        "valorIngresso": "",
        "ingressoTotal": "",
        "ingressoDisponivel": "",
        "organizador": "",
        "descricao": "",
        "data": "",
        "local": "",
        "idadeMinima": "",
        "publico": false,
        "nomeOrganizador": "",
        "imagem" : "",
        "pathImg" : "",
        "quantidadeDesejada": ""
    };

    useEffect(() => {
        if (id){
            getEventoId(id)
            .then((data) => {
                setEvento(data);
                valoresIniciais["id"] = data.id; 
                valoresIniciais["nome"] = data.nome; 
                valoresIniciais["categoria"] = data.categoria; 
                valoresIniciais["valorIngresso"] = data.valorIngresso; 
                valoresIniciais["ingressoTotal"] = data.ingressoTotal; 
                valoresIniciais["descricao"] = data.descricao; 
                valoresIniciais["data"] = moment(data.data, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DDTHH:mm:ss'); 
                valoresIniciais["local"] = data.local; 
                valoresIniciais["idadeMinima"] = data.idadeMinima; 
                valoresIniciais["publico"] = data.publico; 
                valoresIniciais["ingressoDisponivel"] = data.ingressoDisponivel;
            })
            .catch((error) => {
                console.log("erro: ", error);
                navigate("*");
            });
    }}, [id]);

    function handleSubmit(values:IEvento){
        if (id && buy){
            handle(values.quantidadeDesejada, localStorage.getItem("userId"), id); // Comprando ingresso
             // toast aqui
        }
        else if (id && !buy){
            handle(id, values); // Editando evento
            // toast aqui
        }
        else{
            handle(values); // Criando evento
            // toast aqui
        }
    }

    const validationSchema = Yup.object({
        nome: Yup.string()
            .required("Campo obrigatório!"),

        categoria: Yup.string()
            .required("Campo obrigatório!"),

        valorIngresso: Yup.string()
            .required("Campo obrigatório!"),
        
        ingressoTotal: Yup.string()
            .required("Campo obrigatório!"),

        data: Yup.date()
            .required("Campo obrigatório!")
            .min(new Date(), "Data inválida!"),

        descricao: Yup.string()
            .required("Campo obrigatório!")
            .min(1, "Campo ob"),
            
        local: Yup.string()
            .required("Campo obrigatório!"),

        idadeMinima: Yup.string()
            .required("Campo obrigatório!"),

        publico: Yup.string()
            .required("Campo obrigatório!"),

        quantidadeDesejada: Yup.string()
            .required("Campo obrigatório!"),
    });


    return (
        <>
        <BotaoVoltar onClick = {() => navigate(-1)}/>
        <Formik 
            onSubmit={handleSubmit}
            initialValues={valoresIniciais}
            validationSchema={validationSchema}
            >
            <FormEvento>
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
                <ContainerItemMensagem>
                    <InputItem
                        type = "text"
                        placeholder = "Ex: Aniversário de 15 anos de Fernanda"
                        name = "nome" required
                        disabled = {readOnly}
                    />
                    <MensagemValidacao component = "label" name = "nome"/>
                </ContainerItemMensagem>
            </ContainerItem>
            
            <ContainerItem>
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Data e horário do evento </Labelitem>
                <ContainerItemMensagem>
                    <InputItem 
                        type = "datetime-local" required
                        name = "data"
                        min = {dataMinima}
                        disabled = {readOnly}
                    />
                    <MensagemValidacao component = "label" name = "data"/>
                </ContainerItemMensagem>
            </ContainerItem>

            <ContainerItem>
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Categoria do evento </Labelitem>
                <ContainerItemMensagem>
                    <InputItem 
                        type = "text"
                        placeholder = "Ex: Festa"
                        name = "categoria" required 
                        disabled = {readOnly}
                    />
                    <MensagemValidacao component = "label" name = "categoria"/>
                </ContainerItemMensagem>
            </ContainerItem>

            <ContainerItem>
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Descrição do evento </Labelitem>
                <ContainerItemMensagem>
                    <DescricaoItem
                        placeholder = "Ex: O evento é repleto de música, dança, comida e momentos memoráveis ​​para a debutante e seus convidados." 
                        required 
                        component="textarea"
                        name = "descricao"
                        disabled = {readOnly}
                    />
                    <MensagemValidacao component = "label" name = "descricao"/>
                </ContainerItemMensagem>
            </ContainerItem>

            <ContainerItem>
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Local do evento </Labelitem>
                <ContainerItemMensagem>
                    <InputItem 
                        type = "text"
                        placeholder = "Ex: Rua Padre Joao Damasceno." 
                        name = "local" required
                        disabled = {readOnly}
                    />
                    <MensagemValidacao component = "label" name = "local"/>
                </ContainerItemMensagem>
            </ContainerItem>

            <ContainerItem>
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Valor do ingresso (R$) </Labelitem>
                <ContainerItemMensagem>
                    <InputItem
                        type = "number"
                        placeholder = "0.00"
                        step = "0.01"
                        name = "valorIngresso"
                        min = "0" required
                        disabled = {readOnly}
                    />
                    <MensagemValidacao component = "label" name = "valorIngresso"/>
                </ContainerItemMensagem>
            </ContainerItem>

            <ContainerItem>
                { buy ? 
                    <>
                        <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Ingressos disponíveis </Labelitem>
                        <ContainerItemMensagem>
                            <InputItem
                                type = "number"
                                name = "ingressoDisponivel"
                                disabled = {readOnly}
                            />
                         </ContainerItemMensagem>
                    </>
                :
                <>
                        <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Total de ingressos </Labelitem>
                        <ContainerItemMensagem>
                            <InputItem 
                                type = "number"
                                placeholder = "0"
                                name = "ingressoTotal"
                                min = "1" required
                                disabled = {readOnly}
                            />
                            <MensagemValidacao component = "label" name = "ingressoTotal"/>
                        </ContainerItemMensagem>
                    </>
                }
            </ContainerItem>
            <ContainerItem>
                <Labelitem className = {readOnly ? "requiredGrey" : "requiredRed"}> Idade mínima necessária </Labelitem>
                <ContainerItemMensagem>
                    <InputItem className = "required"
                        type = "number"
                        placeholder = "3"
                        name = "idadeMinima" required 
                        min = "0" 
                        disabled = {readOnly}
                    />
                    <MensagemValidacao component = "label" name = "idadeMinima"/>
                </ContainerItemMensagem>
            </ContainerItem>
            <ContainerItem>
                <Form.Check 
                    type="switch"
                    label="Evento público"
                    onChange = {(e:any) => setPublico(e.target.checked)}    
                    checked={publico}        
                    name="publico"
                    disabled = {readOnly}        
                />
            </ContainerItem>
            
            { buy && (
                <> 
                <ContainerItem>
                    <Labelitem className = "requiredRed"> Ingressos desejados </Labelitem>
                    <ContainerItemMensagem>
                        <InputItem
                            type = "number"
                            required
                            name="quantidadeDesejada"
                            min="1" 
                            max={evento?.ingressoDisponivel ? evento.ingressoDisponivel : 1}
                            placeholder = "0"
                        />
                        <MensagemValidacao component = "label" name = "quantidadeDesejada"/>
                    </ContainerItemMensagem>
                </ContainerItem>
                    <ContainerCompra>
                        <CardCompra>
                            <TituloCompra> Ingressos: </TituloCompra>
                            {/* <ValorVariavel> {values.quantidadeDesejada} </ValorVariavel>  */}
                        </CardCompra>
                        
                        <CardCompra>
                            <TituloCompra> Total a pagar: </TituloCompra>
                            {/* <ValorVariavel> { valoresIniciais["valorIngresso"] ? formataEmReal((quantidadeDesejada * evento.valorIngresso)) : 0} </ValorVariavel>  */}
                        </CardCompra>
                    </ContainerCompra>
                </>
            )}
            { handle && (
                <BotaoForm textoBotao = {textoBotao} mt="2em" mb="2em" ml = "auto" mr="37vw"/>
                ) }

            <ToastContainer />
        </FormEvento>
        </Formik>
        </>
    )
}