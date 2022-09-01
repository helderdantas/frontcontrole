import { useState } from "react";
import EquipeSuport from "../../../core/equipeSuport/EquipeSuport";
import Botao from "../../Botao";
import Entrada from "../../Entrada";

interface FormularioProps {
    equipeSuport: EquipeSuport
    equipeSuportMudou?: (equipeSuport: EquipeSuport) => void
    cancelado?: () => void

}



// Componete que criar o modelo de formulario
export default function Formulario(props: FormularioProps) {
    const id = props.equipeSuport?.id
    const ativo = props.equipeSuport?.ativo
    const createAt = props.equipeSuport?.createAt
    const updateAt = props.equipeSuport?.updateAt
    const [nome, setNome] = useState(props.equipeSuport?.nome ?? '')
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

            <div className="mt-5 flex justify-end">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.equipeSuportMudou?.(new EquipeSuport(ativo, nome.toUpperCase(), id, createAt, updateAt))}>
                    {id ? 'Alterar' : 'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}