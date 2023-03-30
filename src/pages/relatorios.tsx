import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/controle/Formulario"
import Layout from "../components/Layout";
import Tabela from "../components/controle/Tabela";
import Controle from "../core/controle/Controle";
import ControleRepositorio from "../core/controle/ControleRepositorio";
import ColecaoControle from "../backend/db/ColecaoControle";
import Entrada from "../components/Entrada";
import Deslogar from "../components/Deslogar"
import { Col, Container, Row } from "react-bootstrap";



export default function Relatorio() {


    const repo: ControleRepositorio = new ColecaoControle()

    const [controle, setControle] = useState<Controle>(Controle.vazio())
    const [controles, setControles] = useState<Controle[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const [setor, setSetor] = useState("")
    const [subsetor, setSubsetor] = useState("")
    const [cpu, setCpu] = useState("")
    const [monitor1, setMonitor1] = useState("")
    const [monitor2, setMonitor2] = useState("")
    const [impressora, setImpressora] = useState("")



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

    // Metodo para filtar os controles por subsetor
    async function filtarPorSubsetor() {
        try {
            if (subsetor === '') {
                obterTodosContoles()
            } else {
                await repo.filtrarPorSubSetor(subsetor.toUpperCase()).then(controles => {
                    setControles(controles)
                    setVisivel('tabela')
                })
            }
        } catch (error) {
            console.log(error)
            obterTodosContoles()

        }


    }

    // Metodo para filtar os controles por setor
    async function filtarPorSetor() {
        try {

            if (setor === '') {
                obterTodosContoles()
            } else {
                await repo.filtrarPorSetor(setor.toUpperCase()).then(controles => {
                    setControles(controles)
                    setVisivel('tabela')
                })
            }
        } catch (error) {
            console.log(error)
            obterTodosContoles()

        }
    }

    // Metodo para filtar os controles por cpu
    async function filtarPorCpu() {
        try {
            console.log(cpu)

            if (cpu === '') {
                obterTodosContoles()
            } else {
                await repo.filtrarPorCpu(cpu.toUpperCase()).then(controles => {
                    setControles(controles)
                    setVisivel('tabela')
                })
            }
        } catch (error) {
            console.log(error)
            obterTodosContoles()

        }
    }

     // Metodo para filtar os controles por monitor1
     async function filtarPorMonitor1() {
        try {
            console.log(monitor1)

            if (monitor1 === '') {
                obterTodosContoles()
            } else {
                await repo.filtrarPorMonitor1(monitor1.toUpperCase()).then(controles => {
                    setControles(controles)
                    setVisivel('tabela')
                })
            }
        } catch (error) {
            console.log(error)
            obterTodosContoles()

        }
    }

     // Metodo para filtar os controles por monitor2
     async function filtarPorMonitor2() {
        try {
            console.log(monitor2)

            if (monitor2 === '') {
                obterTodosContoles()
            } else {
                await repo.filtrarPorMonitor2(monitor2.toUpperCase()).then(controles => {
                    setControles(controles)
                    setVisivel('tabela')
                })
            }
        } catch (error) {
            console.log(error)
            obterTodosContoles()

        }
    }
     // Metodo para filtar os controles por impressora
     async function filtarPorImpressora() {
        try {
            console.log(impressora)

            if (impressora === '') {
                obterTodosContoles()
            } else {
                await repo.filtrarPorImpressora(impressora.toUpperCase()).then(controles => {
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
                                <Botao className="mb-2 m-2">
                                    <a href="/home">Home</a>
                                </Botao>
                                <Botao onClick={Deslogar} className="bg-red-900 mb-2 m-2">
                                    Sair
                                </Botao>

                            </Row>
                            <Row className="flex">
                                <Col className="mx-3">
                                    <Row className="flex">
                                        <Entrada
                                            texto=""
                                            valor={setor.toUpperCase()}
                                            valorMudou={setSetor}
                                        />
                                        <Botao onClick={filtarPorSetor} className="mb-1 m-4 mx-1" >Setor</Botao>
                                    </Row>
                                </Col>
                                <Col className="mx-5">
                                    <Row className="flex">
                                        <Entrada
                                            texto=""
                                            valor={subsetor.toUpperCase()}
                                            valorMudou={setSubsetor}
                                        />
                                        <Botao onClick={filtarPorSubsetor} className="mb-1 m-4 mx-1">Subsetor</Botao>
                                    </Row>
                                </Col>
                                <Col className="mx-5">
                                    <Row className="flex">
                                        <Entrada
                                            texto=""
                                            valor={cpu.toUpperCase()}
                                            valorMudou={setCpu}
                                        />
                                        <Botao onClick={filtarPorCpu} className="mb-1 m-4 mx-1">CPU</Botao>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="flex">
                                <Col className="mx-3">
                                    <Row className="flex">
                                        <Entrada
                                            texto=""
                                            valor={monitor1.toUpperCase()}
                                            valorMudou={setMonitor1}
                                        />
                                        <Botao onClick={filtarPorMonitor1} className="mb-1 m-4 mx-1" >Monit_1</Botao>
                                    </Row>
                                </Col>
                                <Col className="mx-1">
                                    <Row className="flex">
                                        <Entrada
                                            texto=""
                                            valor={monitor2.toUpperCase()}
                                            valorMudou={setMonitor2}
                                        />
                                        <Botao onClick={filtarPorMonitor2} className="mb-1 m-4 mx-1">Monit_2</Botao>
                                    </Row>
                                </Col>
                                <Col className="mx-3">
                                    <Row className="flex">
                                        <Entrada
                                            texto=""
                                            valor={impressora.toUpperCase()}
                                            valorMudou={setImpressora}
                                        />
                                        <Botao onClick={filtarPorImpressora} className="mb-1 m-4 mx-1">Impressora</Botao>
                                    </Row>
                                </Col>
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