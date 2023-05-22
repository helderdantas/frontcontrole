import { Alert } from "react-bootstrap";
import Controle from "../../core/controle/Controle"
import { IconeEdicao, IconeDeletar } from "../Icones"

import QRCode from "react-qr-code";

interface TabelaProps {
    controles: Controle[]
    controleSelecionado?: (controle: Controle) => void
    controleDeletado?: (controle: Controle) => void

}

// Componente que criar o modelo de tabela
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.controleSelecionado || props.controleDeletado

    // Renderiza o cabelcaho nas pagina onde ele é controle
    function renderizarCabecalho() {
        return (
            <tr className="flex-wrap">
                <th className="text-left p-1 text-xs">Setor</th>
                <th className="text-left p-1 text-xs">SubSetor</th>
                <th className="text-left p-1 text-xs">Ilha</th>
                <th className="text-left p-1 text-xs">Est. Trabalho</th>
                <th className="text-left p-1 text-xs">Cpu-T</th>
                <th className="text-left p-1 text-xs">Cpu-NS</th>
                <th className="text-left p-1 text-xs">Monitor1-T</th>
                <th className="text-left p-1 text-xs">Monitor1-NS</th>
                <th className="text-left p-1 text-xs">Monitor2-T</th>
                <th className="text-left p-1 text-xs">Monitor2-NS</th>
                <th className="text-left p-1 text-xs">Impressora</th>
                <th className="text-left p-1 text-xs">Telefone</th>
                <th className="text-left p-1 text-xs">Observação</th>
                {exibirAcoes ? <th className="p-1 text-xs">Ações</th> : false}

            </tr>

        )
    }


    function Qrcode() {


        return(
        alert(
        <div style={{ height: "100 px", margin: "0 auto", maxWidth: 64, width: "100%" }}>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={"valor"}
                viewBox={`0 0 256 256`}
            />
        </div>))
    }

    // Renderiza os dados do controle no tabela e formulario
    function renderizarDados() {
        return props.controles?.map((controle, i) => {
            return (
                <tr key={controle.id} className={`flex-wrap ${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                    <td className="text-left p-1 text-xs">{controle.setor}</td>
                    <td className="text-left p-1 text-xs">{controle.subsetor}</td>
                    <td className="text-left p-1 text-xs">{controle.ilha}</td>
                    <td className="text-left p-1 text-xs">{controle.baia}</td>
                    <td className="text-left p-1 text-xs">{controle.cputombo}</td>
                    <td className="text-left p-1 text-xs">{controle.cpunumeroserie}</td>
                    <td className="text-left p-1 text-xs">{controle.monitor1tombo}</td>
                    <td className="text-left p-1 text-xs">{controle.monitor1numeroserie}</td>
                    <td className="text-left p-1 text-xs">{controle.monitor2tombo}</td>
                    <td className="text-left p-1 text-xs">{controle.monitor2numeroserie}</td>
                    <td className="text-left p-1 text-xs">{controle.impressora}</td>
                    <td className="text-left p-1 text-xs">{controle.telefone}</td>
                    <td className="text-left p-1 text-xs">{controle.observacao}</td>
                    {exibirAcoes ? <th className="p-1 text-xs">{renderizarAcoes(controle)}</th> : false}
                </tr>
            )

        })
    }



    // Renderiza os botoes editar e finalizar na tabela de controles
    function renderizarAcoes(controle: Controle) {

        // <Link href="/suport/editar">editar</Link> - substituir no lugar do botao
        return (
            <td className="flex justify-center">
                {props.controleSelecionado ? (
                    <button onClick={() => props.controleSelecionado?.(controle)} className={`
                      flex justify-center items-center
                      text-green-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                        {IconeEdicao}
                        <>Editar</>
                    </button>
                ) : false
                }

                {props.controleDeletado ? (
                    <button onClick={() => props.controleDeletado?.(controle)} className={`
                      flex justify-center items-center
                      text-red-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                        {IconeDeletar}
                        <>Deletar</>
                    </button>
                ) : false
                }

                <button onClick={() => Qrcode()} className={`
                      flex justify-center items-center
                      text-red-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                    {IconeEdicao}
                    <>QRCODE</>
                </button>

            </td>
        )
    }

    return (
        <table className="w-full">
            <thead className={`
                text-gray-200
                bg-gradient-to-r from-gray-500 to-gray-600
            
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>

        </table>

    )
}