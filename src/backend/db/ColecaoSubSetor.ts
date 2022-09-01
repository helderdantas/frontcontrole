import SubSetor from "../../core/subSetor/SubSetor";
import SubSetorRepositorio from "../../core/subSetor/SubSetorRepositorio";
const axios = require('axios');


export default class ColecaoSubSetor implements SubSetorRepositorio {

    async criarSubSetor(subSetor: SubSetor): Promise<SubSetor> {
        try {

            let body = {
                ativo: true,
                nome: subSetor.nome,
                nomeSetor:subSetor.nomeSetor
            };
            console.log('entrei')
            var response = await axios.post('http://localhost:3030/criarSubSetor/', body);
            console.log(response)
            var data = response.data
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async finalizarSubSetor(subSetor: SubSetor): Promise<void> {
        try {
            if (subSetor.id) {

                let config = {
                    method: 'put',
                    url: 'http://localhost:3030/updateCampoAtivoSubSetor/' + subSetor.id,
                    headers: {}
                };
                await axios(config)
                console.log('finalizado com sucesso')
            }

        } catch (error) {
            console.log(`Erro ao finalizar subSetor ${error}`)
        }

    }

    async obterSubSetoresAtivos(): Promise<SubSetor[]> {
        try {

            let response = await axios.get('http://localhost:3030/listarSubSetoresAtivos')
            return response.data

        } catch (error) {
            return error

        }
    }

    async obterTodosSubSetores(): Promise<SubSetor[]> {
        try {

            let response = await axios.get('http://localhost:3030/listarTodosSubSetores')
            return response.data

        } catch (error) {
            return error

        }
    }
}
