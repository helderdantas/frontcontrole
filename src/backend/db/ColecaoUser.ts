import User from "../../core/user/User";
import UserRepositorio from "../../core/user/UserRepositorio";
const axios = require('axios');


export default class ColecaoUser implements UserRepositorio {
    
    async criarUser(user: User): Promise<User> {
        try {

            let body = {
                nome: user.nome,
                email:user.email,
                cpf:user.cpf,
                password:user.password,
                telefone:user.telefone,
            };
            var response = await axios.post(`${process.env.NEXT_PUBLIC_URL}users/`, body);
            
            var data = response.data
            return data
        } catch (error) {
            console.log(error.response.data.errors)
            return error.response.data.errors
        }
    }

    async deletarUser(user: User): Promise<void> {
        try {
            if (user.id) {

                let config = {
                    method: 'delete',
                    url: `${process.env.NEXT_PUBLIC_URL}users/deletarUser/` + user.id,
                    headers: {}
                };
                await axios(config)
                console.log('Usuario deletado com sucesso')
            }

        } catch (error) {
            console.log(`Erro ao deletar usuario ${error}`)
        }

    }


    async atualizarUser(user: User): Promise<void> {
        try {
            try {
                let config = {
                    method: 'put',
                    url: `${process.env.NEXT_PUBLIC_URL}users/atualizarUser/` + user.id,
                    data: {
                        email:user.email,
                        cpf:user.cpf,
                        password:user.password,
                        telefone:user.telefone,
                        
                    }
                };
                const response = await axios(config);
                console.log('Usuario atualizado com sucesso')

            } catch (error) {
                console.log(error.response.data.errors)
                return error.response.data.errors
            }


        } catch (error) {
            console.log(error)
        }
    }

    async atualizarUserSenha(email:string, password:string): Promise<void> {
        try {
            try {

                
                let config = {
                    method: 'put',
                    url: `${process.env.NEXT_PUBLIC_URL}users/atualizarSenhaPorEmail/`,
                    data: {
                        email:email,
                        password:password,
                    }
                };
                const response = await axios(config);
                console.log(response)
                console.log('Senha alterada com sucesso')

            } catch (error) {
                console.log(error)
            }


        } catch (error) {
            console.log(error)
        }
    }

    async obterTodosUsers(): Promise<User[]> {
        try {

            let config = {
                method: 'get',
                url: `${process.env.NEXT_PUBLIC_URL}users/obterTodosUsers/`,
                headers: {
                    autorizacao: "Bearer " + sessionStorage.getItem("token"),
                },
                
            };
           const response = await axios(config)

            return response.data

        } catch (error) {
            return error

        }
    }
}