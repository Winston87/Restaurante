import { Request, Response } from "express";
import { CreateUserServices } from '../../services/users/CreateUserServices';

class CreatUserController {

    async handle(req: Request, res: Response) {

        const { name, email,permission_id, password } = req.body; // recebendo requisição


        const userServices = new CreateUserServices();
        const user = await userServices.execute({ name, email, permission_id, password });

        return res.json(user)
    }
}

export { CreatUserController }






