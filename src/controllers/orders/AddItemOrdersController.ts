import { Request, Response } from "express";
import { AddItemOrdersServices } from "../../services/orders/AddItemOrdersServices";
import { CommissionServices } from '../../services/commission/CommissionServices';
class AddItemController {

    async handle(req: Request, res: Response) {

        const {  ordem_id, product_id, amount } = req.body;
        const user_id = req.user_id

        const addItem = new AddItemOrdersServices();
        const salvar = new CommissionServices();

        const itens = await addItem.execute({

            ordem_id,
            product_id,
            amount

        });

        // adicionar venda na comissao
        let sum = (parseFloat( itens.product.price) * amount);
        let sum_commission = ((5.8 * sum) / 100);

        await salvar.execute({
            item_id: itens.id,
            user_id,
            amount,
            price: itens.product.price,
            sales: sum

        });

        const response = {
            itens,
            commission: sum_commission
        }

         return res.json(response);


    }
}

export { AddItemController }
