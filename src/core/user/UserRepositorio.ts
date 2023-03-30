import User from "./User";

export default interface UserRepositorio{
    criarUser(user: User): Promise<User>
    deletarUser(user: User): Promise<void>
    atualizarUser(user:User): Promise<void>
    atualizarUserSenha(email:string, password:string): Promise<void>
    obterTodosUsers(): Promise<User[]>
}