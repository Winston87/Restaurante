import { Request, Response } from "express";
import { RemoveItemServices } from "../../services/orders/RemoveItemServices";

class RemoveItemController {

    async handle(req: Request, res: Response) {

const { item_id } = req.body

        const itemRemove = new RemoveItemServices();

        const remove = await itemRemove.execute({
            item_id

        });

        return res.status(202).json(remove);


    }
}

export { RemoveItemController }
