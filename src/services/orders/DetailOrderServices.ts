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
            include: {

                product: true,
                order: true,
            },

        });

        return orders;
    }
}

export { DetailOrderServices }
