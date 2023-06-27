import { useState } from "react";
import SubSetor from "../../../core/subSetor/SubSetor";
import Botao from "../../Botao";
import Entrada from "../../Entrada";

interface FormularioProps {
    subSetor: SubSetor
    subSetorMudou?: (subSetor: SubSetor) => void
    cancelado?: () => void

}



// Componete que criar o modelo de formulario
export default function Formulario(props: FormularioProps) {
    const id = props.subSetor?.id
    const ativo = props.subSetor?.ativo
    const createAt = props.subSetor?.createAt
    const updateAt = props.subSetor?.updateAt
    const [nome, setNome] = useState(props.subSetor?.nome ?? '')
    const [nomeSetor, setNomeSetor] = useState(props.subSetor?.nomesetor ?? '')
    const [telefone, setTelefone] = useState(props.subSetor?.telefone ?? null)
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
                    valor={nomeSetor.toUpperCase()}
                    somenteLeitura
                />

            ) : (
                <Entrada
                    texto="Setor"
                    valor={nomeSetor.toUpperCase()}
                    valorMudou={setNomeSetor}
                />
            )}

            <Entrada
                texto="Telefone"
                valor={telefone}
                valorMudou={setTelefone}
            />

            <div className="mt-5 flex justify-end">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.subSetorMudou?.(new SubSetor(ativo, nome.toUpperCase(), nomeSetor.toUpperCase(), telefone, id, createAt, updateAt))}>
                    {id ? 'Alterar' : 'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}