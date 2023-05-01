export default class Controle{

    #id: string
    #setor: string
    #subsetor: string
    #ilha: string
    #baia: string
    #cputombo: string
    #cpunumeroserie: string
    #monitor1tombo: string
    #monitor1numeroserie: string
    #monitor2tombo: string
    #monitor2numeroserie: string
    #impressora: string
    #telefone: string
    #observacao: string
    #createAt:Date
    #updateAt:Date

    constructor(setor: string, subsetor: string, ilha:string, baia:string, cputombo:string, cpunumeroserie: string, monitor1tombo: string, monitor1numeroserie: string, monitor2tombo:string, monitor2numeroserie: string, impressora:string, telefone:string, observacao:string, id: string=null, createAt:Date, updateAt:Date){
        this.#setor=setor
        this.#subsetor=subsetor
        this.#ilha=ilha
        this.#baia=baia
        this.#cputombo=cputombo
        this.#cpunumeroserie=cpunumeroserie
        this.#monitor1tombo=monitor1tombo
        this.#monitor1numeroserie=monitor1numeroserie
        this.#monitor2tombo=monitor2tombo
        this.#monitor2numeroserie=monitor2numeroserie
        this.#impressora=impressora
        this.#telefone=telefone
        this.#observacao=observacao
        this.#createAt=createAt
        this.#updateAt=updateAt
        this.#id=id
    }

    static vazio(){
        return new Controle('','','','','','','','','','','','','',null,null,null)
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
    get baia(){
        return this.#baia
    }

    get cputombo(){
        return this.#cputombo
    }
    
    get cpunumeroserie(){
        return this.#cpunumeroserie
    }

    get monitor1tombo(){
        return this.#monitor1tombo
    }

    get monitor1numeroserie(){
        return this.#monitor1numeroserie
    }

    get monitor2tombo(){
        return this.#monitor2tombo
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