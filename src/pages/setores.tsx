import { useEffect, useState } from "react";
import ColecaoSetor from "../backend/db/ColecaoSetor";
import Botao from "../components/Botao";
import Formulario from "../components/areaAdm/setor/Formulario"
import Layout from "../components/Layout";
import Tabela from "../components/areaAdm/setor/Tabela";
import Setor from "../core/setor/Setor"
import SetorRepositorio from "../core/setor/SetorRepositorio";
import Rota from "../components/Rota";

export default function Setores() {


    const repo: SetorRepositorio = new ColecaoSetor()

    const [setor, setSetor] = useState<Setor>(Setor.vazio())
    const [setores, setSetores] = useState<Setor[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


    /*
     useEffect(() => {
      setInterval(obterSetorsAbertos, 1000);}, [])
  
   */
    useEffect(obterSetoresAtivos, [])


    // Metodo que exibe na tabela todos os setors abertos
    function obterSetoresAtivos() {
        repo.obterSetoresAtivos().then(setors => {
            setSetores(setors)
            setVisivel('tabela')

        })
    }



    // Metodo que exibe no formulario os dados do setor selecionado
    function setorSelecionado(setor: Setor) {
        setSetor(setor)
        setVisivel('form')
    }
    // Metodo para finalizar setor
    async function setorFinalizado(setor: Setor) {
        await repo.finalizarSetor(setor)
        obterSetoresAtivos()
    }
    // Metodo para criar ou atualizar setor
    async function salvarSetor(setor: Setor) {
        if (setor.id) {
            console.log(setor)
            await repo.atualizarTelefoneSetor(setor) // atualiza telefone do setor existente
        } else {
            console.log("entrei na rota criarsetor")
            console.log(setor)
            await repo.criarSetor(setor) // cria um novo setor

        }
        obterSetoresAtivos()
    }

    // Metodo que abre um formulario vazio para criar um novo setor
    function novoSetor() {

        console.log("entrei na rota novosetor")
        setSetor(Setor.vazio())
        setVisivel('form')

    }
   
    return (
        <>
            <div className={`
    flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
                <Layout titulo="Setores Ativos">
                    {visivel === 'tabela' ? (
                        <>
                            <div className="mt-1 flex justify-end">


                                <Botao cor="blue" className="mb-3 m-2"
                                    onClick={novoSetor}>
                                    Novo setor
                                </Botao>
                                <Rota rota="home">Home</Rota>

                            </div>

                            <Tabela setores={setores}
                                setorSelecionado={setorSelecionado}
                                setorFinalizado={setorFinalizado}

                            />
                        </>
                    ) : (

                        <Formulario
                            setor={setor}
                            setorMudou={salvarSetor}
                            cancelado={() => setVisivel('tabela')}

                        />
                    )}
                </Layout>

            </div>
        </>
    )
}
