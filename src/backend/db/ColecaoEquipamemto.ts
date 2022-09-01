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
            var response = await axios.post('http://localhost:3030/criarEquipamento/', body);
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
                    url: 'http://localhost:3030/updateCampoAtivoEquipamento/' + equipamento.id,
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

            let response = await axios.get('http://localhost:3030/listarEquipamentosAtivos')
            return response.data

        } catch (error) {
            return error

        }
    }

    async obterTodosEquipamentos(): Promise<Equipamento[]> {
        try {

            let response = await axios.get('http://localhost:3030/listarTodosEquipamentos')
            return response.data

        } catch (error) {
            return error

        }
    }
}
