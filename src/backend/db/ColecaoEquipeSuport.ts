import EquipeSuport from "../../core/equipeSuport/EquipeSuport";
import EquipeSuportRepositorio from "../../core/equipeSuport/EquipeSuportRepositorio";
const axios = require('axios');


export default class ColecaoEquipeSuport implements EquipeSuportRepositorio {

    async criarEquipeSuport(equipeSuport: EquipeSuport): Promise<EquipeSuport> {
        try {

            let body = {
                ativo: true,
                nome: equipeSuport.nome,
            };
            console.log('entrei')
            var response = await axios.post('http://localhost:3030/criarEquipeSuport/', body);
            console.log(response)
            var data = response.data
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async finalizarEquipeSuport(equipeSuport: EquipeSuport): Promise<void> {
        try {
            if (equipeSuport.id) {

                let config = {
                    method: 'put',
                    url: 'http://localhost:3030/updateCampoAtivoEquipeSuport/' + equipeSuport.id,
                    headers: {}
                };
                await axios(config)
                console.log('finalizado com sucesso')
            }

        } catch (error) {
            console.log(`Erro ao finalizar equipeSuport ${error}`)
        }

    }

    async obterEquipeSuportAtivos(): Promise<EquipeSuport[]> {
        try {

            let response = await axios.get('http://localhost:3030/listarEquipeSuportAtivos')
            return response.data

        } catch (error) {
            return error

        }
    }

    async obterTodosEquipeSuport(): Promise<EquipeSuport[]> {
        try {

            let response = await axios.get('http://localhost:3030/listarTodosEquipeSuport')
            return response.data

        } catch (error) {
            return error

        }
    }
}
