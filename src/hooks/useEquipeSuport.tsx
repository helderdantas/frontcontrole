
import { useEffect, useState } from "react";
import ColecaoEquipeSuport from '../backend/db/ColecaoEquipeSuport'
import EquipeSuportRepositorio from '../core/equipeSuport/EquipeSuportRepositorio'

//hooks que busca no banco o nome da equipe de suportes que estão ativos e cria uma lista de equipeSuport
export const useEquipeSuport = () => {
    const repo:EquipeSuportRepositorio = new ColecaoEquipeSuport()
    const [equipeSuports,setEquipeSuports]=useState([]);
    
    useEffect(carregaEquipeSuports, [])

    function carregaEquipeSuports(){
        repo.obterEquipeSuportAtivos().then(response=>setEquipeSuports(response))
        
    }
    
    return (equipeSuports)
}