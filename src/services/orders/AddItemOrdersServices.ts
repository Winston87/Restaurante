import prismaClient from "../../prisma";

interface ItemOrders {

    ordem_id: string;
    product_id: string;
    amount: number;
}

class AddItemOrdersServices {

    async execute({ ordem_id, product_id, amount }: ItemOrders ) {


        const addItem = await prismaClient.item.create({

            data: {
                ordem_id: ordem_id,
                product_id: product_id,
                amount: amount

            },
            select: {
                id: true,
                amount: true,
                ordem_id: true,
                product: true,

            }
        });

        return addItem;

    }
}

export { AddItemOrdersServices }
