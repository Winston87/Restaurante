
import {  Request, Response } from "express";
import { GetProductsServices } from "../../services/products/GetProductsServices";
import { GetBannerProductsServices } from "../../services/products/GetBannerProductsServices"

class GetProductsController {

    async handle(req:Request, res: Response ) {

        const productServices = new GetProductsServices();

        const product = await productServices.execute();

        



        return res.json(product);


    }


}

export { GetProductsController }
