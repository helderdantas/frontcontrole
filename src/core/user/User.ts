
export default class User {
    #id: string
    #nome: string
    #email: string
    #cpf: string
    #password: string
    #telefone: string
    #createAt: Date
    #updateAt: Date

    constructor(nome: string, email: string, cpf: string, password: string, telefone: string = null, id: string = null, createAt: Date, updateAt: Date) {
        this.#nome = nome
        this.#email = email
        this.#cpf=cpf
        this.#password= password
        this.#telefone = telefone
        this.#createAt = createAt
        this.#updateAt = updateAt
        this.#id = id
    }

    static vazio() {
        return new User('','','','',null , null, null, null)
    }

    get id() {
        return this.#id
    }

    get email() {
        return this.#email
    }

    get nome() {
        return this.#nome
    }
    
    get cpf() {
        return this.#cpf
    }

    get password() {
        return this.#password
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