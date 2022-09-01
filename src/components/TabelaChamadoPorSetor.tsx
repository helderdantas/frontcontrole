
interface quantSetor {
    nome: string[],
    size: number[]
}

// Componente que criar o modelo de tabela
export default function Tabela(props: quantSetor) {



    // Renderiza o cabelcaho nas pagina onde ele é chamado
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-3">Setor</th>
                <th className="text-left p-3">Quantidade de Chamados</th>
            </tr>

        )
    }
    // Renderiza os dados do chamado no tabela e formulario
    function renderizarDados() {
        var x = 0
        return props.nome?.map((nome, i) => {

            if (props.size[i]) {
                x++
                return (
                    <>
                        <tr key={i} className={`${x % 2 === 0 ? 'bg-gray-400' : 'bg-gray-300'}`}>
                            <td className="text-left  p-2">{props.nome[i]}</td>
                            <td className="text-left p-2">{props.size[i]}</td>
                        </tr>

                    </>
                )


            }
        })



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