
import { useEffect, useState } from "react";
import ColecaoSetor from '../backend/db/ColecaoSetor'
import SetorRepositorio from '../core/setor/SetorRepositorio'

//hooks que busca no banco os setores que estão ativos e cria uma lista de setores
export const useSetores = () => {
    const repo:SetorRepositorio = new ColecaoSetor()
    const [setores,setSetores]=useState([]);
    
    useEffect(carregaSetores, [])

    function carregaSetores(){
        repo.obterSetoresAtivos().then(response=>setSetores(response))
        
    }
    
    return (setores)
}