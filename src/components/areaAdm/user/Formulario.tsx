import { useState } from "react";
import User from "../../../core/user/User";
import Botao from "../../Botao";
import Entrada from "../../Entrada";
import EntradaCpf from "../../EntradaCpf";



interface FormularioProps {
    user: User
    userMudou?: (user: User) => void
    cancelado?: () => void

}

// Componete que criar o modelo de formulario
export default function Formulario(props: FormularioProps) {
    const id = props.user?.id
    const createAt = props.user?.createAt
    const updateAt = props.user?.updateAt
    const [nome, setNome] = useState(props.user?.nome ?? '')
    const [email, setEmail] = useState(props.user?.email ?? '')
    const [cpf, setCpf] = useState(props.user?.cpf ?? '')
    const [password, setPassword] = useState(props.user?.password ?? null)
    const [telefone, setTelefone] = useState(props.user?.telefone ?? '')

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

            <Entrada
                texto="Email"
                valor={email}
                valorMudou={setEmail}

            />
            <EntradaCpf
            
            texto="CPF"
                valor={cpf}
                valorMudou={setCpf}
            
            
            />
           
            {!id ? (
                <Entrada
                    texto="Password"
                    valor={password}
                    valorMudou={setPassword}
                />

            ) : false}

            <Entrada
                texto="Telefone"
                valor={telefone}
                valorMudou={setTelefone}
            />

            <div className="mt-5 flex justify-end">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.userMudou?.(new User(nome.toUpperCase(), email, cpf, password, telefone, id, createAt, updateAt))}>
                    {id ? 'Alterar' : 'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}