
import { useEffect, useState } from "react";
import ColecaoUser from '../backend/db/ColecaoUser'
import UserRepositorio from '../core/user/UserRepositorio'

//hooks que busca no banco os SubSetores que estão ativos e cria uma lista de SubSetores
export const useUsers = () => {
    const repo:UserRepositorio = new ColecaoUser()
    const [users,setUsers]=useState([]);
    
    useEffect(carregaUsers, [])

    function carregaUsers(){
        repo.obterTodosUsers().then(response=>setUsers(response))
        
    }
    
    return (users)
}