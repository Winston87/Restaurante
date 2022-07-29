import { PutOrderItemController } from "./controllers/orders/PutOrderItemController";


router.put('/order/item',ValidAuth, new PutOrderItemController().handle);// atualizar quantidade do item no pedido

