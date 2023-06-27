import Router from "next/router";

export default function deslogar(){
    sessionStorage.clear();
    //sessionStorage.removeItem("token");
    console.log(sessionStorage.getItem("token"))
    Router.push("/");
  }
