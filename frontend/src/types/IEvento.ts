export interface IEvento{
    id: string;
    categoria: string;
    vendidos?: number;
    nome: string;
    descricao: string;
    nomeOrganizador: string;
    data: string;
    imagem: File;
    valorIngresso: number;
    ingressoTotal: number;
    ingressoDisponivel: number;
    organizador: string;
    local: string;
    publico: boolean;
    idadeMinima: number;
    pathImg: string;
}