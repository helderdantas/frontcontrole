import Controle from "./Controle";

export default interface ControleRepositorio{
    criarControle(controle: Controle): Promise<Controle>
    atualizarControle(controle: Controle): Promise<void>
    deletarControle(controle: Controle): Promise<void>
    obterTodosControles(): Promise<Controle[]>
    obterControleControlePorId(controle: Controle): Promise<Controle>
    filtrarPorSetor(nomeSetor: string): Promise<Controle[]>
    filtrarPorSubSetor(nomeSubSetor: string): Promise<Controle[]>
    filtrarPorCpuTombo(cputombo: string): Promise<Controle[]>
    filtrarPorCpuNumeroSerie(cpuNumeroSerie: string): Promise<Controle[]>
    filtrarPorMonitor1Tombo(monitor1tombo: string): Promise<Controle[]>
    filtrarPorMonitor1NumeroSerie(monitor1NumeroSerie: string): Promise<Controle[]>
    filtrarPorMonitor2Tombo(monitor2tombo: string): Promise<Controle[]>
    filtrarPorMonitor2NumeroSerie(monitor2NumeroSerie: string): Promise<Controle[]>
    filtrarPorImpressora(impressora: string): Promise<Controle[]>
    filtrarPorObservacao(valor: string): Promise<Controle[]>
    
}