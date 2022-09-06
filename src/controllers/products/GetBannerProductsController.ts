import { Request, Response } from "express";
import { GetBannerProductsServices } from "../../services/products/GetBannerProductsServices";

class GetBannerProductsController {

    async handle(req: Request, res: Response) {

        const bannerServices = new GetBannerProductsServices();

        const banner = bannerServices.execute();


        return banner;
    }

}

export { GetBannerProductsController }
