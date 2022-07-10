"use strict";
exports.__esModule = true;
exports.ValidAuth = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function ValidAuth(req, res, next) {
    var tokem = req.headers.authorization; // pega o tokem no cabelho do user logado
    if (!tokem) {
        res.status(401).json("Usuario não autorizado!").end();
    }
    var _a = tokem.split(" "), tokemUser = _a[1]; // descontrucao do tokem
    try {
        //validar o tokem
        var sub = (0, jsonwebtoken_1.verify)(tokemUser, process.env.JWT_KEY).sub; //<= afirma que esse verify vai me devolver um payload e este devolve um id do user logado
        req.user_id = sub;
        return next();
    }
    catch (error) {
        res.status(401).json("Usuario não autorizado!").end();
    }
}
exports.ValidAuth = ValidAuth;
