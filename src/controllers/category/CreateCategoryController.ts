import { Request, Response } from "express";
import { CreateCategoryServeces }  from '../../services/category/CreateCategoryServices'

class CreateCategoryController {

    async handle(req: Request, res: Response) {

        const { name } = req.body;

        const categoryServeces = new CreateCategoryServeces();

        const category = await categoryServeces.execute({name});


        return res.json(category);
    }


}

export { CreateCategoryController }
