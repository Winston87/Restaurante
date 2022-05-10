"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express"); // trabalhar com roteameto
const UserController_1 = require("./controllers/users/UserController");
const AuthUserController_1 = require("./controllers/users/AuthUserController");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/users', new UserController_1.CreatUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
