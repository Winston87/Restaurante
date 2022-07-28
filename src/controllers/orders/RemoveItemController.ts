import { Request, Response } from "express";
import { RemoveItemServices } from "../../services/orders/RemoveItemServices";
import { RemoveCommission } from '../../services/commission/RemoveCommissionServices';


class RemoveItemController {

    async handle(req: Request, res: Response) {

       const  item_id  = req.query.item_id as string

        const itemRemove = new RemoveItemServices();
        const commissionRemove = new  RemoveCommission();

        const remove = await itemRemove.execute({
            item_id

        });

        // remover item da comissao
        await commissionRemove.execute({

            item_id: remove.id
        });



        return res.status(202).json(remove);

    }
}

export { RemoveItemController }
