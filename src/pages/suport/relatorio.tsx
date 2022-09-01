import { useEffect, useState } from "react";
import ColecaoChamado from "../../backend/db/ColecaoChamado";
import { GraficoChamado } from "../../components/GraficoChamados";
import { GraficoSuport } from "../../components/GraficoSuport";
import Layout from "../../components/Layout";
import Paginacao from "../../components/Paginacao";
import { useEquipamentos } from "../../hooks/useEquipamentos";
import { useSetores } from "../../hooks/useSetores";
import { useEquipeSuport } from "../../hooks/useEquipeSuport";
import ChamadoRepositorio from "../../core/chamado/ChamadoRepositorio";
const axios = require('axios');

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import TabelaChamadoPorSetor from "../../components/TabelaChamadoPorSetor";
import ColecaoSetor from "../../backend/db/ColecaoSetor";
import SetorRepositorio from "../../core/setor/SetorRepositorio";
import { Promise } from "mongoose";
import Setor from "../../core/setor/Setor";
import EquipeSuport from "../../components/EntradaListaEquipeSuport";


interface resultado {
    nomeSetor: string[],
    quantidade: number[]
}


export default function Suport() {

    // constantes inicializadoras
    const repoSetor: SetorRepositorio = new ColecaoSetor()
    const repo: ChamadoRepositorio = new ColecaoChamado()
    const [dadosSetor, setDadosSetor] = useState<resultado>({ nomeSetor: [], quantidade: [] })
    const [dadosSuport, setDadosSuport] = useState([])
    const [dadosEquipamentos, setDadosEquipamentos] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [soma, setSoma] = useState(0)



    //const setores =useSetores().map(setor=>{return setor.nome})




    //console.log(setores)

    // Transforma o tipo de dado Date no padrão string: '2022-07-01 00:00:00.000-03'
    const inicio = ((startDate.getFullYear()) + "-" + (startDate.getMonth() + 1) + "-" + (startDate.getDate()) + " 00:00:00.000-03")
    const fim = ((endDate.getFullYear()) + "-" + (endDate.getMonth() + 1) + "-" + (endDate.getDate()) + " 23:59:59.999-03")



    // função calendario
    function calendario(status: boolean) {

        if (status) {
            return (
                <DatePicker selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    showYearDropdown
                    maxDate={new Date()}
                    scrollableMonthYearDropdown
                    placeholderText="Click para selecionar a data"
                />
            );
        } else {

            return (
                <DatePicker selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    showYearDropdown
                    maxDate={new Date()}
                    scrollableMonthYearDropdown
                    placeholderText="Click para selecionar a data"
                />
            );
        }

    };

    //renderiza os componentes na tela relatorios usando como parametro a data do ano atual
    useEffect(() => {
        let x = 1
        if (x) {



            let inicio = ((endDate.getFullYear()) + "-" + '01' + "-" + '01' + " 00:00:00.000-03")
            let fim = ((endDate.getFullYear()) + "-" + '12' + "-" + '31' + " 23:59:59.999-03")

            quantidadeChamadosSetor(inicio, fim)
            quantChamadosSuport(inicio, fim)
            quantChamadosEquipamento(inicio, fim)
            x = 0
        } else {
            quantidadeChamadosSetor(inicio, fim)
        }
    }, [])



    // Funçao assincrona que lista a quantidade de chamados ocorridos nos setores dentro de um intervalo de tempo
    async function quantidadeChamadosSetor(dataIncial: string, dataFinal: string) {

        //busca os setores ativos no banco e atribui a variavel local response
        let response = await axios.get('http://localhost:3030/listarSetoresAtivos')
        //mapea a o resultado do response e cria uma lista de setores e atribui a variavel listaSetores
        let listaSetores = response.data.map(setor => setor.nome)

        // Constante que recebe o retorno das requisiçoes da quantidade de chamando
        //ocorrido em cada setor
        const promises = listaSetores.map(setor => repo.chamadosPorSetor(setor, dataIncial, dataFinal))

        // Esperamos todas as promises completarem em seguida o resultado das promises em resultados
        const resultados = await Promise.all(promises)

        // Variaveis locais criada para receberem do banco a lista contendo os nomes dos setores
        // e tambem da quantidade de chamados
        let listSetores = []
        let listQuantChamados = []

        // pronto, só iterar e montar o retorno
        Object.keys(resultados).forEach((key) => {

            listSetores.push(resultados[key].nome)
            listQuantChamados.push(resultados[key].size)


        })

        let soma = listQuantChamados.reduce(function (soma, i) {
            return soma + i;
        })
        setSoma(soma)
        setDadosSetor({ nomeSetor: listSetores, quantidade: listQuantChamados })

        return resultados
    }


    //Funcao que busca no banco de dados a quantidade de chamados por suport e cria uma lista
    async function quantChamadosSuport(dataIncial: string, dataFinal: string) {


        //busca os suportes ativos no banco e atribui a variavel local response
        let response = await axios.get('http://localhost:3030/listarEquipeSuportAtivos')
        //mapea a o resultado do response e cria uma lista de suports e atribui a variavel listaSetores
        let suportes = response.data.map((equipeSuport: { nome: any; }) => equipeSuport.nome)


        // Constante que recebe o retorno das requisiçoes da quantidade de chamando
        //ocorrido em cada setor
        const promises = suportes.map(equipeSuport => repo.chamadosPorSuport(equipeSuport, dataIncial, dataFinal))

        // Esperamos todas as promises completarem em seguida o resultado das promises em resultados
        const resultados = await Promise.all(promises)


        // Variaveis locais criada para receberem do banco a lista contendo os nomes dos setores
        // e tambem da quantidade de chamados
        let lista = [["Task", "Hours per Day"]]


        // pronto, só iterar e montar o retorno
        Object.keys(resultados).forEach((key) => {

            if (resultados[key][1]) {
                lista.push(resultados[key])
            }
        })

        setDadosSuport(lista)
        return resultados
    }


    // Funcao busca no banco de dados quantidade de chamado por equipamento e cria uma lista
    async function quantChamadosEquipamento(dataIncial: string, dataFinal: string) {

        //busca os equipamentos ativos no banco e atribui a variavel local response
        let response = await axios.get('http://localhost:3030/listarEquipamentosAtivos')
        //mapea a o resultado do response e cria uma lista de equipamentos e atribui a variavel listaSetores
        let equipamentos = response.data.map((equipamento: { nome: any; }) => equipamento.nome)

        // Constante que recebe o retorno das requisiçoes da quantidade de chamando
        //ocorrido em cada setor
        const promises = equipamentos.map(equipamentoComDefeito => repo.chamadosPorTipoEquipamento(equipamentoComDefeito, dataIncial, dataFinal))

        // Esperamos todas as promises completarem em seguida o resultado das promises em resultados
        const resultados = await Promise.all(promises)



        // Variaveis locais criada para receberem do banco a lista contendo os nomes dos setores
        // e tambem da quantidade de chamados
        let list = [["Task", "Hours per Day"]]

        // pronto, só iterar e montar o retorno
        Object.keys(resultados).forEach((key) => {

            if (resultados[key][1]) {
                list.push(resultados[key])
            }
        })

        setDadosEquipamentos(list)
        return resultados
    }



    return (

        <div className={`
            flex justify-center  items-end  min-h-screen  max-h-full
            bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50 
            `}>
            <Layout titulo="RELATÓRIOS DE CHAMADOS GERADOS">
                <div className="grid grap-2 grid-cols-4">
                    <div className={`px-2 py-2`}>
                        <h2 className={`text-xl`}>Data inicial:</h2>
                        {calendario(true)}
                    </div>
                    <div className={`px-2 py-2`}>
                        <h2 className={`text-xl`}>Data Final:</h2>
                        {calendario(false)}

                    </div>
                    <div>
                        <button className={` absolute bg-blue-800 text-white px-2 py-4 rounded-md`}
                            onClick={() => {
                                quantidadeChamadosSetor(inicio, fim)
                                quantChamadosSuport(inicio, fim)
                                quantChamadosEquipamento(inicio, fim)
                            }}>
                            <h2 className={`text-xl`}>Gerar Relátorio</h2>
                        </button>
                    </div>
                </div>
                <hr className="border-2 border-gray-600" />
                <div className={`ustify-center`}>
                    <GraficoChamado total={soma} />
                </div>
                <div className="justify-center grid grap-1 grid-cols-2">
                    <GraficoSuport title="Chamados por Suporte" data={dadosSuport} />
                    <GraficoSuport title="Chamados por Equipamento" data={dadosEquipamentos} />
                </div>
                <div className={`justify-center`}>
                    <TabelaChamadoPorSetor nome={dadosSetor.nomeSetor} size={dadosSetor.quantidade} />
                </div>

            </Layout>

        </div>


    )
}
