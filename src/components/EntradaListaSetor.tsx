import { useSetores } from "../hooks/useSetores";
interface EntradaProps {
    tipo?: 'text'
    texto: string
    valor: any
    valorMudou?: (valor: any) => void

}
export default function Setores(props: EntradaProps) {
    const setores = useSetores()
    function renderiza() {
        return setores?.map((setor, i) => {
            return (
                <option value={setor.nome} >{setor.nome}</option>
            )
        })
    }
    return (
        <div>
            <label className="mb-1 mt-3">
                {props.texto}
            </label>
            <div className="flex flex-col">
                <select
                    onChange={e => props.valorMudou(e.target.value)}
                    className={`border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`}>
                    <option value={''} >SELECIONE</option>
                    {renderiza()}
                </select>
            </div>


        </div>
    )

}