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
import { ListOrderController } from "./controllers/orders/ListOrderController";
import { DetailOrderController } from "./controllers/orders/DetailOrderController";
import { FinishOrderController } from "./controllers/orders/FinishOrderController";

import upLoadConfig from './imgConfig/multer';

const router = Router();
const upload = multer(upLoadConfig.upload("imgBanner"));// local da pasta para salvar

// rotas user
router.post('/users', new CreatUserController().handle);// cadastrar usuario
router.post('/session', new AuthUserController().handle);// login usuario
router.get('/detail',ValidAuth, new DetailUserController().handle ); // detalhe usuario

//rotas category
router.post('/category', ValidAuth, new CategoryController().handle); // cadastrar categoria
router.get('/categorys/list', ValidAuth, new ListCategoryController().handle); // listar categoria

//rotas product
router.post('/product', ValidAuth, upload.single('file'), new CreateProductsController().handle); // cadastrar categoria
router.get('/category/products', ValidAuth, new ListProductCategoryController().handle ); // listar categoria

//rotas orders
router.post('/order', ValidAuth, new CreateOrdersController().handle); // abrir pedido mesa
router.delete('/order/remover/table', ValidAuth, new RemoveOrdersController().handle ); // deletar mesa
router.post('/order/add', ValidAuth, new AddItemController().handle);  // add um item a mesa
router.delete('/order/remover/item', ValidAuth, new RemoveItemController().handle); // deletar um item da mesa
router.put('/order/make', ValidAuth, new PutOrdersController().handle );  // enviar pedido
router.get('/order/listAll', ValidAuth, new ListOrderController().handle); // listar pedidos feitos
router.get('/order/detail', ValidAuth, new  DetailOrderController().handler); // detalhe do pedido
router.put('/order/finish', ValidAuth, new FinishOrderController().handler); // libera pedido para a mesa

export { router }// exportar router
