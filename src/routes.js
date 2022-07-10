"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express"); // trabalhar com roteameto
var multer_1 = require("multer");
var UserController_1 = require("./controllers/users/UserController");
var AuthUserController_1 = require("./controllers/users/AuthUserController");
var DetailUserController_1 = require("./controllers/users/DetailUserController");
var ValidAuthenticated_1 = require("./middleware/ValidAuthenticated");
var CategoryController_1 = require("./controllers/category/CategoryController");
var ListCategoryController_1 = require("./controllers/category/ListCategoryController");
var CreateProductsController_1 = require("./controllers/products/CreateProductsController");
var ListProductCategoryController_1 = require("./controllers/products/ListProductCategoryController");
var CreateOrdersController_1 = require("./controllers/orders/CreateOrdersController");
var RemoveOrdersController_1 = require("./controllers/orders/RemoveOrdersController");
var AddItemOrdersController_1 = require("./controllers/orders/AddItemOrdersController");
var RemoveItemController_1 = require("./controllers/orders/RemoveItemController");
var PutOrdersController_1 = require("./controllers/orders/PutOrdersController");
var ListOrderController_1 = require("./controllers/orders/ListOrderController");
var DetailOrderController_1 = require("./controllers/orders/DetailOrderController");
var FinishOrderController_1 = require("./controllers/orders/FinishOrderController");
var multer_2 = require("./imgConfig/multer");
var router = (0, express_1.Router)();
exports.router = router;
var upload = (0, multer_1["default"])(multer_2["default"].upload("imgBanner")); // local da pasta para salvar
// rotas user
router.post('/users', new UserController_1.CreatUserController().handle); // cadastrar usuario
router.post('/session', new AuthUserController_1.AuthUserController().handle); // login usuario
router.get('/detail', ValidAuthenticated_1.ValidAuth, new DetailUserController_1.DetailUserController().handle); // detalhe usuario
//rotas category
router.post('/category', ValidAuthenticated_1.ValidAuth, new CategoryController_1.CategoryController().handle); // cadastrar categoria
router.get('/categorys/list', ValidAuthenticated_1.ValidAuth, new ListCategoryController_1.ListCategoryController().handle); // listar categoria
//rotas product
router.post('/product', ValidAuthenticated_1.ValidAuth, upload.single('file'), new CreateProductsController_1.CreateProductsController().handle); // cadastrar categoria
router.get('/category/products', ValidAuthenticated_1.ValidAuth, new ListProductCategoryController_1.ListProductCategoryController().handle); // listar categoria
//rotas orders
router.post('/order', ValidAuthenticated_1.ValidAuth, new CreateOrdersController_1.CreateOrdersController().handle); // abrir pedido mesa
router["delete"]('/order/remover/table', ValidAuthenticated_1.ValidAuth, new RemoveOrdersController_1.RemoveOrdersController().handle); // deletar mesa
router.post('/order/add', ValidAuthenticated_1.ValidAuth, new AddItemOrdersController_1.AddItemController().handle); // add um item a mesa
router["delete"]('/order/remover/item', ValidAuthenticated_1.ValidAuth, new RemoveItemController_1.RemoveItemController().handle); // deletar um item da mesa
router.put('/order/make', ValidAuthenticated_1.ValidAuth, new PutOrdersController_1.PutOrdersController().handle); // enviar pedido
router.get('/order/listAll', ValidAuthenticated_1.ValidAuth, new ListOrderController_1.ListOrderController().handle); // listar pedidos feitos
router.get('/order/detail', ValidAuthenticated_1.ValidAuth, new DetailOrderController_1.DetailOrderController().handler); // detalhe do pedido
router.put('/order/finish', ValidAuthenticated_1.ValidAuth, new FinishOrderController_1.FinishOrderController().handler); // libera pedido para a mesa
