import { Request, Response } from 'express';
import { UploadMenuServices } from '../../services/menu/UploadMenuServices';

class UploadMenuController {

    async handle(req: Request, res: Response) {

        const menuProduct = new UploadMenuServices();

        if(!req.file) {

            throw new Error("Falha em salvar imagem!");

        }else{

            const { originalname, filename: menu_product } = req.file

            const product = await menuProduct.execute({

                menu_product

            });

        return res.json(product);
    }

}
}
export { UploadMenuController }
