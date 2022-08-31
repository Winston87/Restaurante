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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionCategory = void 0;
const MensegeError_1 = require("../mensege/MensegeError");
class ExceptionCategory {
    executeCategory({ name }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name.trim()) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.NOME_EM_BRANCO);
            }
        });
    }
}
exports.ExceptionCategory = ExceptionCategory;
