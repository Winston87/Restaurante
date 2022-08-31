import { Request, Response} from 'express';
import { CreateCommissionServices } from   '../../services/commission/CreateCommissionServices'
class CreateCommissionController {

    async handle(req: Request, res: Response) {

        const  {user_id, amount, price, sales} = req.body

        const sale = new CreateCommissionServices();

        const comissao = await sales.execute({
            user_id,
            amount,
            price,
            sales
        });

        return res.json(comissao);

    }

}


export { CreateCommissionController }

// SELECT DISTINCT * FROM  itens WHERE ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'
// SELECT * FROM itens WHERE product_id = '9415daa1-550d-4893-a83b-bcedde21491c'

// SELECT price FROM produtos, itens WHERE ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'


// SELECT price FROM produtos p  INNER JOIN itens c ON p.id = c.product_id
// WHERE c.ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'


// SELECT price, amount FROM produtos p  INNER JOIN itens c ON p.id = c.product_id
// WHERE c.ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'

// SELECT SUM(amount) as qt FROM produtos p  INNER JOIN itens c ON p.id = c.product_id
// WHERE c.ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'

// SELECT name, price, amount FROM produtos p  INNER JOIN itens c ON p.id = c.product_id
// WHERE c.ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'
