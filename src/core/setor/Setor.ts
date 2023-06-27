export default class Setor {
    #id: string
    #ativo: boolean
    #nome: string
    #telefone:string
    #createdAt: Date
    #updatedAt: Date

    constructor(ativo: boolean, nome: string, telefone: string = null, id: string = null, createdAt: Date, updatedAt: Date) {
        this.#ativo = ativo
        this.#nome = nome
        this.#telefone = telefone
        this.#createdAt = createdAt
        this.#updatedAt = updatedAt
        this.#id = id
    }

    static vazio() {
        return new Setor(null, '', null, null, null, null)
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

    get telefone(){
        return this.#telefone
    }

    get createdAt() {
        return this.#createdAt
    }

    get updatedAt() {
        return this.#updatedAt
    }

}