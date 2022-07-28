import prismaClient from "../../prisma";

interface Order {

    item_id: string
    user_id: string
    amount: number
    price: string
    sales: number
}

class CommissionServices {

    async execute({item_id,user_id, amount , price, sales}: Order) {

        const comissao = prismaClient.commission.create({


            data: {
                id:item_id,
                user_id: user_id,
                amount: amount,
                price: price,
                sales: sales
            },
            select: {
                id:true,
                amount: true,
                price: true,
                sales: true
            }
        });

        return comissao;
    }


}


export { CommissionServices }

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
