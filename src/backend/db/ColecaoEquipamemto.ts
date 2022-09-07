import Equipamento from "../../core/equipamento/Equipamento";
import EquipamentoRepositorio from "../../core/equipamento/EquipamentoRepositorio";
const axios = require('axios');


export default class ColecaoEquipamento implements EquipamentoRepositorio {

    async criarEquipamento(equipamento: Equipamento): Promise<Equipamento> {
        try {

            let body = {
                ativo: true,
                nome: equipamento.nome,
            };
            console.log('entrei')
            var response = await axios.post(`${process.env.NEXT_PUBLIC_URL}criarEquipamento/`, body);
            console.log(response)
            var data = response.data
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async finalizarEquipamento(equipamento: Equipamento): Promise<void> {
        try {
            if (equipamento.id) {

                let config = {
                    method: 'put',
                    url: `${process.env.NEXT_PUBLIC_URL}updateCampoAtivoEquipamento/` + equipamento.id,
                    headers: {}
                };
                await axios(config)
                console.log('finalizado com sucesso')
            }

        } catch (error) {
            console.log(`Erro ao finalizar equipamento ${error}`)
        }

    }

    async obterEquipamentosAtivos(): Promise<Equipamento[]> {
        try {

            let response = await axios.get(`${process.env.NEXT_PUBLIC_URL}listarEquipamentosAtivos`)
            return response.data

        } catch (error) {
            return error

        }
    }

    async obterTodosEquipamentos(): Promise<Equipamento[]> {
        try {

            let response = await axios.get(`${process.env.NEXT_PUBLIC_URL}listarTodosEquipamentos`)
            return response.data

        } catch (error) {
            return error

        }
    }
}
