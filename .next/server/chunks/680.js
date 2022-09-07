"use strict";
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColecaoSetor)
/* harmony export */ });
const axios = __webpack_require__(167);
class ColecaoSetor {
    async criarSetor(setor) {
        try {
            let body = {
                ativo: true,
                nome: setor.nome
            };
            console.log("entrei");
            var response = await axios.post(`${"http://localhost:3030/"}criarSetor/`, body);
            console.log(response);
            var data = response.data;
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    async finalizarSetor(setor) {
        try {
            if (setor.id) {
                let config = {
                    method: "put",
                    url: `${"http://localhost:3030/"}updateCampoAtivoSetor/` + setor.id,
                    headers: {}
                };
                await axios(config);
                console.log("finalizado com sucesso");
            }
        } catch (error) {
            console.log(`Erro ao finalizar setor ${error}`);
        }
    }
    async obterSetoresAtivos() {
        try {
            let response = await axios.get(`${"http://localhost:3030/"}listarSetoresAtivos`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async obterTodosSetores() {
        try {
            let response = await axios.get(`${"http://localhost:3030/"}listarTodosSetores`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
};


/***/ })

};
;