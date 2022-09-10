import { request, Response } from "express";
import { GetPermissionServices } from "../../services/permission/GetPermissionServices";

class GetPermissionController {

    async handle(req: Request, res: Response) {

        const permissionServices = new GetPermissionServices();

        const permission = await permissionServices.execute();

        return res.json(permission);
    }


}

export { GetPermissionController }
