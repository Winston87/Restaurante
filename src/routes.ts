import { Router } from "express";// trabalhar com roteameto
import multer from 'multer';

import { CreatUserController } from "./controllers/users/UserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { ValidAuth } from "./middleware/ValidAuthenticated";
import { CategoryController } from "./controllers/category/CategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductsController } from "./controllers/products/CreateProductsController";
import { ListProductCategoryController } from "./controllers/products/ListProductCategoryController";
import { CreateOrdersController } from "./controllers/orders/CreateOrdersController";
import { RemoveOrdersController } from "./controllers/orders/RemoveOrdersController";
import { AddItemController } from "./controllers/orders/AddItemOrdersController";
import { RemoveItemController } from "./controllers/orders/RemoveItemController";
import { PutOrdersController } from "./controllers/orders/PutOrdersController";

import upLoadConfig from './imgConfig/multer';

const router = Router();
const upload = multer(upLoadConfig.upload("imgBanner"));// local da pasta para salvar

// rotas user
router.post('/users', new CreatUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/detail',ValidAuth, new DetailUserController().handle );

//rotas category
router.post('/category', ValidAuth, new CategoryController().handle);
router.get('/categorys/list', ValidAuth, new ListCategoryController().handle);

//rotas product
router.post('/product', ValidAuth, upload.single('file'), new CreateProductsController().handle);
router.get('/category/products', ValidAuth, new ListProductCategoryController().handle );

//rotas orders
router.post('/order', ValidAuth, new CreateOrdersController().handle);
router.delete('/order/remover/table', ValidAuth, new RemoveOrdersController().handle );
router.post('/order/add', ValidAuth, new AddItemController().handle);
router.delete('/order/remover/item', ValidAuth, new RemoveItemController().handle);
router.put('/order/make', ValidAuth, new PutOrdersController().handle );

export { router }// exportar router
