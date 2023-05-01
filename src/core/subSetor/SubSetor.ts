export default class SubSetor {
    #id: string
    #ativo: boolean
    #nome: string
    #nomesetor: string
    #telefone: string
    #createAt: Date
    #updateAt: Date

    constructor(ativo: boolean, nome: string, nomesetor: string, telefone: string = null, id: string = null, createAt: Date, updateAt: Date) {
        this.#ativo = ativo
        this.#nome = nome
        this.#nomesetor = nomesetor
        this.#telefone = telefone
        this.#createAt = createAt
        this.#updateAt = updateAt
        this.#id = id
    }

    static vazio() {
        return new SubSetor(null,'','', null , null, null, null)
    }

    get id() {
        return this.#id
    }

    get ativo() {
        return this.#ativo
    }

    get nome() {
        return this.#nome
    }

    get nomesetor() {
        return this.#nomesetor
    }

    get telefone(){
        return this.#telefone
    }

    get createAt() {
        return this.#createAt
    }

    get updateAt() {
        return this.#updateAt
    }

}