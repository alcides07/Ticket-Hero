import { FormikValues } from "formik";

export interface IEvento extends FormikValues{
    id: string;
    categoria: string;
    vendidos?: number;
    nome: string;
    descricao: string;
    nomeOrganizador: string;
    data: string;
    imagem: string;
    valorIngresso: number;
    ingressoTotal: number;
    ingressoDisponivel: number;
    organizador: string;
    local: string;
    publico: boolean;
    idadeMinima: number;
    pathImg: string;
}