import Setor from "../../core/setor/Setor";
import SetorRepositorio from "../../core/setor/SetorRepositorio";
const axios = require('axios');


export default class ColecaoSetor implements SetorRepositorio {
   
    async criarSetor(setor: Setor): Promise<Setor> {
        try {

            let body = {
                ativo: true,
                nome: setor.nome,
                telefone: setor.telefone,
            };
           
            var response = await axios.post(`${process.env.NEXT_PUBLIC_URL}setor/criarSetor/`, body, {
                headers: {
                    autorizacao: "Bearer " + sessionStorage.getItem("token"),
                },
            });
        
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
                    url: `${process.env.NEXT_PUBLIC_URL}setor/updateCampoAtivoSetor/` + setor.id,
                    headers: {
                        autorizacao: "Bearer " + sessionStorage.getItem("token"),
                    },
                };
                await axios(config)
                console.log('finalizado com sucesso')
            }

        } catch (error) {
            console.log(`Erro ao finalizar setor ${error}`)
        }

    }

    async atualizarTelefoneSetor(setor: Setor): Promise<void> {
        try {
            try {
                let config = {
                    method: 'put',
                    url: `${process.env.NEXT_PUBLIC_URL}setor/updateTelefoneSetor/` + setor.id,
                    data: {
                        telefone: setor.telefone
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


    async obterSetoresAtivos(): Promise<Setor[]> {
        try {

            let config = {
                method: 'get',
                url:`${process.env.NEXT_PUBLIC_URL}setor/listarSetoresAtivos`,
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

    async obterTodosSetores(): Promise<Setor[]> {
        try {

            let config = {
                method: 'get',
                url:`${process.env.NEXT_PUBLIC_URL}setor/listarTodosSetores`,
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
