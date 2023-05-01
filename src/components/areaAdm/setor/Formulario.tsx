import { useState } from "react";
import Setor from "../../../core/setor/Setor";
import Botao from "../../Botao";
import Entrada from "../../Entrada";

interface FormularioProps {
    setor: Setor
    setorMudou?: (setor: Setor) => void
    cancelado?: () => void

}



// Componete que criar o modelo de formulario
export default function Formulario(props: FormularioProps) {
    const id = props.setor?.id
    const ativo = props.setor?.ativo
    const createAt = props.setor?.createAt
    const updateAt = props.setor?.updateAt
    const [nome, setNome] = useState(props.setor?.nome ?? '')
    const [telefone, setTelefone] = useState(props.setor?.telefone ?? null)
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
            <Entrada
                texto="Telefone"
                valor={telefone}
                valorMudou={setTelefone}
            />

            <div className="mt-5 flex justify-end">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.setorMudou?.(new Setor(ativo, nome.toUpperCase(), telefone, id, createAt, updateAt))}>
                    {id ? 'Alterar' : 'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}