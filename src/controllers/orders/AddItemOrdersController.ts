import { Request, Response } from "express";
import { AddItemOrdersServices } from "../../services/orders/AddItemOrdersServices";

class AddItemController {

    async handle(req: Request, res: Response) {

        const { ordem_id, product_id, amount } = req.body;

        const addItem = new AddItemOrdersServices();

        const itens = await addItem.execute({

            ordem_id,
            product_id,
            amount

        });
         return res.json(itens);


    }
}

export { AddItemController }
