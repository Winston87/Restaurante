import { Router } from "express";// trabalhar com roteameto
import multer from 'multer';

import { CreatUserController } from "./controllers/users/UserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { ValidAuth } from "./middleware/ValidAuthenticated";
import { CategoryController } from "./controllers/category/CategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductsController } from "./controllers/products/CreateProductsController";

import upLoadConfig from './imgConfig/multer'

const router = Router();
const upload = multer(upLoadConfig.upload("imgBanner"))

// rotas user
router.post('/users', new CreatUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/detail',ValidAuth, new DetailUserController().handle )

//rotas category
router.post('/category', ValidAuth, new CategoryController().handle);
router.get('/categorys/list', ValidAuth, new ListCategoryController().handle)

//rotas product
router.post('/product', ValidAuth, upload.single('file'), new CreateProductsController().handle)

export { router }// exportar router
