// deletar uma mesa
import { Request, Response } from "express";
import { PutOrdersServices } from "../../services/orders/PutOrdersServices";

class PutOrdersController {

    async handle(req: Request, res: Response) {

        const { ordem_id } = req.body;
        const orderServices = new PutOrdersServices();

        const putOrder = await orderServices.execute({
            ordem_id

        });

        return res.json(putOrder);


    }
}

export {  PutOrdersController }
