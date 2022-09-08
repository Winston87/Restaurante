import { Request, Response } from "express";
import { GetSearchProductServices } from "../../services/products/GetSearchProductServices";

class GetSearchProductController {

    async handle(req: Request, res: Response ) {

        const search = new GetSearchProductServices();


    }


}

export { GetSearchProductController }
