"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const MensegeError_1 = require("../exceptions/mensege/MensegeError");
function ValidAuth(req, res, next) {
    const tokem = req.headers.authorization; // pega o tokem no cabelho do user logado
    if (!tokem) {
        res.status(401).json(MensegeError_1.erros.TOKEM_INVALIDO).end();
    }
    const [, tokemUser] = tokem.split(" "); // descontrucao do tokem
    try {
        //validar o tokem
        const { sub } = (0, jsonwebtoken_1.verify)(tokemUser, process.env.JWT_KEY); //<= afirma que esse verify vai me devolver um payload e este devolve um id do user logado
        req.user_id = sub;
        return next();
    }
    catch (error) {
        res.status(401).json(MensegeError_1.erros.VALIDA_TOKEM).end();
    }
}
exports.ValidAuth = ValidAuth;
