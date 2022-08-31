
import {  Request, Response } from "express";
import { GetProductsServices } from "../../services/products/GetProductsServices";

class GetProductsController {

    async handle(req:Request, res: Response ) {

        const product_id = req.query.product_id as string;

        const productServices = new GetProductsServices();

        const product = await productServices.execute({
            product_id
        });

        return res.json(product);


    }


}

export { GetProductsController }
