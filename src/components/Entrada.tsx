interface EntradaProps {
    tipo?: 'text' | 'number' | null
    texto: string | null
    valor:any
    somenteLeitura?:boolean
    valorMudou?:(valor:any) => void
    

}
// Componete que criar o modelo de formulario de entrada/input
export default function Formulario(props: EntradaProps){
    return (
        <div className="flex flex-col">
            <label className="mb-1 mt-3 flex justify-start">
            {props.texto}        
            </label>
            <input 
            type={props.tipo ?? 'text'}
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)}
            className={`
                border border-purple-500 rounded-lg 
                focus:outline-none bg-gray-200 px-4 py-2
                ${props.somenteLeitura ? 'bg-gray' : 'bg-white'}
            `}
            />
             
        </div>
    )
}