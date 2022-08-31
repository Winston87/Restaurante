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
exports.MenuController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const qr_image_1 = __importDefault(require("qr-image"));
class MenuController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = yield prisma_1.default.menu.findFirst({
                select: {
                    menu_product: true
                }
            });
            const url = `https://malagueta.herokuapp.com/files/menu/${menu.menu_product}`;
            const cardapio = menu.menu_product;
            const code = qr_image_1.default.image(url, { type: 'png' });
            res.type('png');
            return code.pipe(res);
        });
    }
}
exports.MenuController = MenuController;
