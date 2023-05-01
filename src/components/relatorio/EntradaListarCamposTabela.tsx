interface EntradaProps {
    tipo?: 'text'
    texto: string
    valor: any
    valorMudou?: (valor: any) => void

}
export default function ListarCamposTabela(props: EntradaProps) {
        
    return (
        <div className="flex flex-col m-3 mb-3">
            <label className=" text justify-start mb-1 mt-0 ">
                {props.texto}
            </label>
            <div className="flex flex-col">
                <select
                    onChange={e => props.valorMudou(e.target.value)}
                    className={`border border-purple-500 rounded-lg focus:outline-none bg-white px-10 py-3`}>
                    <option value={''} >Nenhum</option>
                    <option value={'Setor'} >Setor</option>
                    <option value={'SubSetor'} >Sub-Setor</option>
                    <option value={'CpuTombo'} >Cpu-T</option>                    
                    <option value={'CpuNumeroSerie'} >Cpu-NS</option>
                    <option value={'Monitor1Tombo'} >Monitor1-T</option>
                    <option value={'Monitor1NumeroSerie'} >Monitor1-NS</option>
                    <option value={'Monitor2Tombo'} >Monitor2-T</option>
                    <option value={'Monitor2NumeroSerie'} >Monitor2-NS</option>
                    <option value={'Impressora'} >Impressora</option>
                    <option value={'Observacao'} >Observação</option>
                </select>
            </div>


        </div>
    )

}