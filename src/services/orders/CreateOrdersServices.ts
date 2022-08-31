import  prismaClient  from "../../prisma";

interface CreateProductOrder {

    table: number,
    name: string
}

class CreateOrdersServices {

    async execute({table, name}: CreateProductOrder) {

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
