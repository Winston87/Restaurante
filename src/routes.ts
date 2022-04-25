import { Router } from "express";// trabalhar com roteameto

import { CreatUserController } from "./controllers/users/UserController";

const router = Router();

router.post('/users', new CreatUserController().handle);

export { router }// exportar router
