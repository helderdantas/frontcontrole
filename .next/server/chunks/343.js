"use strict";
exports.id = 343;
exports.ids = [343];
exports.modules = {

/***/ 343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Titulo.tsx

// Componente que criar o modelo de titulo
function Titulo(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "px-5 py-2 text-2xl",
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "border-2 border-gray-600"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Layout.tsx


// Componente que criar o layout da aplicacao
function Layout(props) {
    return(//configuracao do tamanho do layout w-8/9
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `
            flex flex-col w-10/12
            bg-gray-100
            text-gray-800 
            rounded-md
        `,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Titulo, {
                children: props.titulo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-2",
                children: props.children
            })
        ]
    }));
};


/***/ })

};
;