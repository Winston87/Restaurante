import { Router } from "express";// trabalhar com roteameto

import { CreatUserController } from "./controllers/users/UserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { ValidAuth } from "./middleware/ValidAuthenticated";

const router = Router();

router.post('/users', new CreatUserController().handle);
router.post('/session', new AuthUserController().handle);

router.get('/detail',ValidAuth, new DetailUserController().handle );

export { router }// exportar router
