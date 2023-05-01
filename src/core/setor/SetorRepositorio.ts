import Setor from "./Setor";

export default interface SetorRepositorio{
    criarSetor(setor: Setor): Promise<Setor>
    finalizarSetor(setor: Setor): Promise<void>
    atualizarTelefoneSetor(setor:Setor): Promise<void>
    obterSetoresAtivos(): Promise<Setor[]>
    obterTodosSetores(): Promise<Setor[]>
}