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
exports.ExceptionError = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const MensegeError_1 = require("../../exceptions/mensege/MensegeError");
class ExceptionError {
    idProduct({ product_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = prisma_1.default.item.findFirst({
                where: {
                    product_id: product_id
                }
            });
            if ((yield id).product_id === product_id) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.EMAIL_EXISTENTE);
            }
        });
    }
}
exports.ExceptionError = ExceptionError;
