export default class Controle{

    #id: string
    #setor: string
    #subsetor: string
    #ilha: string
    #cpu: string
    #monitor1: string
    #monitor2: string
    #impressora: string
    #telefone: string
    #observacao: string
    #createAt:Date
    #updateAt:Date

    constructor(setor: string, subsetor: string, ilha:string, cpu:string, monitor1: string, monitor2:string, impressora:string, telefone:string, observacao:string, id: string=null, createAt:Date, updateAt:Date){
        this.#setor=setor
        this.#subsetor=subsetor
        this.#ilha=ilha
        this.#cpu=cpu
        this.#monitor1=monitor1
        this.#monitor2=monitor2
        this.#impressora=impressora
        this.#telefone=telefone
        this.#observacao=observacao
        this.#createAt=createAt
        this.#updateAt=updateAt
        this.#id=id
    }

    static vazio(){
        return new Controle('','','','','','','','','',null,null,null)
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

    get monitor1(){
        return this.#monitor1
    }

    get monitor2(){
        return this.#monitor2
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