export default function formataEmReal(valor: number) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })    
}