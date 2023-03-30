import User from "../../../core/user/User"
import { IconeEdicao, IconeDeletar } from "../../Icones"

interface TabelaProps {
    users: User[]
    userSelecionado?: (user: User) => void
    userDeletado?: (user: User) => void

}

// Componente que criar o modelo de tabela
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.userSelecionado || props.userDeletado

    // Renderiza o cabelcaho nas pagina onde ele é chamado
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-3">Código</th>
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Email</th>
                <th className="text-left p-3">CPF</th>
                <th className="text-left p-3">Telefone</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}

            </tr>

        )
    }
    // Renderiza os dados users na tabela e formulario
    function renderizarDados() {
        return props.users?.map((user, i) => {
            return (
                <tr key={user.id} className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                    <td className="text-left p-2">{user.id}</td>
                    <td className="text-left p-2">{user.nome}</td>
                    <td className="text-left p-2">{user.email}</td>
                    <td className="text-left p-2">{user.cpf}</td>
                    <td className="text-left p-2">{user.telefone}</td>
                    {exibirAcoes ? renderizarAcoes(user) : false}
                </tr>
            )

        })
    }

    // Renderiza os botoes editar e finalizar na tabela de user
    function renderizarAcoes(user: User) {

        // <Link href="/suport/editar">editar</Link> - substituir no lugar do botao
        return (
            <td className="flex justify-center">
                {props.userSelecionado ? (
                    <button onClick={() => props.userSelecionado?.(user)} className={`
                      flex justify-center items-center
                      text-green-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                        {IconeEdicao}
                        <>Editar</>
                    </button>
                ) : false
                }

                {props.userDeletado ? (
                    <button onClick={() => props.userDeletado?.(user)} className={`
                      flex justify-center items-center
                      text-red-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                        {IconeDeletar}
                        <>Deletar</>
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