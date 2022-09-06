import { Request, Response } from "express";
import { PutProductServices } from "../../services/products/PutProductServices";
import { Mensege, erros } from "../../exceptions/mensege/MensegeError"

class PutProductController {

    async handle(req: Request, res: Response) {

        const {product_id, name, price, description, category_id } = req.body

        const productServices = new PutProductServices();


        if(!req.file) {

            throw new Mensege(erros.FALHA_SALVA_IMAGEM);

        }else{

            const { originalname, filename: banner } = req.file

            const product =  await productServices.execute({

                product_id,
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

export { PutProductController }
