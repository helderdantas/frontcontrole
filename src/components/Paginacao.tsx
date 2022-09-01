import React from "react";

const MAX_ITENS = 9;
const MAX_LEFT = (MAX_ITENS -1) /2;

const Paginacao = ({limite,total,offset}) =>{
    const paginaAtual = offset ? (offset/limite) + 1 : 1;
    const pages = Math.ceil(total / limite);
    const primeitaPagina = Math.max(paginaAtual - MAX_LEFT, 1);

    return (
        <ul>
            {Array.from({length : MAX_ITENS})
            .map((_, index) => index + primeitaPagina)
            .map((page) => (

                <li>{page}</li>

            ))}
        </ul>
    )

}

export default Paginacao;