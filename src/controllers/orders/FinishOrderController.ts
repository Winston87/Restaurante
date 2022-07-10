import { Request, Response } from "express";
import { FinishOrderServices } from "../../services/orders/FinishOrderServices";

class FinishOrderController {

    async handler(req:Request, res: Response) {

        const { order_id } = req.body;

        const orders = new FinishOrderServices();

        const FinishOrder = await orders.exeute({

            order_id
        });

        return res.json(FinishOrder);


    }
}

export{ FinishOrderController }
