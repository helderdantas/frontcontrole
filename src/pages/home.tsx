import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/controle/Formulario"
import Layout from "../components/Layout";
import Tabela from "../components/controle/Tabela";
import Controle from "../core/controle/Controle";
import ControleRepositorio from "../core/controle/ControleRepositorio";
import ColecaoControle from "../backend/db/ColecaoControle";
import Deslogar from "../components/Deslogar";
import { Row } from "react-bootstrap";


import Rota from "../components/Rota";


export default function Home() {


  const repo: ControleRepositorio = new ColecaoControle()

  const [controle, setControle] = useState<Controle>(Controle.vazio())
  const [controles, setControles] = useState<Controle[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')



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

  // Metodo que abre um formulario vazio para criar um novo controle
  function novoControle() {
    setControle(Controle.vazio())
    setVisivel('form')

  }

 /* const rota = (valor:string) => {
      
   return Router.push(`/${valor}`);
  }
  */

  return (
    <>

      <div className={`
    flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
        <Layout titulo="Controle">

          {visivel === 'tabela' ? (
            <>
              <div className="flex justify-end">
                <Row>
                <Botao className="mb-3 m-2"
                  onClick={novoControle}>
                  Novo controle
                </Botao>
                <Rota rota="usuarios">Usuarios</Rota>
                <Rota rota="setores">Setores</Rota>
                <Rota rota="subSetores">SubSetores</Rota>
                <Rota rota="relatorios">Relátorios</Rota>

                <Botao className="bg-red-800 mb-3 m-2"
                  onClick={Deslogar}>
                  Sair
                </Botao>
                </Row>
              </div>
              

              <Tabela controles={controles}
                controleSelecionado={controleSelecionado}
                controleDeletado={controleDeletado}
              />
            </>
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
