import prismaClient from "../../prisma";

interface DetailOrder {

    order_id: string
}

class DetailOrderServices {

    async execute({order_id}: DetailOrder) {


        const orders = await prismaClient.item.findMany({


            where: {
                ordem_id: order_id
            },
            select: {
                id: true,
                amount: true,
                order: {
                    select: {
                        status: true
                    }
                },

                product: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        banner: true,

                    }
                }
            },

        });



        return orders;
    }
}

export { DetailOrderServices }

///SELECT DISTINCT * FROM  itens WHERE ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'
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
