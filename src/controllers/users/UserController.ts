import { Request, Response } from "express";
import { CreateUserServices } from '../../services/users/UserServices';

class CreatUserController {

    async handle(req: Request, res: Response) {

        const { name, emai, password } = req.body; // recebendo requisição

        const userServices = new CreateUserServices();

        const user = await userServices.execute({ name, emai, password });

        return res.json(user)
    }
}

export { CreatUserController }




