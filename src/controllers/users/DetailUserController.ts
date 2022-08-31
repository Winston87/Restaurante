import { Request, Response } from "express";
import { DetailUserService } from "../../services/users/DetailUserService";

class DetailUserController {

    async handle(req: Request, res: Response) {

        const user_id = req.user_id;

        const datailUserServices = new  DetailUserService();

        const user = await datailUserServices.execute(user_id);

        return res.json(user);


    }
}

export { DetailUserController }
