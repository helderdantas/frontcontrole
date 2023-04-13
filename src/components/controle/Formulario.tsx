import { useState } from "react";
import Controle from "../../core/controle/Controle";
import Botao from "../Botao";
import Entrada from "../Entrada";


interface FormularioProps {
    controle: Controle
    controleMudou?: (controle: Controle) => void
    cancelado?: () => void

}


// Componete que criar o modelo de formulario
export default function Formulario(props: FormularioProps) {
    const id = props.controle?.id
    const createAt = props.controle?.createAt
    const updateAt = props.controle?.updateAt
    const [setor, setSetor] = useState(props.controle?.setor ?? '')
    const [subsetor, setSubsetor] = useState(props.controle?.subsetor ?? '')
    const [ilha, setIlha] = useState(props.controle?.ilha ?? '')
    const [cpu, setCpu] = useState(props.controle?.cpu ?? '')
    const [cpunumeroserie, setCpunumeroserie] = useState(props.controle?.cpunumeroserie ?? '')
    const [monitor1, setMonitor1] = useState(props.controle?.monitor1 ?? '')
    const [monitor1numeroserie, setMonitor1numeroserie] = useState(props.controle?.monitor1numeroserie ?? '')
    const [monitor2, setMonitor2] = useState(props.controle?.monitor2 ?? '')
    const [monitor2numeroserie, setMonitor2numeroserie] = useState(props.controle?.monitor2numeroserie ?? '')
    const [impressora, setImpressora] = useState(props.controle?.impressora ?? '')
    const [telefone, setTelefone] = useState(props.controle?.telefone ?? '')
    const [observacao, setObservacao] = useState(props.controle?.observacao ?? null)


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
                    texto="Setor"
                    valor={setor.toUpperCase()}
                    somenteLeitura
                />

            ) : (
                <Entrada
                    texto="Setor"
                    valor={setor.toUpperCase()}
                    valorMudou={setSetor}
                />

            )}


            {id ? (
                <Entrada
                    texto="subsetor"
                    valor={subsetor.toUpperCase()}
                    somenteLeitura
                />
            ) : (
                <Entrada
                    texto="Subsetor"
                    valor={subsetor.toUpperCase()}
                    valorMudou={setSubsetor}
                />
            )}


            <Entrada
                texto="Ilha"
                valor={ilha.toUpperCase()}
                valorMudou={setIlha}
            />

            <Entrada
                texto="Cpu"
                valor={cpu.toUpperCase()}
                valorMudou={setCpu}
            />

            <Entrada
                texto="CPU-NS"
                valor={cpunumeroserie.toUpperCase()}
                valorMudou={setCpunumeroserie}
            />

            <Entrada
                texto="Monitor1"
                valor={monitor1.toUpperCase()}
                valorMudou={setMonitor1}

            />

            <Entrada
                texto="Monitor1-NS"
                valor={monitor1numeroserie.toUpperCase()}
                valorMudou={setMonitor1numeroserie}

            />
            <Entrada
                texto="Monitor2"
                valor={monitor2.toUpperCase()}
                valorMudou={setMonitor2}

            />

            <Entrada
                texto="Monitor2-NS"
                valor={monitor2numeroserie.toUpperCase()}
                valorMudou={setMonitor2numeroserie}

            />

            <Entrada
                texto="Impressora"
                valor={impressora.toUpperCase()}
                valorMudou={setImpressora}

            />
            <Entrada
                texto="Telefonne"
                valor={telefone.toUpperCase()}
                valorMudou={setTelefone}

            />

            <Entrada
                texto="Observacao"
                valor={observacao.toUpperCase()}
                valorMudou={setObservacao}
            />


            <div className="mt-5 flex justify-end">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.controleMudou?.(new Controle(setor.toUpperCase(), subsetor.toUpperCase(), ilha.toUpperCase(), cpu.toUpperCase(), cpunumeroserie.toUpperCase(), monitor1.toUpperCase(), monitor1numeroserie.toUpperCase(), monitor2.toUpperCase(), monitor2numeroserie.toUpperCase(), impressora.toUpperCase(), telefone, observacao.toUpperCase(), id, createAt, updateAt))}>
                    {id ? 'Alterar' : 'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}