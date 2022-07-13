import { Request, Response } from 'express';
import qr from 'qr-image';

class ListMenuController {

    async handle(req: Request, res: Response) {

        const url = 'https://malagueta.herokuapp.com/menu/upload';

        const code = qr.image(url, {type: 'svg'})

        res.type('svg');

        return code.pipe(res);


    }
}

export { ListMenuController }
