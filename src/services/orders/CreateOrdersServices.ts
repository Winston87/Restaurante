import  prismaClient  from "../../prisma";

interface OrdersProduct {

    table: number,
    name: string
}

class CreateOrdersServices {

    async execute({table, name}: OrdersProduct) {

        const orders = await prismaClient.order.create({

            data: {
                table: table,
                name: name
            },
            select: {
                id: true,
                table: true,
                name: true,
                status: true,
                draft: true
            }
        });


        return orders;


    }
}

export { CreateOrdersServices }
