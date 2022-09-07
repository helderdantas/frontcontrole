"use strict";
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColecaoEquipamento)
/* harmony export */ });
const axios = __webpack_require__(167);
class ColecaoEquipamento {
    async criarEquipamento(equipamento) {
        try {
            let body = {
                ativo: true,
                nome: equipamento.nome
            };
            console.log("entrei");
            var response = await axios.post(`${"http://localhost:3030/"}criarEquipamento/`, body);
            console.log(response);
            var data = response.data;
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    async finalizarEquipamento(equipamento) {
        try {
            if (equipamento.id) {
                let config = {
                    method: "put",
                    url: `${"http://localhost:3030/"}updateCampoAtivoEquipamento/` + equipamento.id,
                    headers: {}
                };
                await axios(config);
                console.log("finalizado com sucesso");
            }
        } catch (error) {
            console.log(`Erro ao finalizar equipamento ${error}`);
        }
    }
    async obterEquipamentosAtivos() {
        try {
            let response = await axios.get(`${"http://localhost:3030/"}listarEquipamentosAtivos`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async obterTodosEquipamentos() {
        try {
            let response = await axios.get(`${"http://localhost:3030/"}listarTodosEquipamentos`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
};


/***/ })

};
;