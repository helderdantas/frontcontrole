(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{4184:function(_,e){var o;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var _=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var n=typeof o;if("string"===n||"number"===n)_.push(o);else if(Array.isArray(o)){if(o.length){var a=r.apply(null,o);a&&_.push(a)}}else if("object"===n)if(o.toString===Object.prototype.toString)for(var s in o)t.call(o,s)&&o[s]&&_.push(s);else _.push(o.toString())}}return _.join(" ")}_.exports?(r.default=r,_.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(_.exports=o)}()},9004:function(_,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/relatorios",function(){return o(5294)}])},6898:function(_,e,o){"use strict";o.d(e,{Z:function(){return r}});var t=o(5893);function r(_){return(0,t.jsxs)("div",{className:"flex flex-col m-3 mb-3",children:[(0,t.jsx)("label",{className:" text justify-start mb-1 mt-0 ",children:_.texto}),(0,t.jsx)("div",{className:"flex flex-col",children:(0,t.jsxs)("select",{onChange:function(e){return _.valorMudou(e.target.value)},className:"border border-purple-500 rounded-lg focus:outline-none bg-white px-10 py-3",children:[(0,t.jsx)("option",{value:"",children:"Nenhum"}),(0,t.jsx)("option",{value:"Setor",children:"Setor"}),(0,t.jsx)("option",{value:"SubSetor",children:"Sub-Setor"}),(0,t.jsx)("option",{value:"CpuTombo",children:"Cpu-T"}),(0,t.jsx)("option",{value:"CpuNumeroSerie",children:"Cpu-NS"}),(0,t.jsx)("option",{value:"Monitor1Tombo",children:"Monitor1-T"}),(0,t.jsx)("option",{value:"Monitor1NumeroSerie",children:"Monitor1-NS"}),(0,t.jsx)("option",{value:"Monitor2Tombo",children:"Monitor2-T"}),(0,t.jsx)("option",{value:"Monitor2NumeroSerie",children:"Monitor2-NS"}),(0,t.jsx)("option",{value:"Impressora",children:"Impressora"}),(0,t.jsx)("option",{value:"Observacao",children:"Observa\xe7\xe3o"})]})})]})}},5294:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Relatorio}});var _data_gpd_projetos_gpd_projeto_controle_producao_frontcontrole_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4051),_data_gpd_projetos_gpd_projeto_controle_producao_frontcontrole_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_data_gpd_projetos_gpd_projeto_controle_producao_frontcontrole_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7294),_components_Botao__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5663),_components_controle_Formulario__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(218),_components_Layout__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8798),_components_controle_Tabela__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(105),_core_controle_Controle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2316),_backend_db_ColecaoControle__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7501),_components_Entrada__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2197),_components_relatorio_EntradaListarCamposTabela__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(6898),_components_Deslogar__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9679),react_bootstrap__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(682),react_bootstrap__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(1608),_components_Rota__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(9215);function asyncGeneratorStep(_,e,o,t,r,n,a){try{var s=_[n](a),c=s.value}catch(i){return void o(i)}s.done?e(c):Promise.resolve(c).then(t,r)}function _asyncToGenerator(_){return function(){var e=this,o=arguments;return new Promise((function(t,r){var n=_.apply(e,o);function a(_){asyncGeneratorStep(n,t,r,a,s,"next",_)}function s(_){asyncGeneratorStep(n,t,r,a,s,"throw",_)}a(void 0)}))}}function Relatorio(){var obterTodosContoles=function(){repo.obterTodosControles().then((function(_){setControles(_),setVisivel("tabela")}))},controleSelecionado=function(_){setControle(_),setVisivel("form")},repo=new _backend_db_ColecaoControle__WEBPACK_IMPORTED_MODULE_8__.Z,ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_core_controle_Controle__WEBPACK_IMPORTED_MODULE_7__.Z.vazio()),controle1=ref[0],setControle=ref[1],ref1=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),controles1=ref1[0],setControles=ref1[1],ref2=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("tabela"),visivel=ref2[0],setVisivel=ref2[1],ref3=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),dado=ref3[0],setDado=ref3[1],ref4=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),campo=ref4[0],setCampo=ref4[1];function controleDeletado(_){return _controleDeletado.apply(this,arguments)}function _controleDeletado(){return(_controleDeletado=_asyncToGenerator(_data_gpd_projetos_gpd_projeto_controle_producao_frontcontrole_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _(e){return _data_gpd_projetos_gpd_projeto_controle_producao_frontcontrole_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,repo.deletarControle(e);case 2:obterTodosContoles();case 3:case"end":return _.stop()}}),_)})))).apply(this,arguments)}function salvarControle(_){return _salvarControle.apply(this,arguments)}function _salvarControle(){return(_salvarControle=_asyncToGenerator(_data_gpd_projetos_gpd_projeto_controle_producao_frontcontrole_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _(e){return _data_gpd_projetos_gpd_projeto_controle_producao_frontcontrole_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(_){for(;;)switch(_.prev=_.next){case 0:if(!e.id){_.next=5;break}return _.next=3,repo.atualizarControle(e);case 3:_.next=7;break;case 5:return _.next=7,repo.criarControle(e);case 7:obterTodosContoles();case 8:case"end":return _.stop()}}),_)})))).apply(this,arguments)}function filtroGenerico(){return _filtroGenerico.apply(this,arguments)}function _filtroGenerico(){return _filtroGenerico=_asyncToGenerator(_data_gpd_projetos_gpd_projeto_controle_producao_frontcontrole_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){var filtro;return _data_gpd_projetos_gpd_projeto_controle_producao_frontcontrole_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_ctx){for(;;)switch(_ctx.prev=_ctx.next){case 0:if(_ctx.prev=0,""!==campo){_ctx.next=5;break}obterTodosContoles(),_ctx.next=9;break;case 5:return console.log("entrei no else"),filtro=eval("repo.filtrarPor".concat(campo)),_ctx.next=9,filtro(dado.toUpperCase()).then((function(_){setControles(_),setVisivel("tabela")}));case 9:_ctx.next=15;break;case 11:_ctx.prev=11,_ctx.t0=_ctx.catch(0),console.log(_ctx.t0),obterTodosContoles();case 15:case"end":return _ctx.stop()}}),_callee,null,[[0,11]])}))),_filtroGenerico.apply(this,arguments)}return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(obterTodosContoles,[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"\n    flex justify-center items-center min-h-screen  max-h-full\n    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50\n    ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.Z,{titulo:"Relat\xf3rios",children:"tabela"===visivel?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Z,{className:"flex justify-end",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Rota__WEBPACK_IMPORTED_MODULE_12__.Z,{rota:"home",children:"Home"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Botao__WEBPACK_IMPORTED_MODULE_3__.Z,{onClick:_components_Deslogar__WEBPACK_IMPORTED_MODULE_11__.Z,className:"bg-red-800 mb-2 m-2",children:"Sair"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Z,{className:"flex jutify-start",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_relatorio_EntradaListarCamposTabela__WEBPACK_IMPORTED_MODULE_10__.Z,{texto:"Selecione o campo",valor:campo.toUpperCase(),valorMudou:setCampo}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Entrada__WEBPACK_IMPORTED_MODULE_9__.Z,{texto:"Informe o valor",valor:dado.toUpperCase(),valorMudou:setDado}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Botao__WEBPACK_IMPORTED_MODULE_3__.Z,{onClick:filtroGenerico,className:"mb-3 m-2 mt-10",children:"Buscar"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_controle_Tabela__WEBPACK_IMPORTED_MODULE_6__.Z,{controles:controles1,controleSelecionado:controleSelecionado,controleDeletado:controleDeletado})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_controle_Formulario__WEBPACK_IMPORTED_MODULE_4__.Z,{controle:controle1,controleMudou:salvarControle,cancelado:function(){return setVisivel("tabela")}})})})})}},682:function(_,e,o){"use strict";var t=o(4184),r=o.n(t),n=o(7294),a=o(6792),s=o(5893);const c=n.forwardRef((({bsPrefix:_,fluid:e,as:o="div",className:t,...n},c)=>{const i=(0,a.vE)(_,"container"),l="string"===typeof e?`-${e}`:"-fluid";return(0,s.jsx)(o,{ref:c,...n,className:r()(t,e?`${i}${l}`:i)})}));c.displayName="Container",c.defaultProps={fluid:!1},e.Z=c},1608:function(_,e,o){"use strict";var t=o(4184),r=o.n(t),n=o(7294),a=o(6792),s=o(5893);const c=n.forwardRef((({bsPrefix:_,className:e,as:o="div",...t},n)=>{const c=(0,a.vE)(_,"row"),i=(0,a.pi)(),l=(0,a.zG)(),u=`${c}-cols`,p=[];return i.forEach((_=>{const e=t[_];let o;delete t[_],null!=e&&"object"===typeof e?({cols:o}=e):o=e;const r=_!==l?`-${_}`:"";null!=o&&p.push(`${u}${r}-${o}`)})),(0,s.jsx)(o,{ref:n,...t,className:r()(e,c,...p)})}));c.displayName="Row",e.Z=c},6792:function(_,e,o){"use strict";o.d(e,{pi:function(){return i},vE:function(){return c},zG:function(){return l}});var t=o(7294);o(5893);const r=["xxl","xl","lg","md","sm","xs"],n=t.createContext({prefixes:{},breakpoints:r,minBreakpoint:"xs"}),{Consumer:a,Provider:s}=n;function c(_,e){const{prefixes:o}=(0,t.useContext)(n);return _||o[e]||e}function i(){const{breakpoints:_}=(0,t.useContext)(n);return _}function l(){const{minBreakpoint:_}=(0,t.useContext)(n);return _}}},function(_){_.O(0,[218,254,774,888,179],(function(){return e=9004,_(_.s=e);var e}));var e=_.O();_N_E=e}]);