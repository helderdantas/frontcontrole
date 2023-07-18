import { useState } from "react";
import Controle from "../../core/controle/Controle";
import Botao from "../Botao";
import Entrada from "../Entrada";
import EntradaListaSetor from "../../components/areaAdm/setor/EntradaListaSetor"
import EntradaListaSubSetor from "../../components/areaAdm/subSetor/EntradaListaSubSetor"


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
    const [baia, setBaia] = useState(props.controle?.baia ?? '')
    const [cputombo, setCputombo] = useState(props.controle?.cputombo ?? '')
    const [cpunumeroserie, setCpunumeroserie] = useState(props.controle?.cpunumeroserie ?? '')
    const [monitor1tombo, setMonitor1tombo] = useState(props.controle?.monitor1tombo ?? '')
    const [monitor1numeroserie, setMonitor1numeroserie] = useState(props.controle?.monitor1numeroserie ?? '')
    const [monitor2tombo, setMonitor2tombo] = useState(props.controle?.monitor2tombo ?? '')
    const [monitor2numeroserie, setMonitor2numeroserie] = useState(props.controle?.monitor2numeroserie ?? '')
    const [impressora, setImpressora] = useState(props.controle?.impressora ?? '')
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
                <EntradaListaSetor
                    texto="Setor"
                    valor={setor.toUpperCase()}
                    valorMudou={setSetor}
                />
            )}


            {id ? (
                <Entrada
                    texto="subSetor"
                    valor={subsetor.toUpperCase()}
                    somenteLeitura
                />
            ) : (
                <EntradaListaSubSetor
                    texto="SubSetor"
                    setor={setor}
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
                texto="Est. Trabalho"
                valor={baia.toUpperCase()}
                valorMudou={setBaia}
            />
            <Entrada
                texto="Cpu-T"
                valor={cputombo.toUpperCase()}
                valorMudou={setCputombo}
            />

            <Entrada
                texto="CPU-NS"
                valor={cpunumeroserie.toUpperCase()}
                valorMudou={setCpunumeroserie}
            />

            <Entrada
                texto="Monitor1-T"
                valor={monitor1tombo.toUpperCase()}
                valorMudou={setMonitor1tombo}

            />

            <Entrada
                texto="Monitor1-NS"
                valor={monitor1numeroserie.toUpperCase()}
                valorMudou={setMonitor1numeroserie}

            />
            <Entrada
                texto="Monitor2-T"
                valor={monitor2tombo.toUpperCase()}
                valorMudou={setMonitor2tombo}

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
                texto="Observacao"
                valor={observacao.toUpperCase()}
                valorMudou={setObservacao}
            />


            <div className="mt-5 flex justify-end">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.controleMudou?.(new Controle(setor.toUpperCase(), subsetor.toUpperCase(), ilha.toUpperCase(), baia.toUpperCase(), cputombo.toUpperCase(), cpunumeroserie.toUpperCase(), monitor1tombo.toUpperCase(), monitor1numeroserie.toUpperCase(), monitor2tombo.toUpperCase(), monitor2numeroserie.toUpperCase(), impressora.toUpperCase(), observacao.toUpperCase(), id, createAt, updateAt))}>
                    {id ? 'Alterar' : 'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}