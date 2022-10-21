import { useEffect, useState } from "react";
import ColecaoEquipeSuport from "../../backend/db/ColecaoEquipeSuport";
import Botao from "../../components/Botao";
import Formulario from "../../components/areaAdm/equipeSuport/Formulario"
import Layout from "../../components/Layout";
import Tabela from "../../components/areaAdm/equipeSuport/Tabela";
import EquipeSuport from "../../core/equipeSuport/EquipeSuport"
import EquipeSuportRepositorio from "../../core/equipeSuport/EquipeSuportRepositorio";

export default function Suport() {


    const repo:EquipeSuportRepositorio = new ColecaoEquipeSuport()

    const [equipeSuport, setEquipeSuport] = useState<EquipeSuport>(EquipeSuport.vazio())
    const [equipeSuports, setEquipeSuports] = useState<EquipeSuport[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


    /*
     useEffect(() => {
      setInterval(obterEquipeSuportsAbertos, 1000);}, [])
  
   */
    useEffect(obterEquipeSuportAtivos, [])


    // Metodo que exibe na tabela todos os equipeSuports abertos
    function obterEquipeSuportAtivos() {
        repo.obterEquipeSuportAtivos().then(equipeSuports => {
            setEquipeSuports(equipeSuports)
            setVisivel('tabela')

        })
    }



    // Metodo que exibe no formulario os dados do equipeSuport selecionado
    function equipeSuportSelecionado(equipeSuport: EquipeSuport) {
        setEquipeSuport(equipeSuport)
        setVisivel('form')
    }
    // Metodo para finalizar equipeSuport
    async function equipeSuportFinalizado(equipeSuport: EquipeSuport) {
        await repo.finalizarEquipeSuport(equipeSuport)
        obterEquipeSuportAtivos()
    }
    // Metodo para criar ou atualizar equipeSuport
    async function salvarEquipeSuport(equipeSuport: EquipeSuport) {
        await repo.criarEquipeSuport(equipeSuport) // cria um novo equipeSuport
        obterEquipeSuportAtivos()
    }

    // Metodo que abre um formulario vazio para criar um novo equipeSuport
    function novoEquipeSuport() {
        setEquipeSuport(EquipeSuport.vazio())
        setVisivel('form')

    }
    /*

    // Metodo para listar todos os equipeSuports abertos e finalizados
    function listarTodosEquipeSuports() {
        repo.obterTodosEquipeSuports().then(equipeSuports => {
            setEquipeSuports(equipeSuports)
            setVisivel('tabela')
        })

    }
    */

    return (
        <>
            <div className={`
    flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
                <Layout titulo="Equipe de Suport Ativos">
                    {visivel === 'tabela' ? (
                        <>
                            <div className="mt-5 flex justify-end">


                                <Botao cor="blue" className="mb-3 m-2"
                                    onClick={novoEquipeSuport}>
                                    Novo equipeSuport
                                </Botao>
                                <Botao cor="blue" className="mb-3 m-2">
                                    <a href="/suport">Suport</a>
                                </Botao>

                            </div>

                            <Tabela equipeSuports={equipeSuports}
                                equipeSuportFinalizado={equipeSuportFinalizado}

                            />
                        </>
                    ) : (

                        <Formulario
                            equipeSuport={equipeSuport}
                            equipeSuportMudou={salvarEquipeSuport}
                            cancelado={() => setVisivel('tabela')}

                        />
                    )}
                </Layout>

            </div>
        </>
    )
}
