export interface IEvento{
    id: string;
    categoria: string;
    nome: string;
    descricao: string;
    data: Date;
    imagem: string;
    valorIngresso: number;
    ingressoTotal: number;
    ingressoDisponivel: number;
    organizador: string;
}
    
// "id": 1,
// "categoria": "categ",
// "nome": "Nomevento",
// "descricao": "descricao",
// "data": "2023-03-15T17:18:45Z",
// "imagem": null,
// "valorIngresso": 50.0,
// "ingressoTotal": 50,
// "ingressoDisponivel": 50,
// "organizador": 1