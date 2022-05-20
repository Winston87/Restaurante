import { Request, Response } from "express";
import { ListProductCategoryServices }  from '../../services/products/ListProductCategoryServices';

class ListProductCategoryController {

    async handle(req: Request, res: Response) {

        const category_id = req.query.category_id as string; // busca o id na query e afirma que este e uma string

        const category = new ListProductCategoryServices();

        const products = await category.execute({
             category_id

        });

        return res.json(products);


    }
}

export { ListProductCategoryController }
