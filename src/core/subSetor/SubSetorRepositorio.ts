import SubSetor from "./SubSetor";

export default interface SubSetorRepositorio{
    criarSubSetor(subSetor: SubSetor): Promise<SubSetor>
    finalizarSubSetor(subSetor: SubSetor): Promise<void>
    atualizarTelefoneSubSetor(subSetor:SubSetor): Promise<void>
    obterSubSetoresAtivos(): Promise<SubSetor[]>
    obterTodosSubSetores(): Promise<SubSetor[]>
}