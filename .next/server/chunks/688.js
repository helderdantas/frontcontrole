"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Formulario)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/core/chamado/Chamado.ts
var Chamado = __webpack_require__(266);
// EXTERNAL MODULE: ./src/components/Botao.tsx
var Botao = __webpack_require__(663);
// EXTERNAL MODULE: ./src/components/Entrada.tsx
var Entrada = __webpack_require__(197);
// EXTERNAL MODULE: ./src/backend/db/ColecaoEquipamemto.ts
var ColecaoEquipamemto = __webpack_require__(633);
;// CONCATENATED MODULE: ./src/hooks/useEquipamentos.tsx


//hooks que busca no banco os equipamento que estão ativos e cria uma lista de equipamentos
const useEquipamentos = ()=>{
    const repo = new ColecaoEquipamemto/* default */.Z();
    const { 0: equipamentos , 1: setEquipamentos  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(carregaEquipamentos, []);
    function carregaEquipamentos() {
        repo.obterEquipamentosAtivos().then((response)=>setEquipamentos(response)
        );
    }
    return equipamentos;
};

;// CONCATENATED MODULE: ./src/components/EntradaListaEquipamento.tsx


function Equipamentos(props) {
    const equipamentos = useEquipamentos();
    function renderiza() {
        return equipamentos?.map((equipamento, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: equipamento.nome,
                children: equipamento.nome
            });
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "mb-1 mt-3",
                children: props.texto
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    onChange: (e)=>props.valorMudou(e.target.value)
                    ,
                    className: `border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "SELECIONE"
                        }),
                        renderiza()
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/backend/db/ColecaoEquipeSuport.ts
var ColecaoEquipeSuport = __webpack_require__(523);
;// CONCATENATED MODULE: ./src/hooks/useEquipeSuport.tsx


//hooks que busca no banco o nome da equipe de suportes que estão ativos e cria uma lista de equipeSuport
const useEquipeSuport = ()=>{
    const repo = new ColecaoEquipeSuport/* default */.Z();
    const { 0: equipeSuports , 1: setEquipeSuports  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(carregaEquipeSuports, []);
    function carregaEquipeSuports() {
        repo.obterEquipeSuportAtivos().then((response)=>setEquipeSuports(response)
        );
    }
    return equipeSuports;
};

;// CONCATENATED MODULE: ./src/components/EntradaListaEquipeSuport.tsx


function EquipeSuport(props) {
    const equipeSuports = useEquipeSuport();
    function renderiza() {
        return equipeSuports?.map((suport, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: suport.nome,
                children: suport.nome
            });
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "mb-1 mt-3",
                children: props.texto
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    onChange: (e)=>props.valorMudou(e.target.value)
                    ,
                    className: `border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "SELECIONE"
                        }),
                        renderiza()
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/backend/db/ColecaoSetor.ts
var ColecaoSetor = __webpack_require__(680);
;// CONCATENATED MODULE: ./src/hooks/useSetores.tsx


//hooks que busca no banco os setores que estão ativos e cria uma lista de setores
const useSetores = ()=>{
    const repo = new ColecaoSetor/* default */.Z();
    const { 0: setores , 1: setSetores  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(carregaSetores, []);
    function carregaSetores() {
        repo.obterSetoresAtivos().then((response)=>setSetores(response)
        );
    }
    return setores;
};

;// CONCATENATED MODULE: ./src/components/EntradaListaSetor.tsx


function Setores(props) {
    const setores = useSetores();
    function renderiza() {
        return setores?.map((setor, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: setor.nome,
                children: setor.nome
            });
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "mb-1 mt-3",
                children: props.texto
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    onChange: (e)=>props.valorMudou(e.target.value)
                    ,
                    className: `border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "SELECIONE"
                        }),
                        renderiza()
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/backend/db/ColecaoSubSetor.ts
var ColecaoSubSetor = __webpack_require__(389);
;// CONCATENATED MODULE: ./src/hooks/useSubSetores.tsx


//hooks que busca no banco os SubSetores que estão ativos e cria uma lista de SubSetores
const useSubSetores = ()=>{
    const repo = new ColecaoSubSetor/* default */.Z();
    const { 0: SubSetores , 1: setSubSetores  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(carregaSubSetores, []);
    function carregaSubSetores() {
        repo.obterSubSetoresAtivos().then((response)=>setSubSetores(response)
        );
    }
    return SubSetores;
};

;// CONCATENATED MODULE: ./src/components/EntradaListaSubSetor.tsx


function subSetores(props) {
    const subSetores1 = useSubSetores();
    let list = [];
    Object.keys(subSetores1).forEach((key)=>{
        if (subSetores1[key].nomeSetor === props.setor) {
            list.push(subSetores1[key]);
        }
    });
    console.log(list);
    //console.log(props.setor)
    function renderiza() {
        return list?.map((subSetor)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: subSetor.nome,
                children: subSetor.nome
            });
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "mb-1 mt-3",
                children: props.texto
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    onChange: (e)=>props.valorMudou(e.target.value)
                    ,
                    className: `border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "SELECIONE"
                        }),
                        renderiza()
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/EntradaListaStatus.tsx

function Status(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "mb-1 mt-3",
                children: props.texto
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    onChange: (e)=>props.valorMudou(e.target.value)
                    ,
                    className: `border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "ABERTO",
                            children: "ABERTO"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "EM ATENDIMENTO",
                            children: "EM ATENDIMENTO"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "RESOLVIDO",
                            children: "RESOLVIDO"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "NAO RESOLVIDO",
                            children: "N\xc3O RESOLVIDO"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "CANCELADO",
                            children: "CANCELADO"
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Formulario.tsx










// Componete que criar o modelo de formulario
function Formulario(props) {
    const id = props.chamado?.id;
    const aberto = props.chamado?.aberto;
    const createAt = props.chamado?.createAt;
    const updateAt = props.chamado?.updateAt;
    const { 0: nome , 1: setNome  } = (0,external_react_.useState)(props.chamado?.nome ?? "");
    const { 0: setor , 1: setSetor  } = (0,external_react_.useState)(props.chamado?.setor ?? "");
    const { 0: subSetor , 1: setSubSetor  } = (0,external_react_.useState)(props.chamado?.subSetor ?? "");
    const { 0: equipamentoComDefeito , 1: setEquipamentoComDefeito  } = (0,external_react_.useState)(props.chamado?.equipamentoComDefeito ?? "");
    const { 0: equipamentoTombo , 1: setEquipamentoTombo  } = (0,external_react_.useState)(props.chamado?.equipamentoTombo ?? "");
    const { 0: descricao , 1: setDescicao  } = (0,external_react_.useState)(props.chamado?.descricao ?? "");
    const { 0: equipeSuport , 1: setEquipeSuport  } = (0,external_react_.useState)(props.chamado?.equipeSuport ?? "");
    const { 0: status , 1: setStatus  } = (0,external_react_.useState)(props.chamado?.status ?? "");
    const { 0: observacao , 1: setObservacao  } = (0,external_react_.useState)(props.chamado?.observacao ?? null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                somenteLeitura: true,
                texto: "C\xf3digo",
                valor: id
            }) : false,
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Nome",
                valor: nome.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Nome",
                valor: nome.toUpperCase(),
                valorMudou: setNome
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Setor",
                valor: setor.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Setores, {
                texto: "Setor",
                valor: setor.toUpperCase(),
                valorMudou: setSetor
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "sub-Setor",
                valor: subSetor.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(subSetores, {
                texto: "Sub-Setor",
                setor: setor,
                valor: subSetor.toUpperCase(),
                valorMudou: setSubSetor
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Equipamento com defeito",
                valor: equipamentoComDefeito.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Equipamentos, {
                texto: "Equipamento com defeito",
                valor: equipamentoComDefeito.toUpperCase(),
                valorMudou: setEquipamentoComDefeito
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Tombo do Equipamento",
                valor: equipamentoTombo.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Tombo do Equipamento",
                valor: equipamentoTombo.toUpperCase(),
                valorMudou: setEquipamentoTombo
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Descri\xe7\xe3o",
                valor: descricao.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Descri\xe7\xe3o",
                valor: descricao.toUpperCase(),
                valorMudou: setDescicao
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EquipeSuport, {
                texto: "Nome do suport",
                valor: equipeSuport.toUpperCase(),
                valorMudou: setEquipeSuport
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Status, {
                texto: "Status",
                valor: status.toUpperCase(),
                valorMudou: setStatus
            }) : false,
            !id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Observacao",
                valor: observacao.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Observacao",
                valor: observacao.toUpperCase(),
                valorMudou: setObservacao
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-5 flex justify-end",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Botao/* default */.Z, {
                        cor: "blue",
                        className: "mr-2",
                        onClick: ()=>props.chamadoMudou?.(new Chamado/* default */.Z(aberto, nome.toUpperCase(), setor.toUpperCase(), subSetor.toUpperCase(), equipamentoComDefeito.toUpperCase(), equipamentoTombo.toUpperCase(), descricao.toUpperCase(), equipeSuport.toUpperCase(), status, observacao.toUpperCase(), id, createAt, updateAt))
                        ,
                        children: id ? "Alterar" : "Criar"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Botao/* default */.Z, {
                        cor: "blue",
                        onClick: props.cancelado,
                        children: "Cancelar"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tabela)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(376);


// Componente que criar o modelo de tabela
function Tabela(props) {
    const exibirAcoes = props.chamadoSelecionado || props.chamadoFinalizado;
    // Renderiza o cabelcaho nas pagina onde ele é chamado
    function renderizarCabecalho() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-3",
                    children: "C\xf3digo"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-3",
                    children: "Nome"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-3",
                    children: "Setor"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-3",
                    children: "Subsetor"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-3",
                    children: "Equipamento com Defeito"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-3",
                    children: "Tombo do Equipamento"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-3",
                    children: "Descricao"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-3",
                    children: "Atribuido para"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-3",
                    children: "Status"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-3",
                    children: "Observa\xe7\xe3o"
                }),
                exibirAcoes ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "p-4",
                    children: "A\xe7\xf5es"
                }) : false
            ]
        });
    }
    // Renderiza os dados do chamado no tabela e formulario
    function renderizarDados() {
        return props.chamados?.map((chamado, i)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                className: `${i % 2 === 0 ? "bg-gray-300" : "bg-gray-400"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-2",
                        children: chamado.id
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-2",
                        children: chamado.nome
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-2",
                        children: chamado.setor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-2",
                        children: chamado.subSetor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-2",
                        children: chamado.equipamentoComDefeito
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-2",
                        children: chamado.equipamentoTombo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-2",
                        children: chamado.descricao
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-2",
                        children: chamado.equipeSuport
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-2",
                        children: chamado.status
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-2",
                        children: chamado.observacao
                    }),
                    exibirAcoes ? renderizarAcoes(chamado) : false
                ]
            }, chamado.id);
        });
    }
    // Renderiza os botoes editar e finalizar na tabela de chamados
    function renderizarAcoes(chamado) {
        // <Link href="/suport/editar">editar</Link> - substituir no lugar do botao
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            className: "flex justify-center",
            children: [
                props.chamadoSelecionado ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>props.chamadoSelecionado?.(chamado)
                    ,
                    className: `
                      flex justify-center items-center
                      text-green-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `,
                    children: _Icones__WEBPACK_IMPORTED_MODULE_1__/* .IconeEdicao */ .K
                }) : false,
                props.chamadoFinalizado ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>props.chamadoFinalizado?.(chamado)
                    ,
                    className: `
                      flex justify-center items-center
                      text-blue-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `,
                    children: _Icones__WEBPACK_IMPORTED_MODULE_1__/* .IconeFinalizado */ .z
                }) : false
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
        className: "w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                className: `
                text-gray-200
                bg-gradient-to-r from-gray-500 to-gray-600
            
            `,
                children: renderizarCabecalho()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                children: renderizarDados()
            })
        ]
    });
};


/***/ }),

/***/ 266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Chamado)
/* harmony export */ });
class Chamado {
    #id;
    #aberto;
    #nome;
    #setor;
    #subSetor;
    #equipamentoComDefeito;
    #equipamentoTombo;
    #descricao;
    #equipeSuport;
    #status;
    #observacao;
    #createAt;
    #updateAt;
    constructor(aberto, nome, setor, subSetor, equipamentoComDefeito, equipamentoTombo, descricao, equipeSuport, status, observacao, id = null, createAt, updateAt){
        this.#aberto = aberto;
        this.#nome = nome;
        this.#setor = setor;
        this.#subSetor = subSetor;
        this.#equipamentoComDefeito = equipamentoComDefeito;
        this.#equipamentoTombo = equipamentoTombo;
        this.#descricao = descricao;
        this.#equipeSuport = equipeSuport;
        this.#status = status;
        this.#observacao = observacao;
        this.#createAt = createAt;
        this.#updateAt = updateAt;
        this.#id = id;
    }
    static vazio() {
        return new Chamado(null, "", "", "", "", "", "", "", "", "", null, null, null);
    }
    get id() {
        return this.#id;
    }
    get aberto() {
        return this.#aberto;
    }
    get nome() {
        return this.#nome;
    }
    get setor() {
        return this.#setor;
    }
    get subSetor() {
        return this.#subSetor;
    }
    get equipamentoComDefeito() {
        return this.#equipamentoComDefeito;
    }
    get equipamentoTombo() {
        return this.#equipamentoTombo;
    }
    get descricao() {
        return this.#descricao;
    }
    get equipeSuport() {
        return this.#equipeSuport;
    }
    get status() {
        return this.#status;
    }
    get observacao() {
        return this.#observacao;
    }
    get createAt() {
        return this.#createAt;
    }
    get updateAt() {
        return this.#updateAt;
    }
};


/***/ })

};
;