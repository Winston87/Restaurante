import { Request, Response } from "express";
import { AuthUserServie } from '../../services/users/authUserService';
class AuthUserController {

    async handle(req: Request , res: Response) {

       const { email, password } = req.body;

       const authUserService = new AuthUserServie();

       const auth = await authUserService.execute({
           email, password
       })

       return res.json(auth);
    }

}

export { AuthUserController }

