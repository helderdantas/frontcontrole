
import Router from "next/router";
import Botao from "./Botao";

interface Dados {
    rota?: string
    children: any
  
}

// Componente que criar o modelo de botão
export default function rotas(props: Dados) {

    const rota = (valor:string) => {
      
        return Router.push(`/${valor}`);
       }
     
    
    return (
        <>
        <Botao  className="mb-3 m-2"
        onClick={()=>rota(props.rota)}>
         {props.children}
       </Botao>
       
       </>

       
    )
}