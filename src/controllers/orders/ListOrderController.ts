//listar pedidos feitos
import { Request, Response } from "express";
import { ListOrderService } from "../../services/orders/ListOrderServices"

class ListOrderController {

    async handle(req: Request, res: Response) {

        const ordersServices = new ListOrderService();

        const listAll = await ordersServices.execute();

        return res.json(listAll);
    }
}

export { ListOrderController }

