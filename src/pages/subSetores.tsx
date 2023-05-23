import { useEffect, useState } from "react";
import ColecaoSubSetor from "../backend/db/ColecaoSubSetor";
import Botao from "../components/Botao";
import Formulario from "../components/areaAdm/subSetor/Formulario"
import Layout from "../components/Layout";
import Tabela from "../components/areaAdm/subSetor/Tabela";
import SubSetor from "../core/subSetor/SubSetor"
import SubSetorRepositorio from "../core/subSetor/SubSetorRepositorio";
import Rota from "../components/Rota";

export default function SubSetores() {


    const repo: SubSetorRepositorio = new ColecaoSubSetor()

    const [subSetor, setSubSetor] = useState<SubSetor>(SubSetor.vazio())
    const [subSetores, setSubSetores] = useState<SubSetor[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


    /*
     useEffect(() => {
      setInterval(obterSubSetorsAbertos, 1000);}, [])
  
   */
    useEffect(obterSubSetoresAtivos, [])


    // Metodo que exibe na tabela todos os subSetors abertos
    function obterSubSetoresAtivos() {
        repo.obterSubSetoresAtivos().then(subSetores => {
            setSubSetores(subSetores)
            setVisivel('tabela')

        })
    }



    // Metodo que exibe no formulario os dados do subSetor selecionado
    function subSetorSelecionado(subSetor: SubSetor) {
        setSubSetor(subSetor)
        setVisivel('form')
    }
    // Metodo para finalizar subSetor
    async function subSetorFinalizado(subSetor: SubSetor) {
        await repo.finalizarSubSetor(subSetor)
        obterSubSetoresAtivos()
    }
    // Metodo para criar ou atualizar subSetor
    async function salvarSubSetor(subSetor: SubSetor) {

        if (subSetor.id) {
            await repo.atualizarTelefoneSubSetor(subSetor) // atualza telefone do subSetor existente
        } else {
            await repo.criarSubSetor(subSetor) // cria um novo subSetor
           
        }
        obterSubSetoresAtivos()
    }

    // Metodo que abre um formulario vazio para criar um novo subSetor
    function novoSubSetor() {
        setSubSetor(SubSetor.vazio())
        setVisivel('form')

    }
    /*

    // Metodo para listar todos os subSetors abertos e finalizados
    function listarTodosSubSetors() {
        repo.obterTodosSubSetors().then(subSetors => {
            setSubSetors(subSetors)
            setVisivel('tabela')
        })

    }
    */

    return (
        <div className={` flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
            <Layout titulo="SubSetores Ativos">
                {visivel === 'tabela' ? (
                    <>
                        <div className="mt-1 flex justify-end">

                            <Botao cor="blue" className="mb-3 m-2"
                                onClick={novoSubSetor}>
                                Novo subSetor
                            </Botao>
                            <Rota rota="home">Home</Rota>
                        </div>

                        <Tabela subSetors={subSetores}
                            subSetorSelecionado={subSetorSelecionado}
                            subSetorFinalizado={subSetorFinalizado}

                        />
                    </>
                ) : (

                    <Formulario
                        subSetor={subSetor}
                        subSetorMudou={salvarSubSetor}
                        cancelado={() => setVisivel('tabela')}

                    />
                )}
            </Layout>
        </div>

    )
}
