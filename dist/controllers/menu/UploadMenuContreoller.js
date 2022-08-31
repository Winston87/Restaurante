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
exports.UploadMenuController = void 0;
const UploadMenuServices_1 = require("../../services/menu/UploadMenuServices");
const MensegeError_1 = require("../../exceptions/mensege/MensegeError");
class UploadMenuController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menuProduct = new UploadMenuServices_1.UploadMenuServices();
            if (!req.file) {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.FALHA_SALVA_IMAGEM);
            }
            else {
                const { originalname, filename: menu_product } = req.file;
                const product = yield menuProduct.execute({
                    menu_product
                });
                return res.json(product);
            }
        });
    }
}
exports.UploadMenuController = UploadMenuController;
