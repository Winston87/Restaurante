import { Request, Response } from "express";
import { RemoveProductsServices } from "../../services/products/RemoveProductServices";
import { ExceptionError } from "../../exceptions/product/Exceptions"
class RemoveProductsController {

    async handle(req: Request, res: Response) {

        const product_id = req.query.product_id as string

        const productServices = new RemoveProductsServices();


        const product = await productServices.execute({
            product_id
        });

        return res.status(200).json(product);


        }

    }

export { RemoveProductsController }
