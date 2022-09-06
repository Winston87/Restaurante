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
exports.GetBannerProductsController = void 0;
const GetBannerProductsServices_1 = require("../../services/products/GetBannerProductsServices");
class GetBannerProductsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bannerServices = new GetBannerProductsServices_1.GetBannerProductsServices();
            const banner = bannerServices.execute();
            return banner;
        });
    }
}
exports.GetBannerProductsController = GetBannerProductsController;
