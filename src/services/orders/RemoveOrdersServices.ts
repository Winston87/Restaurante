import prismaClient from "../../prisma";

interface DeleteTable {

    order_id: string;
}

class RemoveOrdersServices {

    async execute({order_id}: DeleteTable ) {

        const table = await prismaClient.order.delete({

            where: {
                id: order_id
            }
        });

        return table;

    }
}

export { RemoveOrdersServices }

