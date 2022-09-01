import Chamado from "../core/chamado/Chamado"
import { IconeEdicao, IconeFinalizado } from "./Icones"

interface TabelaProps {
    chamados: Chamado[]
    chamadoSelecionado?: (chamado: Chamado) => void
    chamadoFinalizado?: (chamado: Chamado) => void
   
}

// Componente que criar o modelo de tabela
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.chamadoSelecionado || props.chamadoFinalizado

    // Renderiza o cabelcaho nas pagina onde ele é chamado
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-3">Código</th>
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Setor</th>
                <th className="text-left p-3">Subsetor</th>
                <th className="text-left p-3">Equipamento com Defeito</th>
                <th className="text-left p-3">Tombo do Equipamento</th>
                <th className="text-left p-3">Descricao</th>
                <th className="text-left p-3">Atribuido para</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Observação</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}

            </tr>

        )
    }
    // Renderiza os dados do chamado no tabela e formulario
    function renderizarDados() {
        return props.chamados?.map((chamado, i) => {
            return (
                <tr key={chamado.id} className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                    <td className="text-left p-2">{chamado.id}</td>
                    <td className="text-left p-2">{chamado.nome}</td>
                    <td className="text-left p-2">{chamado.setor}</td>
                    <td className="text-left p-2">{chamado.subSetor}</td>
                    <td className="text-left p-2">{chamado.equipamentoComDefeito}</td>
                    <td className="text-left p-2">{chamado.equipamentoTombo}</td>
                    <td className="text-left p-2">{chamado.descricao}</td>
                    <td className="text-left p-2">{chamado.equipeSuport}</td>
                    <td className="text-left p-2">{chamado.status}</td>
                    <td className="text-left p-2">{chamado.observacao}</td>
                    {exibirAcoes ? renderizarAcoes(chamado) : false}
                </tr>
            )

        })
    }

    // Renderiza os botoes editar e finalizar na tabela de chamados
    function renderizarAcoes(chamado: Chamado) {

        // <Link href="/suport/editar">editar</Link> - substituir no lugar do botao
        return (
            <td className="flex justify-center">
                {props.chamadoSelecionado ? (
                    <button onClick={() => props.chamadoSelecionado?.(chamado)} className={`
                      flex justify-center items-center
                      text-green-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                    {IconeEdicao}
                    </button>
                ) : false
                }

                {props.chamadoFinalizado ? (
                    <button onClick={() => props.chamadoFinalizado?.(chamado)} className={`
                      flex justify-center items-center
                      text-blue-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                        {IconeFinalizado}
                    </button>
                ) : false
                }
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