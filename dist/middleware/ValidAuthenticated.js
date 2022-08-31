"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const MensegeError_1 = require("../exceptions/mensege/MensegeError");
function ValidAuth(req, res, next) {
    const tokem = req.headers.authorization;
    if (!tokem) {
        res.status(401).json(MensegeError_1.erros.TOKEM_INVALIDO).end();
    }
    const [, tokemUser] = tokem.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(tokemUser, process.env.JWT_KEY);
        req.user_id = sub;
        return next();
    }
    catch (error) {
        res.status(401).json(MensegeError_1.erros.VALIDA_TOKEM).end();
    }
}
exports.ValidAuth = ValidAuth;
