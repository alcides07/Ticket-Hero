import { IVenda } from './IVenda';
import { IEvento } from './IEvento';

export interface ICompra{
    evento: IEvento;
    ingresso: IVenda;
}