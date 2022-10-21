import SubSetor from "../core/subSetor/SubSetor";
import { useSubSetores } from "../hooks/useSubSetores";
interface EntradaProps {
    tipo?: 'text'
    setor?:string
    texto: string
    valor: any
    valorMudou?: (valor: any) => void

}
export default function subSetores(props: EntradaProps) {
    const subSetores = useSubSetores()
   
   let list=[]
   Object.keys(subSetores).forEach((key) => {

        if (subSetores[key].nomeSetor === props.setor) {
            list.push(subSetores[key])
        }
    })
    console.log(list)
    //console.log(props.setor)
    function renderiza() {
        return list?.map((subSetor) => {
            return (
                <option value={subSetor.nome} >{subSetor.nome}</option>
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