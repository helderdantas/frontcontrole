import Setor from "../../../core/setor/Setor"
import {IconeFinalizado } from "../../Icones"

interface TabelaProps {
    setores: Setor[]
    setorSelecionado?: (setor: Setor) => void
    setorFinalizado?: (setor: Setor) => void
   
}

// Componente que criar o modelo de tabela
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.setorSelecionado || props.setorFinalizado

    // Renderiza o cabelcaho nas pagina onde ele é chamado
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-3">Código</th>
                <th className="text-left p-3">Nome</th>
                {exibirAcoes ? <th className="p-4">Inativar</th> : false}

            </tr>

        )
    }
    // Renderiza os dados do setor no tabela e formulario
    function renderizarDados() {
        return props.setores?.map((setor, i) => {
            return (
                <tr key={setor.id} className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                    <td className="text-left p-2">{setor.id}</td>
                    <td className="text-left p-2">{setor.nome}</td>
                    {exibirAcoes ? renderizarAcoes(setor) : false}
                </tr>
            )

        })
    }

    // Renderiza os botoes editar e finalizar na tabela de setors
    function renderizarAcoes(setor: Setor) {

        // <Link href="/suport/editar">editar</Link> - substituir no lugar do botao
        return (
            <td className="flex justify-center">
                {props.setorFinalizado ? (
                    <button  children={IconeFinalizado} onClick={() => props.setorFinalizado?.(setor)} className={`
                      flex justify-center items-center
                      text-blue-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}/> 
                   
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