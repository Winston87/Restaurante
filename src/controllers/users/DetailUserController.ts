import { Request, Response } from "express";
import { DetailUserService } from "../../services/users/DetailUserService";

class DetailUserController {

    async handle(req: Request, res: Response) {

        const user_id = req.user_id;

        const datailUser = new  DetailUserService();

        const user = await datailUser.execute(user_id);

        return res.json(user);


    }
}

export { DetailUserController }
