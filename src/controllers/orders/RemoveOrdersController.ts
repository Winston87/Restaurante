import { Request, Response } from "express";
import { RemoveOrdersServices } from "../../services/orders/RemoveOrdersServices";

class RemoveOrdersController {

    async handle(req: Request, res: Response) {

        const order_id = req.query.order_id as string;


        const removeOrderServices = new RemoveOrdersServices();

        const order = await removeOrderServices.execute({

            order_id
        });

        return res.json(order);


    }
}


export { RemoveOrdersController }

