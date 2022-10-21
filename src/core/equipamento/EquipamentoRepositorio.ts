import Equipamento from "./Equipamento";

export default interface EquipamentoRepositorio{
    criarEquipamento(equipamento: Equipamento): Promise<Equipamento>
    finalizarEquipamento(equipamento: Equipamento): Promise<void>
    obterEquipamentosAtivos(): Promise<Equipamento[]>
    obterTodosEquipamentos(): Promise<Equipamento[]>
}