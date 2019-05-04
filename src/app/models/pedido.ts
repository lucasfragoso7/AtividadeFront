
export class Pedido {
    id?:number
    prato:number
    nome_do_comprador?:string
    valor:number
    
    constructor(pedido:number,valor:number){
        this.prato=pedido
        this.valor=valor
    }
}