import Setor from "../../core/setor/Setor";
import SetorRepositorio from "../../core/setor/SetorRepositorio";
const axios = require('axios');


export default class ColecaoSetor implements SetorRepositorio {

    async criarSetor(setor: Setor): Promise<Setor> {
        try {

            let body = {
                ativo: true,
                nome: setor.nome,
            };
            console.log('entrei')
            var response = await axios.post('http://localhost:3030/criarSetor/', body);
            console.log(response)
            var data = response.data
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async finalizarSetor(setor: Setor): Promise<void> {
        try {
            if (setor.id) {

                let config = {
                    method: 'put',
                    url: 'http://localhost:3030/updateCampoAtivoSetor/' + setor.id,
                    headers: {}
                };
                await axios(config)
                console.log('finalizado com sucesso')
            }

        } catch (error) {
            console.log(`Erro ao finalizar setor ${error}`)
        }

    }

    async obterSetoresAtivos(): Promise<Setor[]> {
        try {

            let response = await axios.get('http://localhost:3030/listarSetoresAtivos')
            return response.data

        } catch (error) {
            return error

        }
    }

    async obterTodosSetores(): Promise<Setor[]> {
        try {

            let response = await axios.get('http://localhost:3030/listarTodosSetores')
            return response.data

        } catch (error) {
            return error

        }
    }
}
