import { Request, Response } from "express";
import { ListOrderService } from "../../services/orders/ListOrderServices"

class ListOrderController {

    async handle(req: Request, res: Response) {

        const orders = new ListOrderService();

        const listAll = await orders.execute();

        return res.json(listAll);
    }
}

export { ListOrderController }
