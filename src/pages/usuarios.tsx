import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/areaAdm/user/Formulario"
import Layout from "../components/Layout";
import Tabela from "../components/areaAdm/user/Tabela";
import User from "../core/user/User";
import UserRepositorio from "../core/user/UserRepositorio";
import ColecaoUser from "../backend/db/ColecaoUser";
import Deslogar from "../components/Deslogar";
import Rota from "../components/Rota";


export default function Usuarios() {


    const repo: UserRepositorio = new ColecaoUser()

    const [user, setUser] = useState<User>(User.vazio())
    const [users, setUsers] = useState<User[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')



    useEffect(obterTodosUsers, [])

    // Metodo que exibe na tabela todos os users existentes
    function obterTodosUsers() {
        repo.obterTodosUsers().then(users => {
            setUsers(users)
            setVisivel('tabela')
        })
    }

    // Metodo para criar ou atualizar user
    function userSelecionado(user: User) {
        setUser(user)
        setVisivel('form')

    }
    async function userDeletado(user: User) {
        await repo.deletarUser(user)
        obterTodosUsers()
    }


    // Metodo para criar ou atualizar user
    async function salvarUser(user: User) {
        if (user.id) {
            const atualizarUser=await repo.atualizarUser(user) // atualza user existente
            // Se retornar undefined é porque o usuario foi atualizado, caso contrário retorna a mensagem de erro.
            if(atualizarUser === undefined){
                alert("Usuário atualizado com sucesso")
            }else{
            alert(atualizarUser)
            }

        } else {
            const novoUser = await repo.criarUser(user) // cria um novo user
            
            // Se retornar um objeto é sinal que o usuario foi criado, caso contrário retorna a mensagem de erro.
            if (novoUser instanceof Object) {
                alert("usuario cadastrado com sucesso")
            
            } else {
                alert(novoUser)
            }

        }
        obterTodosUsers()
    }

    // Metodo que abre um formulario vazio para criar um novo user
    function novoUser() {
        setUser(User.vazio())
        setVisivel('form')

    }

    return (
        <>

            <div className={`
    flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
                <Layout titulo="Usuários">

                    {visivel === 'tabela' ? (
                        <>
                            <div className="flex justify-end">
                            <Rota rota="home">Home</Rota>
                                <Botao className="mb-3 m-2"
                                    onClick={novoUser}>
                                    Cadastrar Usuário
                                </Botao>
                                <Botao className="bg-red-900 mb-3 m-2"
                                    onClick={Deslogar}>
                                    Sair
                                </Botao>
                            </div>

                            <Tabela users={users}
                                userSelecionado={userSelecionado}
                                userDeletado={userDeletado}
                            />
                        </>
                    ) : (

                        <Formulario
                            user={user}
                            userMudou={salvarUser}
                            cancelado={() => setVisivel('tabela')}

                        />
                    )}
                </Layout>

            </div>
        </>
    )
}