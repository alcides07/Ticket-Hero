import { IEvento } from './IEvento';

export interface ICompra{
    evento: IEvento;
    id: string;
    nomeCliente: string;
    qtdIngresso: string;
    valorTotal: string;
    data: string;
    cliente: string
}