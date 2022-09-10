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
exports.AuthUserServie = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const Execeptions_1 = require("../../exceptions/users/Execeptions");
const jsonwebtoken_1 = require("jsonwebtoken"); // registra e GERA UM TOKEM
class AuthUserServie {
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExcption = new Execeptions_1.InternalError();
            yield userExcption.executeLogout({ email, password });
            const user = yield prisma_1.default.user.findFirst({
                where: { email: email }
            });
            const tokem = (0, jsonwebtoken_1.sign)({
                name: user.name,
                email: user.email
            }, "" + process.env.JWT_KEY, {
                subject: user.id,
                expiresIn: '30d'
            });
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                permission_id: user.permission_id,
                tokem: tokem
            };
        });
    }
}
exports.AuthUserServie = AuthUserServie;
