// abrir mesa
import { Request, Response } from "express";
import { CreateOrdersServices } from "../../services/orders/CreateOrdersServices";

class CreateOrdersController {

    async handle(req: Request, res: Response) {

        const { table, name } = req.body;

        const ordersProductServices = new CreateOrdersServices();

        const orders = await ordersProductServices.execute({

            table,
            name

        });

        return res.json(orders);


    }
}

export { CreateOrdersController }
