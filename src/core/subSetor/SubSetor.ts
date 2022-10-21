export default class SubSetor {
    #id: string
    #ativo: boolean
    #nome: string
    #nomeSetor: string
    #createAt: Date
    #updateAt: Date

    constructor(ativo: boolean, nome: string, nomeSetor:string, id: string = null, createAt: Date, updateAt: Date) {
        this.#ativo = ativo
        this.#nome = nome
        this.#nomeSetor = nomeSetor
        this.#createAt = createAt
        this.#updateAt = updateAt
        this.#id = id
    }

    static vazio() {
        return new SubSetor(null,'','', null, null, null)
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

    get nomeSetor() {
        return this.#nomeSetor
    }

    get createAt() {
        return this.#createAt
    }

    get updateAt() {
        return this.#updateAt
    }

}