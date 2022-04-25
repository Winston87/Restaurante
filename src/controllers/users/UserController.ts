import { Request, response, Response } from "express";
import { CreateUserServices } from '../../services/users/UserServices';

class CreatUserController {

    async handle(req: Request, res: Response) {

        const { name, emial, password } = req.body;

        const userServices = new CreateUserServices();

        const user = await userServices.execute();

        return res.json(user)
    }
}

export { CreatUserController }
