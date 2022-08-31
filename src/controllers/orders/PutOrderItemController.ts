//alterar quantidade de itens pedido
import { Request, Response } from "express";
import { PutOrderItemService } from '../../services/orders/PutOrderItemServices';
import { DataItemCommission } from '../../services/commission/CreateCommissionServices';
import { PutCommissionServices } from '../../services/commission/PutCommissionServices';


class PutOrderItemController {

    async handle(req: Request, res: Response) {

        const putItemServiices = new PutOrderItemService();
        const dataServices = new DataItemCommission();
        const putDataItemServices = new PutCommissionServices();

        const {item_id, amount } = req.body;

        const item = await putItemServiices.execute({

            item_id,
            amount

        });

        const dataItem = await dataServices.data({
            item_id
        });

        // atualizar comisssao caso tenha alteração nos itens

        let sum = (parseFloat( dataItem.price) * amount);

        await putDataItemServices.execute({
            item_id,
            amount,
            sales: sum
        });

        return res.json(item);

    }

}

export { PutOrderItemController }
