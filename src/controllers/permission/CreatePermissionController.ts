import { Request, Response } from "express";
import { CreatePermissionServices } from "../../services/permission/CreatePermissionSevices";

class CreatePermissionController {

    async handle(req: Request, res: Response) {

        const { description } = req.body;

        const permissionServices = new CreatePermissionServices();

        const permission = await permissionServices.execute({

            description
        });

        return res.json(permission);

    }

}

export { CreatePermissionController }
