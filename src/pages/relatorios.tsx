import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/controle/Formulario"
import Layout from "../components/Layout";
import Tabela from "../components/controle/Tabela";
import Controle from "../core/controle/Controle";
import ControleRepositorio from "../core/controle/ControleRepositorio";
import ColecaoControle from "../backend/db/ColecaoControle";
import Entrada from "../components/Entrada";
import EntradaListarCamposTabela from "../components/relatorio/EntradaListarCamposTabela";
import Deslogar from "../components/Deslogar"
import { Col, Container, Row } from "react-bootstrap";
import Rota from "../components/Rota";



export default function Relatorio() {


    const repo: ControleRepositorio = new ColecaoControle()

    const [controle, setControle] = useState<Controle>(Controle.vazio())
    const [controles, setControles] = useState<Controle[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
   // const [setor, setSetor] = useState("")
   // const [subsetor, setSubsetor] = useState("")
   // const [cputombo, setCputombo] = useState("")
   // const [monitor1tombo, setMonitor1tombo] = useState("")
   // const [monitor2tombo, setMonitor2tombo] = useState("")
   // const [impressora, setImpressora] = useState("")
    const [dado, setDado] = useState("")
    const [campo, setCampo] = useState("")



    useEffect(obterTodosContoles, [])

    // Metodo que exibe na tabela todos os controles existentes
    function obterTodosContoles() {
        repo.obterTodosControles().then(controles => {
            setControles(controles)
            setVisivel('tabela')
        })
    }

    // Metodo para criar ou atualizar chamado
    function controleSelecionado(controle: Controle) {
        setControle(controle)
        setVisivel('form')

    }
    async function controleDeletado(controle: Controle) {
        await repo.deletarControle(controle)
        obterTodosContoles()
    }


    // Metodo para criar ou atualizar controle
    async function salvarControle(controle: Controle) {
        if (controle.id) {
            await repo.atualizarControle(controle) // atualza controle existente
        } else {
            await repo.criarControle(controle) // cria um novo controle
        }
        obterTodosContoles()
    }

    // Metodo para filtar os controles por setor
    async function filtroGenerico() {
        try {
            if (campo === '') {

                obterTodosContoles()
            } else {
                console.log('entrei no else')

                const filtro = eval(`repo.filtrarPor${campo}`)

                await filtro(dado.toUpperCase()).then(controles => {
                    setControles(controles)

                    setVisivel('tabela')
                })
            }
        } catch (error) {
            console.log(error)
            obterTodosContoles()

        }
    }
    return (
        <>

            <div className={`
    flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
                <Layout titulo="Relatórios">

                    {visivel === 'tabela' ? (
                        <Container>
                            <Row className="flex justify-end">
                                <Rota rota="home">Home</Rota>
                                <Botao onClick={Deslogar} className="bg-red-800 mb-2 m-2">
                                    Sair
                                </Botao>

                            </Row>

                            <Row className="flex jutify-start">


                                <EntradaListarCamposTabela
                                    texto="Selecione o campo"
                                    valor={campo.toUpperCase()}
                                    valorMudou={setCampo}

                                />

                                <Entrada
                                    texto="Informe o valor"
                                    valor={dado.toUpperCase()}
                                    valorMudou={setDado}
                                />

                                <Botao onClick={filtroGenerico} className="mb-3 m-2 mt-10">Buscar</Botao>

                            </Row>
                            <Row>

                                <Tabela controles={controles}
                                    controleSelecionado={controleSelecionado}
                                    controleDeletado={controleDeletado}
                                />
                            </Row>

                        </Container>

                    ) : (

                        <Formulario
                            controle={controle}
                            controleMudou={salvarControle}
                            cancelado={() => setVisivel('tabela')}

                        />
                    )}
                </Layout>

            </div>
        </>
    )
}