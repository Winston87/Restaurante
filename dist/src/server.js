"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
/**para rodar o projeto em typescript tem que baixa uma biblioteca
 * ts-node-dev -D e fazer script no jsompackge
 */
const routes_1 = require("./routes");
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.json()); // fala que o tipo de arquivo e json
app.use((0, cors_1.default)());
app.use(routes_1.router); // fala que minhas rotas esta dentro de router
//crindo uma rota static para mostrar a foto no front
app.use('/files', express_1.default.static(path_1.default.resolve(__dirname, '..', 'imgBanner')));
//**** tratamento de erro */
app.use((err, req, res, next) => {
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
app.listen(process.env.PORT, () => { console.log('servidor online!'); });
