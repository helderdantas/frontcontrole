import Controle from "../../core/controle/Controle";
import ControleRepositorio from "../../core/controle/ControleRepositorio";
const axios = require('axios');



export default class ColecaoControle implements ControleRepositorio {
   
    async criarControle(controle: Controle): Promise<Controle> {
        try {

            let body = {
                setor: controle.setor,
                subsetor: controle.subsetor,
                ilha: controle.ilha,
                cpu: controle.cpu,
                monitor1: controle.monitor1,
                monitor2: controle.monitor2,
                impressora: controle.impressora,
                telefone: controle.telefone,
                observacao: controle.observacao,

            };

            var response = await axios.post(`${process.env.NEXT_PUBLIC_URL}criarControle/`, body, {
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

    async atualizarControle(controle: Controle): Promise<void> {
        try {
            try {
                let config = {
                    method: 'put',
                    url: `${process.env.NEXT_PUBLIC_URL}atualizarControle/` + controle.id,
                    data: {
                        ilha: controle.ilha,
                        cpu: controle.cpu,
                        monitor1: controle.monitor1,
                        monitor2: controle.monitor2,
                        impressora: controle.impressora,
                        telefone: controle.telefone,
                        observacao: controle.observacao,
                    },
                    headers: {
                        autorizacao: "Bearer " + sessionStorage.getItem("token"),
                    },
                };
                const response = await axios(config);
                console.log('controle atualizado com sucesso')

            } catch (error) {
                console.log(error)
            }


        } catch (error) {
            console.log(error)
        }
    }

    async deletarControle(controle: Controle): Promise<void> {
        try {
            if (controle.id) {

                let config = {
                    method: 'delete',
                    url: `${process.env.NEXT_PUBLIC_URL}deletarControle/` + controle.id,
                    headers: {
                        autorizacao: "Bearer " + sessionStorage.getItem("token"),
                    },
                };
                await axios(config)
                console.log('deletado com sucesso')


            }

        } catch (error) {
            console.log(`Erro ao deletar controle ${error}`)
        }

    }


    async obterTodosControles(): Promise<Controle[]> {
        try {

            let config = {
                method: 'get',
                url: `${process.env.NEXT_PUBLIC_URL}listarControles`,
                headers: {
                    autorizacao: "Bearer " + sessionStorage.getItem("token"),
                },
            };
            let response = await axios(config)
            //let response = await axios.get(`${process.env.NEXT_PUBLIC_URL}listarControles`)
            return response.data

        } catch (error) {
            return error

        }
    }

    async obterControleControlePorId(controle: Controle): Promise<Controle> {
        try {

            let response = await axios.get(`${process.env.NEXT_PUBLIC_URL}listarControle/` + controle.id)
            return response.data

        } catch (error) {
            return error

        }
    }

    async filtrarPorSetor(setor: string): Promise<Controle[]> {
        try {
            if (setor) {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorSetor/` + setor)
                return response.data
            }

        } catch (error) {
            return error

        }
    }

    async filtrarPorSubSetor(subsetor: string): Promise<Controle[]> {

        try {

            if (subsetor) {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorSubSetor/` + subsetor)

                return response.data
            }

        } catch (error) {

            return error

        }
    }

    async filtrarPorCpu(cpu: string): Promise<Controle[]> {
        try {
            if (cpu) {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorCpu/` + cpu)
                return response.data
            }

        } catch (error) {
            return error

        }
    }


    async filtrarPorMonitor1(monitor1: string): Promise<Controle[]> {
        try {
            if (monitor1) {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorMonitor1/` + monitor1)
                return response.data
            }

        } catch (error) {
            return error

        }
    }

    async filtrarPorMonitor2(monitor2: string): Promise<Controle[]> {
        try {
            if (monitor2) {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorMonitor2/` + monitor2)
                return response.data
            }

        } catch (error) {
            return error

        }
    }


    async filtrarPorImpressora(impressora: string): Promise<Controle[]> {
        try {
            if (impressora) {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorImpressora/` + impressora)
                return response.data
            }

        } catch (error) {
            return error

        }
    }



}
