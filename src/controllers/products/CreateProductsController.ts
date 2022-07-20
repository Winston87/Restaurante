import { Request, Response } from "express";
import { CreateProductsServices } from "../../services/products/CreateProductsServices";
import { Mensege, erros } from '../../exceptions/mensege/MensegeError'


class CreateProductsController {

    async handle(req: Request, res: Response) {

        const { name, price, description, category_id } = req.body;



        const createProduct = new CreateProductsServices();

        if(!req.file) {

            throw new Mensege(erros.FALHA_SALVA_IMAGEM);

        }else{

            const { originalname, filename: banner } = req.file

            const product = await createProduct.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            return res.json(product);
        }

    }

}

export { CreateProductsController }
