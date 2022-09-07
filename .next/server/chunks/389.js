"use strict";
exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColecaoSubSetor)
/* harmony export */ });
const axios = __webpack_require__(167);
class ColecaoSubSetor {
    async criarSubSetor(subSetor) {
        try {
            let body = {
                ativo: true,
                nome: subSetor.nome,
                nomeSetor: subSetor.nomeSetor
            };
            console.log("entrei");
            var response = await axios.post(`${"http://localhost:3030/"}criarSubSetor/`, body);
            console.log(response);
            var data = response.data;
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    async finalizarSubSetor(subSetor) {
        try {
            if (subSetor.id) {
                let config = {
                    method: "put",
                    url: `${"http://localhost:3030/"}updateCampoAtivoSubSetor/` + subSetor.id,
                    headers: {}
                };
                await axios(config);
                console.log("finalizado com sucesso");
            }
        } catch (error) {
            console.log(`Erro ao finalizar subSetor ${error}`);
        }
    }
    async obterSubSetoresAtivos() {
        try {
            let response = await axios.get(`${"http://localhost:3030/"}listarSubSetoresAtivos`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async obterTodosSubSetores() {
        try {
            let response = await axios.get(`${"http://localhost:3030/"}listarTodosSubSetores`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
};


/***/ })

};
;