import { Request, Response } from "express";
import { PutOrderItemService } from '../../services/orders/PutOrderItemServices';

class PutOrderItemController {

    async handle(req: Request, res: Response) {

        const putItem = new PutOrderItemService();
        const {item_id, amount } = req.body;



        const item = await putItem.execute({

            item_id,
            amount

        });

        console.log()

        return res.json(item);

    }


}

export { PutOrderItemController }
