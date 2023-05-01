import SubSetor from "../../core/subSetor/SubSetor";
import SubSetorRepositorio from "../../core/subSetor/SubSetorRepositorio";
const axios = require('axios');


export default class ColecaoSubSetor implements SubSetorRepositorio {
   
    async criarSubSetor(subSetor: SubSetor): Promise<SubSetor> {
        try {

            let body = {
                ativo: true,
                nome: subSetor.nome,
                nomesetor:subSetor.nomesetor,
                telefone:subSetor.telefone,
            };
            var response = await axios.post(`${process.env.NEXT_PUBLIC_URL}subSetor/criarSubSetor/`, body,{
                headers: {
                    autorizacao: "Bearer " + sessionStorage.getItem("token"),
                },
            });
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
                    url: `${process.env.NEXT_PUBLIC_URL}subSetor/updateCampoAtivoSubSetor/` + subSetor.id,
                    headers: {
                        autorizacao: "Bearer " + sessionStorage.getItem("token"),
                    },
                };
                await axios(config)
                console.log('finalizado com sucesso')
            }

        } catch (error) {
            console.log(`Erro ao finalizar subSetor ${error}`)
        }

    }


    async atualizarTelefoneSubSetor(subSetor: SubSetor): Promise<void> {
        try {
            try {
                let config = {
                    method: 'put',
                    url: `${process.env.NEXT_PUBLIC_URL}subSetor/updateTelefoneSubSetor/` + subSetor.id,
                    data: {
                        telefone: subSetor.telefone
                    },
                    headers: {
                        autorizacao: "Bearer " + sessionStorage.getItem("token"),
                    },
                };
                const response = await axios(config);
                console.log('telefone atualizado com sucesso')

            } catch (error) {
                console.log(error)
            }


        } catch (error) {
            console.log(error)
        }
    }


    async obterSubSetoresAtivos(): Promise<SubSetor[]> {
        try {

            let config = {
                method: 'get',
                url: `${process.env.NEXT_PUBLIC_URL}subSetor/listarSubSetoresAtivos`,
                headers: {
                    autorizacao: "Bearer " + sessionStorage.getItem("token"),
                },
            }
            let response = await axios(config)
            return response.data

        } catch (error) {
            return error

        }
    }

    async obterTodosSubSetores(): Promise<SubSetor[]> {
        try {

            let config = {
                method: 'get',
                url: `${process.env.NEXT_PUBLIC_URL}subSetor/listarTodosSubSetores`,
                headers: {
                    autorizacao: "Bearer " + sessionStorage.getItem("token"),
                },
            }
            let response = await axios(config)
            return response.data

        } catch (error) {
            return error

        }
    }
}
