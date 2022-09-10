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
exports.AuthUserAdminController = void 0;
const authUserService_1 = require("../../services/users/authUserService");
const GetValidPermissionServices_1 = require("../../services/permission/GetValidPermissionServices");
class AuthUserAdminController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const authUserService = new authUserService_1.AuthUserServie();
            const permissionServices = new GetValidPermissionServices_1.GetValidPermissionServices();
            const auth = yield authUserService.execute({
                email, password
            });
            const permission = yield permissionServices.execute();
            if (auth.permission_id !== permission.id) {
                throw new Error("Usuario não permitido para login! ");
            }
            return res.json(auth);
        });
    }
}
exports.AuthUserAdminController = AuthUserAdminController;
