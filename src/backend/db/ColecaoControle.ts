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
                baia: controle.baia,
                cputombo: controle.cputombo,
                cpunumeroserie: controle.cpunumeroserie,
                monitor1tombo: controle.monitor1tombo,
                monitor1numeroserie: controle.monitor1numeroserie,
                monitor2tombo: controle.monitor2tombo,
                monitor2numeroserie: controle.monitor2numeroserie,
                impressora: controle.impressora,
                observacao: controle.observacao,

            };
            console.log(body)
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
                        baia: controle.baia,
                        cputombo: controle.cputombo,
                        cpunumeroserie: controle.cpunumeroserie,
                        monitor1tombo: controle.monitor1tombo,
                        monitor1numeroserie: controle.monitor1numeroserie,
                        monitor2tombo: controle.monitor2tombo,
                        monitor2numeroserie: controle.monitor2numeroserie,
                        impressora: controle.impressora,
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
            console.log(response.data);
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
            console.log(subsetor)
            if (subsetor) {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorSubSetor/` + subsetor)

                return response.data
            }

        } catch (error) {

            return error

        }
    }

    async filtrarPorCpuTombo(cputombo: string): Promise<Controle[]> {
        try {
            if (cputombo) {
                console.log('entrei do cpu tombo')
                console.log(cputombo)
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorCpuTombo/`+ cputombo)
                return response.data
            }

        } catch (error) {
            return error

        }
    }

    async filtrarPorCpuNumeroSerie(cpunumeroserie: string): Promise<Controle[]> {
        try {
            if (cpunumeroserie) {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorCpuNumeroSerie/` + cpunumeroserie)
                return response.data
            }

        } catch (error) {
            return error

        }
    }


    async filtrarPorMonitor1Tombo(monitor1tombo: string): Promise<Controle[]> {
        try {
            if (monitor1tombo) {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorMonitor1Tombo/` + monitor1tombo)
                return response.data
            }

        } catch (error) {
            return error

        }
    }

    async filtrarPorMonitor1NumeroSerie(monitor1numeroserie: string): Promise<Controle[]> {
        try {
            if (monitor1numeroserie) {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorMonitor1NumeroSerie/` + monitor1numeroserie)
                return response.data
            }

        } catch (error) {
            return error

        }
    }

    async filtrarPorMonitor2Tombo(monitor2tombo: string): Promise<Controle[]> {
        try {
            if (monitor2tombo) {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorMonitor2Tombo/` + monitor2tombo)
                return response.data
            }

        } catch (error) {
            return error

        }
    }

    async filtrarPorMonitor2NumeroSerie(monitor2numeroserie: string): Promise<Controle[]> {
        try {
            if (monitor2numeroserie) {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorMonitor2NumeroSerie/` + monitor2numeroserie)
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

    async filtrarPorObservacao(valor: string): Promise<Controle[]> {
        try {
            if (valor) {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}filtrarPorObservacao/` + valor)
                return response.data
            }

        } catch (error) {
            return error

        }
    }



}
