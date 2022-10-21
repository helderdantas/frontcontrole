import { useState } from "react";
import Chamado from "../core/chamado/Chamado";
import Botao from "./Botao";
import Entrada from "./Entrada";
import EntradaListaEquipamento from "./EntradaListaEquipamento"
import EntradaListaSuporte from "./EntradaListaEquipeSuport";
import EntradaListaSetor from "./EntradaListaSetor";
import EntradaListaSubSetor from "./EntradaListaSubSetor";
import EntradaListaStatus from "./EntradaListaStatus";


interface FormularioProps {
    chamado: Chamado
    chamadoMudou?: (chamado: Chamado) => void
    cancelado?: () => void

}


// Componete que criar o modelo de formulario
export default function Formulario(props: FormularioProps) {
    const id = props.chamado?.id
    const aberto = props.chamado?.aberto
    const createAt = props.chamado?.createAt
    const updateAt = props.chamado?.updateAt
    const [nome, setNome] = useState(props.chamado?.nome ?? '')
    const [setor, setSetor] = useState(props.chamado?.setor ?? '')
    const [subSetor, setSubSetor] = useState(props.chamado?.subSetor ?? '')
    const [equipamentoComDefeito, setEquipamentoComDefeito] = useState(props.chamado?.equipamentoComDefeito ?? '')
    const [equipamentoTombo, setEquipamentoTombo] = useState(props.chamado?.equipamentoTombo ?? '')
    const [descricao, setDescicao] = useState(props.chamado?.descricao ?? '')
    const [equipeSuport, setEquipeSuport] = useState(props.chamado?.equipeSuport ?? '')
    const [status, setStatus] = useState(props.chamado?.status ?? '')
    const [observacao, setObservacao] = useState(props.chamado?.observacao ?? null)


    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                />
            ) : false}

            {id ? (
                <Entrada
                    texto="Nome"
                    valor={nome.toUpperCase()}
                    somenteLeitura
                />

            ) : (
                <Entrada
                    texto="Nome"
                    valor={nome.toUpperCase()}
                    valorMudou={setNome}
                />

            )}

            {id ? (
                <Entrada
                    texto="Setor"
                    valor={setor.toUpperCase()}
                    somenteLeitura
                />

            ) : (
                <EntradaListaSetor
                    texto="Setor"
                    valor={setor.toUpperCase()}
                    valorMudou={setSetor}
                />
            )}


            {id ? (
                <Entrada
                    texto="sub-Setor"
                    valor={subSetor.toUpperCase()}
                    somenteLeitura
                />
            ) : (
                <EntradaListaSubSetor
                    texto="Sub-Setor"
                    setor={setor}
                    valor={subSetor.toUpperCase()}
                    valorMudou={setSubSetor}
                />
            )}


            {id ? (
                <Entrada
                    texto="Equipamento com defeito"
                    valor={equipamentoComDefeito.toUpperCase()}
                    somenteLeitura

                />
            ) : (
                <EntradaListaEquipamento
                    texto="Equipamento com defeito"
                    valor={equipamentoComDefeito.toUpperCase()}
                    valorMudou={setEquipamentoComDefeito}


                />
            )}
            <Entrada
                texto="Tombo do Equipamento"
                valor={equipamentoTombo.toUpperCase()}
                valorMudou={setEquipamentoTombo}

            />
            {id ? (
                <Entrada
                    texto="Descrição"
                    valor={descricao.toUpperCase()}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Descrição"
                    valor={descricao.toUpperCase()}
                    valorMudou={setDescicao}

                />
            )}

            <EntradaListaSuporte
                texto="Nome do suport"
                valor={equipeSuport.toUpperCase()}
                valorMudou={setEquipeSuport}

            />
            {id ? (
                <EntradaListaStatus
                    texto="Status"
                    valor={status.toUpperCase()}
                    valorMudou={setStatus}
                />
            ) : false}
            {!id ? (
                <Entrada
                    texto="Observacao"
                    valor={observacao.toUpperCase()}
                    somenteLeitura

                />

            ) : (
                <Entrada
                    texto="Observacao"
                    valor={observacao.toUpperCase()}
                    valorMudou={setObservacao}

                />

            )}

            <div className="mt-5 flex justify-end">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.chamadoMudou?.(new Chamado(aberto, nome.toUpperCase(), setor.toUpperCase(), subSetor.toUpperCase(), equipamentoComDefeito.toUpperCase(), equipamentoTombo.toUpperCase(), descricao.toUpperCase(), equipeSuport.toUpperCase(), status, observacao.toUpperCase(), id, createAt, updateAt))}>
                    {id ? 'Alterar' : 'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}