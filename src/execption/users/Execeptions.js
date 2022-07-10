"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionUser = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class ExceptionUser {
    //validar campos de cadastro
    execute({ email, name, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email && !name && !password) {
                throw new Error("Campo e-mail, nome e senha  estão em branco!");
            }
            if (!email && !name) {
                throw new Error("Campo e-mail e nome estão em branco!");
            }
            if (!email && !password) {
                throw new Error("Campo e-mail e senha estão em branco!");
            }
            if (!name && !password) {
                throw new Error("Campo nome e senha estão em branco!");
            }
            if (!name || String(name) === ' ') {
                throw new Error("Campo nome esta em branco!");
            }
            if (!email || String(email) === ' ') {
                throw new Error("Campo e-mail esta em branco!");
            }
            if (!password) {
                throw new Error("Campo senha esta em branco!");
            }
            if (password.length !== 6) {
                throw new Error("Campo senha deve conter 6 digitos!");
            }
            //validar email se existe no banco
            const emailExist = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            if (emailExist) {
                throw new Error("E-mail ja cadastrado!");
            }
            // validar email vaido
            let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            const valid = regex.test(email);
            if (!valid) {
                throw new Error(`E-mail ${email} não e valido!`);
            }
        });
    }
    // validar campos de login
    executeLogout({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email && !password) {
                throw new Error("Campo e-mail e senha estão em branco!");
            }
            if (!email || String(email) === ' ') {
                throw new Error("Campo e-mail esta em branco!");
            }
            if (!password) {
                throw new Error("Campo senha esta em branco!");
            }
            if (password.length !== 6) {
                throw new Error("Campo senha deve conter 6 digitos!");
            }
            const senhas = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            if (!senhas) {
                throw new Error("E-mail incorreto!");
            }
            const validSenha = yield (0, bcryptjs_1.compare)(password, senhas === null || senhas === void 0 ? void 0 : senhas.password);
            if (!validSenha) {
                throw new Error("Senha incorreta!");
            }
        });
    }
}
exports.ExceptionUser = ExceptionUser;
