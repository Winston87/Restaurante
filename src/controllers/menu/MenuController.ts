import prismaClient from "../../prisma";
import { Request, Response } from 'express';
import qr from 'qr-image';

class MenuController {

    async handle(req: Request, res: Response) {

        // const menu = await prismaClient.menu.findFirst({
        //     select: {
        //         menu_product: true
        //     }
        // });

        //const url = `https://malagueta.herokuapp.com/files/menu/${menu.menu_product}`;
        const url = 'https://www.ilovepdf.com/pt/word_para_pdf';
        //const cardapio = menu.menu_product;

        //const url = `http://af17-45-179-106-105.ngrok.io/files/menu/${cardapio}`;

        const code = qr.image(url, {type:'png'});

        res.type('png');

        return code.pipe(res);

    }

}

export { MenuController }
