import prismaClient from "../../prisma";

interface CommissionRemove {

    item_id: string
}

class RemoveCommission {

    async execute({item_id}:CommissionRemove ) {

        const remove = await prismaClient.commission.delete({

            where: {
                id: item_id

            }

        });

        return remove;
    }
}

export { RemoveCommission }
