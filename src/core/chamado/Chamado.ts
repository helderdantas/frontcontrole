export default class Chamado{
    #id: string
    #aberto:boolean
    #nome: string
    #setor: string
    #subSetor: string
    #equipamentoComDefeito:string
    #equipamentoTombo:string
    #descricao: string
    #equipeSuport:string
    #status:string
    #observacao:string
    #createAt:Date
    #updateAt:Date

    constructor(aberto:boolean, nome:string, setor: string, subSetor: string, equipamentoComDefeito:string, equipamentoTombo:string, descricao: string, equipeSuport:string, status:string, observacao:string, id: string=null, createAt:Date, updateAt:Date){
        this.#aberto=aberto
        this.#nome=nome
        this.#setor=setor
        this.#subSetor=subSetor
        this.#equipamentoComDefeito=equipamentoComDefeito
        this.#equipamentoTombo=equipamentoTombo
        this.#descricao=descricao
        this.#equipeSuport=equipeSuport
        this.#status=status
        this.#observacao=observacao
        this.#createAt=createAt
        this.#updateAt=updateAt
        this.#id=id
    }

    static vazio(){
        return new Chamado(null,'','','','','','','','','',null,null,null)
    }

    get id(){
        return this.#id
    }

    get aberto(){
        return this.#aberto
    }

    get nome(){
        return this.#nome
    }
    
    get setor(){
        return this.#setor
    }

    get subSetor(){
        return this.#subSetor
    }

    get equipamentoComDefeito(){
        return this.#equipamentoComDefeito
    }

    get equipamentoTombo(){
        return this.#equipamentoTombo
    }

    get descricao(){
        return this.#descricao
    }

    get equipeSuport(){
        return this.#equipeSuport
    }

    get status(){
        return this.#status
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