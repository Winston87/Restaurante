import { Request, Response } from "express";
import { PutOrdersServices } from "../../services/orders/PutOrdersServices";

class PutOrdersController {

    async handle(req: Request, res: Response) {

        const { ordem_id } = req.body;
        const order = new PutOrdersServices();

        const putOrder = await order.execute({
            ordem_id

        });

        return res.json(putOrder);


    }
}

export {  PutOrdersController }
