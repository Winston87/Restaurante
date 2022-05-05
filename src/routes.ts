import { Router } from "express";// trabalhar com roteameto

import { CreatUserController } from "./controllers/users/UserController";
import { AuthUserController } from "./controllers/users/AuthUserController";

const router = Router();

router.post('/users', new CreatUserController().handle);
router.post('/session', new AuthUserController().handle);

export { router }// exportar router
