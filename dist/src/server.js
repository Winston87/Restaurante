"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
/**para rodar o projeto em typescript tem que baixa uma biblioteca
 * ts-node-dev -D efazer script no jsompackge
 */
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json()); // fala que o tipo de arquivo e json
app.use((0, cors_1.default)());
app.use(routes_1.router); // fala que minhas rotas esta dentro de router
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
app.listen(process.env.PORT || 3333, () => { console.log('servidor online!'); });
