
interface EntradaProps {
    tipo?: 'text'
    texto: string
    valor: any
    valorMudou?: (valor: any) => void
    

}
export default function Status(props: EntradaProps) {
   
    return (
        <div>
            <label className="mb-1 mt-3">
                {props.texto}
            </label>
            <div className="flex flex-col">
                <select
                    onChange={e => props.valorMudou(e.target.value)}
                    className={`border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`}>
                    <option value={'ABERTO'} >ABERTO</option>
                    <option value={'EM ATENDIMENTO'} >EM ATENDIMENTO</option>
                    <option value={'RESOLVIDO'} >RESOLVIDO</option>
                    <option value={'NAO RESOLVIDO'} >NÃO RESOLVIDO</option>
                    <option value={'CANCELADO'} >CANCELADO</option>
                   
                </select>
            </div>


        </div>
    )

}