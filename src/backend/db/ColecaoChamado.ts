import Chamado from "../../core/chamado/Chamado";
import ChamadoRepositorio from "../../core/chamado/ChamadoRepositorio";
const axios = require('axios');


export default class ColecaoChamado implements ChamadoRepositorio {
    async criarChamado(chamado: Chamado): Promise<Chamado> {
        try {

            let body = {
                aberto: true,
                nome: chamado.nome,
                setor: chamado.setor,
                subSetor: chamado.subSetor,
                equipamentoComDefeito: chamado.equipamentoComDefeito,
                equipamentoTombo:chamado.equipamentoTombo,
                descricao: chamado.descricao,
                equipeSuport: chamado.equipeSuport,
                status: "ABERTO",
                observacao: chamado.observacao,

            };
            
            var response = await axios.post('http://localhost:3030/criarChamado/', body);
            console.log(response)
            var data = response.data
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async atualizarChamado(chamado: Chamado): Promise<void> {
        try {
            try {
                let config = {
                    method: 'put',
                    url: 'http://localhost:3030/updateChamado/' + chamado.id,
                    data: {
                        subSetor: chamado.subSetor,
                        equipamentoComDefeito: chamado.equipamentoComDefeito,
                        equipeSuport: chamado.equipeSuport,
                        status: chamado.status,
                        observacao: chamado.observacao
                    }
                };
                const response = await axios(config);
                console.log('atualizado com sucesso')

            } catch (error) {
                console.log(error)
            }


        } catch (error) {
            console.log(error)
        }
    }

    async finalizarChamado(chamado: Chamado): Promise<void> {
        try {
            if (chamado.id) {

                let config = {
                    method: 'put',
                    url: 'http://localhost:3030/updateCampoAbertoChamado/' + chamado.id,
                    headers: {}
                };
                await axios(config)
                console.log('finalizado com sucesso')


            }

        } catch (error) {
            console.log(`Erro ao finalizar chamado ${error}`)
        }

    }

    async obterChamadosAbertos(): Promise<Chamado[]> {
        try {

            let response = await axios.get('http://localhost:3030/listarChamadosAbertos')
            return response.data

        } catch (error) {
            return error

        }
    }

    async obterTodosChamados(): Promise<Chamado[]> {
        try {

            let response = await axios.get('http://localhost:3030/listarTodosChamados')
            return response.data

        } catch (error) {
            return error

        }
    }

    async chamadosPorSetor(nome:string, dataInicial:string, dataFinal:string): Promise<{}> {
        try {

            let body = {
                setor:nome,
                dataInicial:dataInicial,
                dataFinal:dataFinal,
                }
            const response = await axios.post('http://localhost:3030/chamadosPorSetor', body)
            return (response.data)

        } catch (error) {
            return error

        }
    }

    async chamadosPorSuport(nome:string, dataInicial:string, dataFinal:string): Promise<{}> {
        try {

            let body = {
                equipeSuport:nome,
                dataInicial:dataInicial,
                dataFinal:dataFinal,
                }
            const response = await axios.post('http://localhost:3030/chamadosPorSuport', body)
            return (response.data)

        } catch (error) {
            return error

        }
    }

    async chamadosPorTipoEquipamento(nome:string, dataInicial:string, dataFinal:string): Promise<{}> {
        try {

            let body = {
                equipamentoComDefeito:nome,
                dataInicial:dataInicial,
                dataFinal:dataFinal,
                }
            const response = await axios.post('http://localhost:3030/chamadosPorTipoEquipamento', body)
            return (response.data)

        } catch (error) {
            return error

        }
    }



}
