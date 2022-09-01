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
exports.RemoveItemController = void 0;
const RemoveItemServices_1 = require("../../services/orders/RemoveItemServices");
const RemoveCommissionServices_1 = require("../../services/commission/RemoveCommissionServices");
class RemoveItemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const item_id = req.query.item_id;
            const itemRemoveServices = new RemoveItemServices_1.RemoveItemServices();
            const commissionRemoveServices = new RemoveCommissionServices_1.RemoveCommission();
            const remove = yield itemRemoveServices.execute({
                item_id
            });
            // remover item da comissao
            yield commissionRemoveServices.execute({
                item_id: remove.id
            });
            return res.status(202).json(remove);
        });
    }
}
exports.RemoveItemController = RemoveItemController;
