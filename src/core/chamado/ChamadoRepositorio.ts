import Chamado from "./Chamado";

export default interface ChamadoRepositorio{
    criarChamado(chamado: Chamado): Promise<Chamado>
    atualizarChamado(chamado: Chamado): Promise<void>
    finalizarChamado(chamado: Chamado): Promise<void>
    obterChamadosAbertos(): Promise<Chamado[]>
    obterTodosChamados(): Promise<Chamado[]>
    chamadosPorSetor(nome: string, dataInicial:string, dataFinal:string): Promise<{}>
    chamadosPorSuport(nome: string, dataInicial:string, dataFinal:string): Promise<{}>
    chamadosPorTipoEquipamento(nome: string, dataInicial:string, dataFinal:string): Promise<{}>
}