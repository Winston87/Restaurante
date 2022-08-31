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
exports.CreateCommissionController = void 0;
const CreateCommissionServices_1 = require("../../services/commission/CreateCommissionServices");
class CreateCommissionController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id, amount, price, sales } = req.body;
            const sale = new CreateCommissionServices_1.CreateCommissionServices();
            const comissao = yield sales.execute({
                user_id,
                amount,
                price,
                sales
            });
            return res.json(comissao);
        });
    }
}
exports.CreateCommissionController = CreateCommissionController;
