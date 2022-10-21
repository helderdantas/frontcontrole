
import { useEffect, useState } from "react";
import ColecaoSubSetor from '../backend/db/ColecaoSubSetor'
import SubSetorRepositorio from '../core/subSetor/SubSetorRepositorio'

//hooks que busca no banco os SubSetores que estão ativos e cria uma lista de SubSetores
export const useSubSetores = () => {
    const repo:SubSetorRepositorio = new ColecaoSubSetor()
    const [SubSetores,setSubSetores]=useState([]);
    
    useEffect(carregaSubSetores, [])

    function carregaSubSetores(){
        repo.obterSubSetoresAtivos().then(response=>setSubSetores(response))
        
    }
    
    return (SubSetores)
}