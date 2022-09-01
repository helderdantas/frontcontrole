import { useState } from "react";
import Equipamento from "../../../core/equipamento/Equipamento";
import Botao from "../../Botao";
import Entrada from "../../Entrada";

interface FormularioProps {
    equipamento: Equipamento
    equipamentoMudou?: (equipamento: Equipamento) => void
    cancelado?: () => void

}



// Componete que criar o modelo de formulario
export default function Formulario(props: FormularioProps) {
    const id = props.equipamento?.id
    const ativo = props.equipamento?.ativo
    const createAt = props.equipamento?.createAt
    const updateAt = props.equipamento?.updateAt
    const [nome, setNome] = useState(props.equipamento?.nome ?? '')
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
                    onClick={() => props.equipamentoMudou?.(new Equipamento(ativo, nome.toUpperCase(), id, createAt, updateAt))}>
                    {id ? 'Alterar' : 'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}