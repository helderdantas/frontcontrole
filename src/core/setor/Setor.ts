export default class Setor {
    #id: string
    #ativo: boolean
    #nome: string
    #createAt: Date
    #updateAt: Date

    constructor(ativo: boolean, nome: string, id: string = null, createAt: Date, updateAt: Date) {
        this.#ativo = ativo
        this.#nome = nome
        this.#createAt = createAt
        this.#updateAt = updateAt
        this.#id = id
    }

    static vazio() {
        return new Setor(null, '', null, null, null)
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

    get createAt() {
        return this.#createAt
    }

    get updateAt() {
        return this.#updateAt
    }

}