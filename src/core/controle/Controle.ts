export default class Controle{

    #id: string
    #setor: string
    #subsetor: string
    #ilha: string
    #cpu: string
    #cpunumeroserie: string
    #monitor1: string
    #monitor1numeroserie: string
    #monitor2: string
    #monitor2numeroserie: string
    #impressora: string
    #telefone: string
    #observacao: string
    #createAt:Date
    #updateAt:Date

    constructor(setor: string, subsetor: string, ilha:string, cpu:string, cpunumeroserie: string, monitor1: string, monitor1numeroserie: string, monitor2:string, monitor2numeroserie: string, impressora:string, telefone:string, observacao:string, id: string=null, createAt:Date, updateAt:Date){
        this.#setor=setor
        this.#subsetor=subsetor
        this.#ilha=ilha
        this.#cpu=cpu
        this.#cpunumeroserie=cpunumeroserie
        this.#monitor1=monitor1
        this.#monitor1numeroserie=monitor1numeroserie
        this.#monitor2=monitor2
        this.#monitor2numeroserie=monitor2numeroserie
        this.#impressora=impressora
        this.#telefone=telefone
        this.#observacao=observacao
        this.#createAt=createAt
        this.#updateAt=updateAt
        this.#id=id
    }

    static vazio(){
        return new Controle('','','','','','','','','','','','',null,null,null)
    }

    get id(){
        return this.#id
    }

    get setor(){
        return this.#setor
    }

    get subsetor(){
        return this.#subsetor

    }

    get ilha(){
        return this.#ilha
    }

    get cpu(){
        return this.#cpu
    }
    
    get cpunumeroserie(){
        return this.#cpunumeroserie
    }

    get monitor1(){
        return this.#monitor1
    }

    get monitor1numeroserie(){
        return this.#monitor1numeroserie
    }

    get monitor2(){
        return this.#monitor2
    }

    get monitor2numeroserie(){
        return this.#monitor2numeroserie
    }

    get impressora(){
        return this.#impressora
    }

    get telefone(){
        return this.#telefone
    }

    get observacao(){
        return this.#observacao
    }

    get createAt(){
        return this.#createAt
    }

    get updateAt(){
        return this.#updateAt
    }

}