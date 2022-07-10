"use strict";
exports.__esModule = true;
var express_1 = require("express");
require("express-async-errors");
var cors_1 = require("cors");
var path_1 = require("path");
/**para rodar o projeto em typescript tem que baixa uma biblioteca
 * ts-node-dev -D e fazer script no jsompackge
 */
var routes_1 = require("./routes");
require("dotenv").config();
var app = (0, express_1["default"])();
app.use(express_1["default"].json()); // fala que o tipo de arquivo e json
app.use((0, cors_1["default"])());
app.use(routes_1.router); // fala que minhas rotas esta dentro de router
//crindo uma rota static para mostrar a foto no front
app.use('/files', express_1["default"].static(path_1["default"].resolve(__dirname, '..', 'imgBanner')));
//**** tratamento de erro */
app.use(function (err, req, res, next) {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
}); // fim
//server
app.listen(process.env.PORT || 3333, function () { console.log('servidor online!'); });
