import SubSetor from "../../../core/subSetor/SubSetor"
import {IconeFinalizado } from "../../Icones"

interface TabelaProps {
    subSetors: SubSetor[]
    subSetorSelecionado?: (subSetor: SubSetor) => void
    subSetorFinalizado?: (subSetor: SubSetor) => void
   
}

// Componente que criar o modelo de tabela
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.subSetorSelecionado || props.subSetorFinalizado

    // Renderiza o cabelcaho nas pagina onde ele é chamado
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-3">Código</th>
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Setor</th>
                {exibirAcoes ? <th className="p-4">Inativar</th> : false}

            </tr>

        )
    }
    // Renderiza os dados do subSetor na tabela e formulario
    function renderizarDados() {
        return props.subSetors?.map((subSetor, i) => {
            return (
                <tr key={subSetor.id} className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                    <td className="text-left p-2">{subSetor.id}</td>
                    <td className="text-left p-2">{subSetor.nome}</td>
                    <td className="text-left p-2">{subSetor.nomeSetor}</td>
                    {exibirAcoes ? renderizarAcoes(subSetor) : false}
                </tr>
            )

        })
    }

    // Renderiza os botoes editar e finalizar na tabela de subSetors
    function renderizarAcoes(subSetor: SubSetor) {

        // <Link href="/suport/editar">editar</Link> - substituir no lugar do botao
        return (
            <td className="flex justify-center">
                {props.subSetorFinalizado ? (
                    <button  children={IconeFinalizado} onClick={() => props.subSetorFinalizado?.(subSetor)} className={`
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