
import { useEffect, useState } from "react";
import ColecaoEquipamento from '../backend/db/ColecaoEquipamemto'
import EquipamentoRepositorio from '../core/equipamento/EquipamentoRepositorio'

//hooks que busca no banco os equipamento que estão ativos e cria uma lista de equipamentos
export const useEquipamentos = () => {
    const repo:EquipamentoRepositorio = new ColecaoEquipamento()
    const [equipamentos,setEquipamentos]=useState([]);
    
    useEffect(carregaEquipamentos, [])

    function carregaEquipamentos(){
        repo.obterEquipamentosAtivos().then(response=>setEquipamentos(response))
        
    }
    
    return (equipamentos)
}