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
exports.InternalError = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const MensegeError_1 = require("../../exceptions/mensege/MensegeError");
class InternalError {
    //validar campos de cadastro
    execute({ email, name, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name.trim()) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.NOME_EM_BRANCO);
            }
            if (!password) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.SENHA_EM_BRANCO);
            }
            if (password.length < 6) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.SENHA_MENOR);
            }
            //validar email se existe no banco
            const emailExist = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            if (emailExist) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.EMAIL_EXISTENTE);
            }
            // validar email
            let regex = new RegExp(MensegeError_1.erros.VALIDA_TIPO_EMAIL);
            const valid = regex.test(email);
            if (!valid) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.EMAIL_NAO_VALIDO + `${email}`);
            }
        });
    }
    // validar campos de login
    executeLogout({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email.trim()) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.EMAIL_EM_BRANCO);
            }
            if (!password) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.SENHA_EM_BRANCO);
            }
            if (password.length < 6) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.SENHA_MENOR);
            }
            const senhas = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            if (!senhas) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.EMAIL_NAO_VALIDO);
            }
            const validSenha = yield (0, bcryptjs_1.compare)(password, senhas === null || senhas === void 0 ? void 0 : senhas.password);
            if (!validSenha) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.SENHA_INCORRETA);
            }
        });
    }
}
exports.InternalError = InternalError;
