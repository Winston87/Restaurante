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
exports.PutOrderItemService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class PutOrderItemService {
    execute({ item_id, amount }) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = prisma_1.default.item.update({
                where: {
                    id: item_id,
                },
                data: {
                    amount: amount
                },
                select: {
                    ordem_id: true,
                    product: true,
                    amount: true
                }
            });
            const itens = prisma_1.default.item.findMany({
                where: {
                    ordem_id: (yield item).ordem_id
                },
                select: {
                    id: true,
                    amount: true,
                    product: {
                        select: {
                            id: true,
                            name: true,
                            description: true,
                            price: true,
                            banner: true,
                        }
                    }
                },
            });
            return itens;
        });
    }
}
exports.PutOrderItemService = PutOrderItemService;
