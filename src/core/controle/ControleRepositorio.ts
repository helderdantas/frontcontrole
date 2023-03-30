import Controle from "./Controle";

export default interface ControleRepositorio{
    criarControle(controle: Controle): Promise<Controle>
    atualizarControle(controle: Controle): Promise<void>
    deletarControle(controle: Controle): Promise<void>
    obterTodosControles(): Promise<Controle[]>
    obterControleControlePorId(controle: Controle): Promise<Controle>
    filtrarPorSetor(nomeSetor: string): Promise<Controle[]>
    filtrarPorSubSetor(nomeSubSetor: string): Promise<Controle[]>
    filtrarPorCpu(cpu: string): Promise<Controle[]>
    filtrarPorMonitor1(monitor1: string): Promise<Controle[]>
    filtrarPorMonitor2(monitor2: string): Promise<Controle[]>
    filtrarPorImpressora(impressora: string): Promise<Controle[]>
    
}