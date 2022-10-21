import { useEffect, useState } from "react";
import ColecaoEquipamento from "../../backend/db/ColecaoEquipamemto";
import Botao from "../../components/Botao";
import Formulario from "../../components/areaAdm/equipamento/Formulario"
import Layout from "../../components/Layout";
import Tabela from "../../components/areaAdm/equipamento/Tabela";
import Equipamento from "../../core/equipamento/Equipamento"
import EquipamentoRepositorio from "../../core/equipamento/EquipamentoRepositorio";

export default function Suport() {


    const repo:EquipamentoRepositorio = new ColecaoEquipamento()

    const [equipamento, setEquipamento] = useState<Equipamento>(Equipamento.vazio())
    const [equipamentos, setEquipamentos] = useState<Equipamento[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


    /*
     useEffect(() => {
      setInterval(obterEquipamentosAbertos, 1000);}, [])
  
   */
    useEffect(obterEquipamentosAtivos, [])


    // Metodo que exibe na tabela todos os equipamentos abertos
    function obterEquipamentosAtivos() {
        repo.obterEquipamentosAtivos().then(equipamentos => {
            setEquipamentos(equipamentos)
            setVisivel('tabela')

        })
    }



    // Metodo que exibe no formulario os dados do equipamento selecionado
    function equipamentoSelecionado(equipamento: Equipamento) {
        setEquipamento(equipamento)
        setVisivel('form')
    }
    // Metodo para finalizar equipamento
    async function equipamentoFinalizado(equipamento: Equipamento) {
        await repo.finalizarEquipamento(equipamento)
        obterEquipamentosAtivos()
    }
    // Metodo para criar ou atualizar equipamento
    async function salvarEquipamento(equipamento: Equipamento) {
        await repo.criarEquipamento(equipamento) // cria um novo equipamento
        obterEquipamentosAtivos()
    }

    // Metodo que abre um formulario vazio para criar um novo equipamento
    function novoEquipamento() {
        setEquipamento(Equipamento.vazio())
        setVisivel('form')

    }
    /*

    // Metodo para listar todos os equipamentos abertos e finalizados
    function listarTodosEquipamentos() {
        repo.obterTodosEquipamentos().then(equipamentos => {
            setEquipamentos(equipamentos)
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
                <Layout titulo="Equipamentos Ativos">
                    {visivel === 'tabela' ? (
                        <>
                            <div className="mt-5 flex justify-end">


                                <Botao cor="blue" className="mb-3 m-2"
                                    onClick={novoEquipamento}>
                                    Novo equipamento
                                </Botao>

                                <Botao cor="blue" className="mb-3 m-2">
                                    <a href="/suport">Suport</a>
                                </Botao>

                            </div>

                            <Tabela equipamentos={equipamentos}
                                equipamentoFinalizado={equipamentoFinalizado}

                            />
                        </>
                    ) : (

                        <Formulario
                            equipamento={equipamento}
                            equipamentoMudou={salvarEquipamento}
                            cancelado={() => setVisivel('tabela')}

                        />
                    )}
                </Layout>

            </div>
        </>
    )
}
