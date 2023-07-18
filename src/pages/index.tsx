
import Router from "next/router";
import React, { useState } from "react";
import backend_url from "./api/api";
import axios from "axios";
import Layout from "../components/Layout";
import UserRepositorio from "../core/user/UserRepositorio";
import ColecaoUser from "../backend/db/ColecaoUser";
//import { Alerta } from "../components/Alert";

export default function Login() {

  const repo: UserRepositorio = new ColecaoUser();

  // muda de login para change password
  const [page, setPage] = useState("login");

  // inputs do formulário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);

  //envio das informações para o backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (page == "login") {
      //se estiver no login
      const loginUser =
      {
        "email": email,
        "password": password,
      };
      setPassword("");

      setIsWaitingResponse(true);
      try {
        
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}tokens/`, loginUser);

        sessionStorage.setItem("token", res.data.token);
      } catch (error) {

        setIsWaitingResponse(false);
        alert("Email ou senha inválido!");
        return;
      }
      setIsWaitingResponse(false);

      try {

        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}users/obterTodosUsers`, {
          headers: {
            autorizacao: "Bearer " + sessionStorage.getItem("token"),
          },
        });

        Router.push("/home");
      } catch {
        Router.push("/");
      }
    } else if (page == "password") {
      //se estiver mudando a senha
      const loginUser = {
        email,
      };

      try {
        const res = await axios.post(backend_url + "/forgetpassword/", loginUser);
        alert("Email enviado com sucesso!");
        Router.push("/");
      } catch (e) {
        alert(e);
      }


    }
  };

  // Alterando a senha do usuario
  const alterarSenha = async () => {
    const body =
    {
      "email": email,
      "password": password,
    };
    setPassword("");
    const user = await repo.atualizarUserSenha(email, password)
  }

  //mudando o valor das variáveis
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);

  };

  return (
    <div className={`
    flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
      <Layout titulo="LOGIN">
        <br />
        <div className="text-center" >
          {page == "login" ? (
            // Login
            <form onSubmit={handleSubmit}>
              <label className="text-left px-1" htmlFor="EMAIL">EMAIL: </label>
              <input
                className="px-2"
                type="text"
                name="EMAIL"
                onChange={onChangeEmail}
                value={email}
                required
              />
              <br />
              <br />
              <label className="text-left px-1" htmlFor="PASSWORD">SENHA: </label>
              <input
                className="px-2"
                type="password"
                name="PASSWORD"
                value={password}
                onChange={onChangePassword}
                required
              />
              <br />
              <br />
              <input
                className="bg-blue-900
              text-white px-4  justify-center py-1 rounded-md"
                type="submit"
                value="ENTRAR"
                disabled={isWaitingResponse}
              />
              <br />
              <br />
              <button
                className="text-blue-900 px-4 underline"
                onClick={() => setPage("password")}
              > Esqueci a senha
              </button>



            </form>
          ) : (
            // Mudar senha
            <form onSubmit={alterarSenha}>
              <label htmlFor="EMAIL">EMAIL: </label>
              <input
                className="px-10"
                type="text"
                name="EMAIL"
                onChange={onChangeEmail}
                value={email}
                required
              />
              <label className="text-left px-1" htmlFor="PASSWORD">NOVA SENHA: </label>
              <input
                className="px-2"
                type="password"
                name="PASSWORD"
                value={password}
                onChange={onChangePassword}
                required
              />
              <input
                className="bg-blue-900
               text-white px-2 rounded-md"
                type="submit"
                value="Recuperar Senha"
                disabled={isWaitingResponse}
              />
            </form>
          )}
        </div>

      </Layout>
    </div>

  );
}