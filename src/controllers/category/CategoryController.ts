import { Request, Response } from "express";
import { CategoryServeces}  from '../../services/category/CategoryServices'

class CategoryController {

    async handle(req: Request, res: Response) {

        const { name } = req.body;

        const categoryServeces = new CategoryServeces();

        const category = await categoryServeces.execute({name});


        return res.json(category);
    }


}

export { CategoryController }
