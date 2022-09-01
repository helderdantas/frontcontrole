import { useEffect, useState } from "react";
import ColecaoChamado from "../backend/db/ColecaoChamado";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario"
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Chamado from "../core/chamado/Chamado";
import ChamadoRepositorio from "../core/chamado/ChamadoRepositorio";


export default function Home() {


  const repo: ChamadoRepositorio = new ColecaoChamado()

  const [chamado, setChamado] = useState<Chamado>(Chamado.vazio())
  const [chamados, setChamados] = useState<Chamado[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  

  useEffect(obterChamadosAbertos, [])

  // Metodo que exibe na tabela todos os chamados abertos
  function obterChamadosAbertos() {
    repo.obterChamadosAbertos().then(chamados => {
      setChamados(chamados)
      setVisivel('tabela')
    })
  }
/*
  // Metodo para criar ou atualizar chamado
  function chamadoSelecionado(chamado: Chamado) {
    setChamado(chamado)
    setVisivel('form')
     
  }
  function chamadoFinalizado(chamado: Chamado) {
    repo.finalizarChamado(chamado)
    obterChamadosAbertos()
  }

*/
  // Metodo para criar ou atualizar chamado
  async function salvarChamado(chamado: Chamado) {
    if (chamado.id) {
      await repo.atualizarChamado(chamado) // atualza chamado existente
    } else {
      await repo.criarChamado(chamado) // cria um novo chamado
    }
    obterChamadosAbertos()
  }

  // Metodo que abre um formulario vazio para criar um novo chamado
  function novoChamado() {
    setChamado(Chamado.vazio())
    setVisivel('form')

  }

  return (
    <div className={`
    flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
      <Layout titulo="CHAMADOS">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor = "blue" className="mb-3"
                onClick={novoChamado}>
                Novo chamado
              </Botao>
            </div>
          
            <Tabela chamados={chamados}
          //  chamadoSelecionado={chamadoSelecionado}
          //  chamadoFinalizado={chamadoFinalizado}
            />
          </>
        ) : (
            
            <Formulario
            chamado={chamado}
            chamadoMudou={salvarChamado}
            cancelado={() => setVisivel('tabela')}

          />
        )}
      </Layout>

    </div>
  )
}
