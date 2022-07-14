import { Request, Response } from "express";
import { ListMenuServices } from "../../services/menu/ListMenuServices";

class ListMenuController {

    async handle(req: Request, res: Response) {

        const menu = new ListMenuServices();
        const menuProduct = await menu.execute();

        return  res.json(menuProduct);


    }
}

export { ListMenuController }
