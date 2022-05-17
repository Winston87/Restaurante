import { Request, Response } from "express";
import { ListcategoryServices } from "../../services/category/ListCategoryServices";

class ListCategoryController {

    async handle(req: Request, res: Response) {

        const listarCategoria = new ListcategoryServices();
        const categorias = await listarCategoria.execute();

        return  res.json(categorias);


    }
}

export { ListCategoryController }
