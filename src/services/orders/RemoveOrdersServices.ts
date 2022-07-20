import prismaClient from "../../prisma";

interface DeleteTable {

    order_id: string;
}

class RemoveOrdersServices {

    async execute({order_id}: DeleteTable ) {

        const deletOrder = await prismaClient.order.delete({

            where: {
                id: order_id
            }
        });

        return deletOrder;

    }
}

export { RemoveOrdersServices }

